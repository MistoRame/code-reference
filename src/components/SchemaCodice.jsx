import React from "react";

// Funzione per visualizzare i valori di esempio come da editor di codice
function SyntaxValue({ value, isExpression = false }) {

   if (isExpression) {
    return <span className="syntax-expression">{value}</span>;
  }

  if (Array.isArray(value)) {
    return (
      <span className="token token-value">
        <span className="syntax-bracket">[</span>
        {value.map((item, i) => (
          <React.Fragment key={i}>
            <SyntaxValue value={item} />
            {i < value.length - 1 && <span className="syntax-punct">, </span>}
          </React.Fragment>
        ))}
        <span className="syntax-bracket">]</span>
      </span>
    );
  }

  if (typeof value === "object" && value !== null) {
    const keys = Object.keys(value);
    return (
      <span className="token token-value">
        <span className="syntax-bracket">{"{"}</span>
        {keys.map((key, i) => (
          <React.Fragment key={key}>
            <span className="syntax-key">"{key}"</span>
            <span className="syntax-punct">: </span>
            <SyntaxValue value={value[key]} />
            {i < keys.length - 1 && <span className="syntax-punct">, </span>}
          </React.Fragment>
        ))}
        <span className="syntax-bracket">{"}"}</span>
      </span>
    );
  }

  if (typeof value === "string") {
    return <span className="syntax-string">"{value}"</span>;
  }

  if (typeof value === "number") {
    return <span className="syntax-number">{value}</span>;
  }

  if (typeof value === "boolean" || value === null) {
    return <span className="syntax-boolean">{String(value)}</span>;
  }

  return <span>{String(value)}</span>;
}

export default SyntaxValue;