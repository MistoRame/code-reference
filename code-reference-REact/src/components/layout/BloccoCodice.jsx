import { Highlight, themes } from 'prism-react-renderer';

function BloccoCodice({ codice, linguaggio = 'html' }) {
  return (
    <Highlight theme={themes.oneDark} code={codice.trim()} language={linguaggio}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`codice ${className}`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default BloccoCodice;