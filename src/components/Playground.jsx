import { useEffect, useRef } from 'react';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { basicSetup } from 'codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';

function Playground() {
  const htmlContainerRef = useRef(null);
  const cssContainerRef = useRef(null);
  const iframeRef = useRef(null);
  const editorHtmlRef = useRef(null);
  const editorCssRef = useRef(null);

  const aggiornaRisultato = () => {
    if (!editorHtmlRef.current || !editorCssRef.current || !iframeRef.current) return;

    const codiceHtml = editorHtmlRef.current.state.doc.toString();
    const codiceCss = editorCssRef.current.state.doc.toString();

    const documento = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${codiceCss}</style>
        </head>
        <body>${codiceHtml}</body>
      </html>
    `;

    iframeRef.current.srcdoc = documento;
  };

  // Carica il codice salvato da localStorage
  useEffect(() => {
    const htmlSalvato = localStorage.getItem('playground-html') || '<h1>Ciao!</h1>\n<p>Scrivi qui il tuo HTML</p>';
    const cssSalvato = localStorage.getItem('playground-css') || 'body {\n  font-family: sans-serif;\n  color: #333;\n}\n\nh1 {\n  color: #157dc3;\n}';

    // Crea l'editor HTML
    const editorHtmlInstance = new EditorView({
      state: EditorState.create({
        doc: htmlSalvato,
        extensions: [
          basicSetup,
          html(),
          oneDark,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              localStorage.setItem('playground-html', editorHtmlInstance.state.doc.toString());
              aggiornaRisultato();
            }
          })
        ]
      }),
      parent: htmlContainerRef.current
    });

    // Crea l'editor CSS
    const editorCssInstance = new EditorView({
      state: EditorState.create({
        doc: cssSalvato,
        extensions: [
          basicSetup,
          css(),
          oneDark,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              localStorage.setItem('playground-css', editorCssInstance.state.doc.toString());
              aggiornaRisultato();
            }
          })
        ]
      }),
      parent: cssContainerRef.current
    });

    editorHtmlRef.current = editorHtmlInstance;
    editorCssRef.current = editorCssInstance;

    // Aggiorna il risultato iniziale
    setTimeout(() => aggiornaRisultato(), 100);

    return () => {
      editorHtmlInstance.destroy();
      editorCssInstance.destroy();
    };
  }, []);

  const handleReset = () => {
    // Valori di default
    const htmlDefault = '<h1>Ciao!</h1>\n<p>Scrivi qui il tuo HTML</p>';
    const cssDefault = 'body {\n  font-family: sans-serif;\n  color: #333;\n}\n\nh1 {\n  color: #157dc3;\n}';

    // Cancella localStorage
    localStorage.removeItem('playground-html');
    localStorage.removeItem('playground-css');

    // Aggiorna gli editor
    if (editorHtmlRef.current) {
      editorHtmlRef.current.dispatch({
        changes: {
          from: 0,
          to: editorHtmlRef.current.state.doc.length,
          insert: htmlDefault
        }
      });
    }

    if (editorCssRef.current) {
      editorCssRef.current.dispatch({
        changes: {
          from: 0,
          to: editorCssRef.current.state.doc.length,
          insert: cssDefault
        }
      });
    }

    // Aggiorna il risultato
    setTimeout(() => aggiornaRisultato(), 0);
  };

  return (
    <div className="playground-container">
      <div className="playground-header">
        <button onClick={handleReset} className="btn-playground-reset">
          🗑 Cancella
        </button>
      </div>

      <div className="playground-content">
        <div className="editor-row">
          <div className="editor-blocco">
            <span className="editor-label">HTML</span>
            <div ref={htmlContainerRef} className="editor-wrapper"></div>
          </div>
          <div className="editor-blocco">
            <span className="editor-label">CSS</span>
            <div ref={cssContainerRef} className="editor-wrapper"></div>
          </div>
        </div>

        <div className="risultato-blocco">
          <span className="editor-label">Risultato</span>
          <iframe ref={iframeRef} title="Risultato live" className="risultato-iframe"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Playground;
