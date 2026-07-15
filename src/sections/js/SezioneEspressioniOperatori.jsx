import SyntaxValue from "../../components/SchemaCodice";

function SezioneEspressioniOperatori() {
  return (
    <section id="js-espressioni_operatori" className="js-espressioni_operatori">
      <h2>Espressioni e Operatori</h2>
      <p>
        Un'espressione produce come risultato un singolo valore, questa può
        semplicemente assegnare un valore ad una variabile, oppure essere usata
        per unire più valori e restituire il risultato. Le espressioni possono
        essere costituite da valori, variabili, operatori e funzioni. Gli
        operatori sono simboli che indicano al computer di eseguire operazioni
        specifiche sui valori o sulle variabili. Ad esempio, l'operatore + può
        essere utilizzato per sommare due numeri o concatenare due stringhe.
      </p>
      <p style={{ fontWeight: "bold", color: "red" }}>Tipi di operatori:</p>
      <ul>
        <li>
          <p>Operatori di assegnamento: assegnano un valore ad una variabile</p>
          <div className="schema-wrapper">
            <div className="schema-container">
              <div className="schema-row">
                <div className="schema-block">
                  <span className="token token-keyword">color</span>
                  <span className="token-line line-keyword"></span>
                  <span className="token-label label-keyword">
                    Nome variabile
                  </span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">=</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore di assegnamento
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value={"Blue"} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">Valore</span>
                </div>
              </div>
            </div>
            <div className="schema-note">
              Il valore della variabile <b>color</b> è "Blue". Stringa di testo
            </div>
          </div>
        </li>
        <li>
          <p>Operatori aritmetici: svolgono semplici operazioni matematiche</p>
          <div className="schema-wrapper">
            <div className="schema-container">
              <div className="schema-row">
                <div className="schema-block">
                  <span className="token token-keyword">area</span>
                  <span className="token-line line-keyword"></span>
                  <span className="token-label label-keyword">
                    Nome variabile
                  </span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">=</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore di assegnamento
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value={3} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">Valore</span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">*</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore aritmetico
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value={2} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">Valore</span>
                </div>
              </div>
            </div>
            <div className="schema-note">
              Il valore della variabile <b>area</b> è 6. Numero intero.
            </div>
          </div>
          <table>
            <caption>Operatori Aritmetici in JavaScript</caption>
            <thead>
              <tr>
                <th>Operatore</th>
                <th>Simbolo</th>
                <th>Utilizzo</th>
                <th>Esempio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Somma</td>
                <td>
                  <code>+</code>
                </td>
                <td>Somma due valori numerici (o concatena stringhe)</td>
                <td>
                  <code>5 + 3 = 8</code>
                </td>
              </tr>
              <tr>
                <td>Differenza</td>
                <td>
                  <code>-</code>
                </td>
                <td>Sottrae il secondo valore dal primo</td>
                <td>
                  <code>5 - 3 = 2</code>
                </td>
              </tr>
              <tr>
                <td>Divisione</td>
                <td>
                  <code>/</code>
                </td>
                <td>Divide il primo valore per il secondo</td>
                <td>
                  <code>10 / 2 = 5</code>
                </td>
              </tr>
              <tr>
                <td>Prodotto</td>
                <td>
                  <code>*</code>
                </td>
                <td>Moltiplica due valori</td>
                <td>
                  <code>4 * 3 = 12</code>
                </td>
              </tr>
              <tr>
                <td>Incremento</td>
                <td>
                  <code>++</code>
                </td>
                <td>Aumenta di 1 il valore di una variabile</td>
                <td>
                  <code>let x = 5; x++; // x vale 6</code>
                </td>
              </tr>
              <tr>
                <td>Decremento</td>
                <td>
                  <code>--</code>
                </td>
                <td>Diminuisce di 1 il valore di una variabile</td>
                <td>
                  <code>let x = 5; x--; // x vale 4</code>
                </td>
              </tr>
              <tr>
                <td>Modulo</td>
                <td>
                  <code>%</code>
                </td>
                <td>Restituisce il resto della divisione tra due valori</td>
                <td>
                  <code>10 % 3 = 1</code>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <p>Operatori per stringhe: concatenano stringhe di testo</p>
          <div className="schema-wrapper">
            <div className="schema-container">
              <div className="schema-row">
                <div className="schema-block">
                  <span className="token token-keyword">Saluti</span>
                  <span className="token-line line-keyword"></span>
                  <span className="token-label label-keyword">
                    Nome variabile
                  </span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">=</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore di assegnamento
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value={"Ciao"} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">Valore</span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">+</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore per stringhe
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value={"Mondo"} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">Valore</span>
                </div>
              </div>
            </div>
            <div className="schema-note">
              Il valore della variabile <b>Saluti</b> è "Ciao Mondo". Stringa di
              testo.
            </div>
          </div>
        </li>
        <li>
          <p>
            Operatori di confronto: confrontano due valori e restituiscono un
            valore booleano
          </p>
          <div className="schema-wrapper">
            <div className="schema-container">
              <div className="schema-row">
                <div className="schema-block">
                  <span className="token token-keyword">Buy</span>
                  <span className="token-line line-keyword"></span>
                  <span className="token-label label-keyword">
                    Nome variabile
                  </span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">=</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore di assegnamento
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value={2} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">Valore</span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">{">"}</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore di confronto
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value={5} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">Valore</span>
                </div>
              </div>
            </div>
            <div className="schema-note">
              Il valore della variabile <b>Buy</b> è false. Valore booleano.
            </div>
          </div>
        </li>
        <li>
          <p>
            Operatori logici: combinano espressioni e restituiscono un valore
            booleano
          </p>
          <div className="schema-wrapper">
            <div className="schema-container">
              <div className="schema-row">
                <div className="schema-block">
                  <span className="token token-keyword">Buy</span>
                  <span className="token-line line-keyword"></span>
                  <span className="token-label label-keyword">
                    Nome variabile
                  </span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">=</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore di assegnamento
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value="( 5 > 3 )" isExpression={true} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">
                    Prima espressione
                  </span>
                </div>
                <div className="schema-block">
                  <span className="token token-operator">&&</span>
                  <span className="token-line line-operator"></span>
                  <span className="token-label label-operator">
                    Operatore logico
                  </span>
                </div>
                <div className="schema-block">
                  <SyntaxValue value="( 5 > 10 )" isExpression={true} />
                  <span className="token-line line-value"></span>
                  <span className="token-label label-value">
                    Seconda espressione
                  </span>
                </div>
              </div>
            </div>
            <div className="schema-note">
              Il valore della variabile <b>Buy</b> è true. Valore booleano.
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SezioneEspressioniOperatori;
