import React from "react";

// Funzione per visualizzare i valori di esempio come da editor di codice
function SyntaxValue({ value }) {
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

function SezioneVariabili() {
  return (
    <section id="js-variabili" className="js-variabili">
      <h2>Variabili in JavaScript</h2>
      <p>
        Le variabili sono contenitori per memorizzare dati. In JavaScript si
        possono creare utilizzando le parole chiave <code>var</code>,{" "}
        <code>let</code> o <code>const</code>. Queste possono essere dichiarate
        singolarmente, separate da virgole, oppure in un'unica istruzione. Il
        nome di una variabile deve iniziare con una lettere, un underscore{" "}
        <code>_</code> o un simbolo di dollaro <code>$</code>, seguito da
        lettere, numeri, underscore o simboli di dollaro. Non può iniziare con
        un numero e non può contenere spazi. Le variabili sono case-sensitive,
        quindi <code>variabile</code> e <code>Variabile</code> sono considerate
        due variabili diverse.
      </p>
      <ul>
        <li className="sottoelemento">
          <code>var</code>: ha Ambito {"(Scope)"} globale e di funzione, viene
          issata {"(hoisting)"} e inizializzata subito a <code>undefined</code>,
          quindi può tecnicamente essere utilizzata prima della sua
          dichiarazione. Può essere ridefinita e riassegnata. è stata la parola
          chiave principale per dichiarare variabili fino all'introduzione di{" "}
          <code>let</code> e <code>const</code> in ES6. Tuttora sconsigliata per
          via dei problemi di ambito e di hoisting che può generare, soprattutto
          in contesti più complessi.
        </li>
        <li className="sottoelemento">
          <code>let</code>: ha Ambito di blocco, la variabile vive solo dentro
          le parentesi graffe in cui è dichiarata. Viene issata ma non
          inizializzata, quindi non può essere utilizzata prima della sua
          dichiarazione. Può essere riassegnata ma non ridefinita nello stesso
          ambito.
        </li>
        <li className="sottoelemento">
          <code>const</code>: Si comporta come <code>let</code> per quanto
          riguarda l'ambito e il hoisting, ma non permette la riassegnazione.
          Questo blocca solo la riassegnazione della variabile stessa, non la
          mutuabilità del contenuto. Un oggetto o Array dichiarato con{" "}
          <code>const</code> può avere le sue proprietà o elementi modificati,
          ma non può essere riassegnato a un nuovo valore.
        </li>
      </ul>

      <div className="schema-container">
        <div className="schema-row">
          <div className="schema-block">
            <span className="token token-keyword">let</span>
            <span className="token-line line-keyword"></span>
            <span className="token-label label-keyword">PAROLA CHIAVE</span>
          </div>

          <div className="schema-block">
            <span className="token token-name">Quantita</span>
            <span className="token-line line-name"></span>
            <span className="token-label label-name">NOME VARIABILE</span>
          </div>

          <div className="schema-block">
            <span className="token token-operator">=</span>
            <span className="token-line line-operator"></span>
            <span className="token-label label-operator">OPERATORE</span>
          </div>

          <div className="schema-block">
            <SyntaxValue value={3} />
            <span className="token-line line-value"></span>
            <span className="token-label label-value">VALORE</span>
          </div>

          <span className="token token-punct">;</span>
        </div>
      </div>

      <p>Tipi di dati:</p>
      <ul>
        <li className="sottoelemento">
          <code>string</code>: rappresenta una sequenza di caratteri. Richiede
          l'impiego di una coppia di apici semplici o doppi per racchiudere il
          testo. Si può anche utilizzare l'escape character <code>\</code> per
          inserire caratteri speciali all'interno della stringa.
        </li>
        <li className="sottoelemento">
          <code>number</code>: rappresenta un valore numerico. Può essere intero
          o decimale, positivo o negativo.
        </li>
        <li className="sottoelemento">
          <code>boolean</code>: true o false.
        </li>
        <li className="sottoelemento">
          <code>undefined</code>: rappresenta una variabile dichiarata ma non
          inizializzata.
        </li>
        <li className="sottoelemento">
          <code>null</code>: rappresenta l'assenza intenzionale di un valore.
        </li>
      </ul>

      <p style={{ color: "red" }}>Array</p>
      <p>
        Un array è una struttura dati che permette di memorizzare più valori in
        una singola variabile. I valori vengono assegnati a posizioni numeriche,
        chiamate indici, che partono da 0. Gli array possono contenere valori di
        qualsiasi tipo, inclusi altri array e oggetti. in JavaScript sono
        dinamici, il che significa che possono essere modificati in termini di
        dimensione e contenuto durante l'esecuzione del programma.
      </p>

      <div className="schema-example">
        <h3 className="schema-title">Array semplice</h3>
        <div className="schema-container">
          <div className="schema-row">
            <div className="schema-block">
              <span className="token token-keyword">const</span>
              <span className="token-line line-keyword"></span>
              <span className="token-label label-keyword">PAROLA CHIAVE</span>
            </div>

            <div className="schema-block">
              <span className="token token-name">Persone</span>
              <span className="token-line line-name"></span>
              <span className="token-label label-name">NOME ARRAY</span>
            </div>

            <div className="schema-block">
              <span className="token token-operator">=</span>
              <span className="token-line line-operator"></span>
              <span className="token-label label-operator">OPERATORE</span>
            </div>

            <div className="schema-block">
              <SyntaxValue value={["Mario", "Luigi", "Peach"]} />
              <span className="token-line line-value"></span>
              <span className="token-label label-value">CONTENUTO ARRAY</span>
            </div>

            <span className="token token-punct">;</span>
          </div>
        </div>
      </div>
      <div className="schema-example">
        <h3 className="schema-title">Oggetto con valori identificati</h3>
        <div className="schema-container">
          <div className="schema-row">
            <div className="schema-block">
              <span className="token token-keyword">const</span>
              <span className="token-line line-keyword"></span>
              <span className="token-label label-keyword">PAROLA CHIAVE</span>
            </div>

            <div className="schema-block">
              <span className="token token-name">Persona</span>
              <span className="token-line line-name"></span>
              <span className="token-label label-name">NOME OGGETTO</span>
            </div>

            <div className="schema-block">
              <span className="token token-operator">=</span>
              <span className="token-line line-operator"></span>
              <span className="token-label label-operator">OPERATORE</span>
            </div>

            <div className="schema-block">
              <SyntaxValue
                value={{
                  Eta: 30,
                  Nome: "Mario",
                  Altezza: 164.5,
                  Patente: true,
                }}
              />
              <span className="token-line line-value"></span>
              <span className="token-label label-value">CONTENUTO ARRAY</span>
            </div>

            <span className="token token-punct">;</span>
          </div>
        </div>
      </div>
      <div className="schema-example">
        <h3 className="schema-title">Array di oggetti</h3>
        <div className="schema-container">
          <div className="schema-row">
            <div className="schema-block">
              <span className="token token-keyword">const</span>
              <span className="token-line line-keyword"></span>
              <span className="token-label label-keyword">PAROLA CHIAVE</span>
            </div>

            <div className="schema-block">
              <span className="token token-name">Persone</span>
              <span className="token-line line-name"></span>
              <span className="token-label label-name">NOME ARRAY</span>
            </div>

            <div className="schema-block">
              <span className="token token-operator">=</span>
              <span className="token-line line-operator"></span>
              <span className="token-label label-operator">OPERATORE</span>
            </div>

            <div className="schema-block">
              <SyntaxValue
                value={[
                  { Eta: 30, Nome: "Mario", Altezza: 164.5, Patente: true },
                  { Eta: 25, Nome: "Luigi", Altezza: 172.3, Patente: true },
                  { Eta: 28, Nome: "Peach", Altezza: 160.2, Patente: false },
                ]}
              />
              <span className="token-line line-value"></span>
              <span className="token-label label-value">
                CONTENUTO ARRAY DI OGGETTI
              </span>
            </div>

            <span className="token token-punct">;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const persone = ["Mario", "Luigi", "Peach"];

export default SezioneVariabili;
