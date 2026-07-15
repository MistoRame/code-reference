import BloccoCodice from "../../components/BloccoCodice";

const codiceTabella1 = `<table>
            <tr>
              <th></th>
              <th scope="col">9am</th>
              <th scope="col">10am</th>
              <th scope="col">11am</th>
              <th scope="col">12am</th>
            </tr>
            <tr>
             <th scope="row">Lunedi</th>
             <td colspan="2">Matematica</td>
             <td>Storia</td>
             <td rowspan="2">Informatica</td>
            </tr>
            <tr>
             <th scope="row">Martedi</th>
             <td>Informatica</td>
             <td>Matematica</td>
             <td>Storia</td>
            </tr>
 </table>`;

const codiceTabella2 = `<table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Entrate</th>
                <th>Uscite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1 Gennaio</th>
                <td>457</td>
                <td>243</td>
              </tr>
              <tr>
                <th>2 Gennaio</th>
                <td>123</td>
                <td>23</td>
              </tr>
              <tr>
                <th>3 Gennaio</th>
                <td>1235</td>
                <td>457</td>
              </tr>
              <tr>
                <th>4 Gennaio</th>
                <td>578</td>
                <td>1454</td>
              </tr>
              <tr>
                <th>5 Gennaio</th>
                <td>233</td>
                <td>452</td>
              </tr>
              <tr>
                <th>6 Gennaio</th>
                <td>788</td>
                <td>123</td>
              </tr>
              <tr>
                <th>7 Gennaio</th>
                <td>678</td>
                <td>123</td>
              </tr>
              <tr>
                <th>8 Gennaio</th>
                <td>346</td>
                <td>243</td>
              </tr>
              <tr>
                <th>9 Gennaio</th>
                <td>890</td>
                <td>234</td>
              </tr>
              <tr>
                <th>10 Gennaio</th>
                <td>465</td>
                <td>267</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Totale</th>
                <td>4782</td>
                <td>3342</td>
              </tr>
            </tfoot>
</table>`;

function SezioneTabelle() {
  return (
    <section id="tabelle" className="tabelle">
      <h2>Tabelle</h2>
      <ul>
        <li>
          {/* CAPTION */}
          <code>&lt;caption&gt;</code> - Elemento per fornire una didascalia per
          una tabella. Deve essere il primo elemento dentro <code>table</code>.
        </li>
        <li>
          {/* TABLE */}
          <code>&lt;table&gt;</code> - Elemento per definire una tabella, il
          contenuto viene trascritto riga per riga, da sinistra a destra.
        </li>
        <li>
          {/* TR */}
          <code>&lt;tr&gt;</code> - Elemento per definire una riga della
          tabella. é seguito da uno o più elementi
          <code>&lt;td&gt;</code> o <code>&lt;th&gt;</code> che definiscono le
          celle della riga.
        </li>
        <li>
          {/* TD */}
          <code>&lt;td&gt;</code> - Elemento per definire una cella dati
          all'interno di una riga della tabella.
        </li>
        <li>
          {/* TH */}
          <details>
            <summary>
              <code>&lt;th&gt;</code> - Elemento per definire una cella
              intestazione all'interno di una riga della tabella. Viene
              visualizzato in grassetto e centrato per impostazione predefinita.
            </summary>
            <p>Attributi:</p>
            <ul>
              <li className="sottoelemento">
                {/* SCOPE */}
                <code>scope</code> - Consente di indicare se il titolo riguarda
                una colonna (col) o una riga (row)
              </li>
              <li className="sottoelemento">
                {/* COLSPAN */}
                <code>colspan</code> - Indica su quante colonne deve estendersi
                la cella. Rappresentato da un valore numerico. Attributo usato
                anche su
                <code>&lt;td&gt;</code>
              </li>
              <li className="sottoelemento">
                {/* ROWSPAN */}
                <code>rowspan</code> - Indica su quante righe deve estendersi la
                cella. Rappresentato da un valore numerico. Attributo usato
                anche su
                <code>&lt;td&gt;</code>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <div className="tabellaesempio">
        <div>
          <BloccoCodice codice={codiceTabella1} linguaggio="html" />
        </div>
        <div className="esempio">
          <table>
            <tr>
              <th></th>
              <th scope="col">9am</th>
              <th scope="col">10am</th>
              <th scope="col">11am</th>
              <th scope="col">12am</th>
            </tr>
            <tr>
              <th scope="row">Lunedi</th>
              <td colspan="2">Matematica</td>
              <td>Storia</td>
              <td rowspan="2">Informatica</td>
            </tr>
            <tr>
              <th scope="row">Martedi</th>
              <td>Informatica</td>
              <td>Matematica</td>
              <td>Storia</td>
            </tr>
          </table>
        </div>
      </div>
      <p>
        Le tabelle più lunghe possono essere suddivise nelle sezioni
        <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> e
        <code>&lt;tfoot&gt;</code>
      </p>
      <ul>
        {/* THEAD */}
        <li>
          <code>&lt;thead&gt;</code> - I titoli della tabella dovranno essere
          racchiusi in questo elemento
        </li>
        {/* TBODY */}
        <li>
          <code>&lt;tbody&gt;</code> - Il corpo della tabella dovrà essere
          racchiuso in questo elemento
        </li>
        {/* TFOOT */}
        <li>
          <code>&lt;tfoot&gt;</code> - Contiente l'ultima riga della tabella
        </li>
      </ul>
      <div className="tabellaesempio">
        <div>
          <BloccoCodice codice={codiceTabella2} linguaggio="html" />
        </div>

        <div className="esempio">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Entrate</th>
                <th>Uscite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1 Gennaio</th>
                <td>457</td>
                <td>243</td>
              </tr>
              <tr>
                <th>2 Gennaio</th>
                <td>123</td>
                <td>23</td>
              </tr>
              <tr>
                <th>3 Gennaio</th>
                <td>1235</td>
                <td>457</td>
              </tr>
              <tr>
                <th>4 Gennaio</th>
                <td>578</td>
                <td>1454</td>
              </tr>
              <tr>
                <th>5 Gennaio</th>
                <td>233</td>
                <td>452</td>
              </tr>
              <tr>
                <th>6 Gennaio</th>
                <td>788</td>
                <td>123</td>
              </tr>
              <tr>
                <th>7 Gennaio</th>
                <td>678</td>
                <td>123</td>
              </tr>
              <tr>
                <th>8 Gennaio</th>
                <td>346</td>
                <td>243</td>
              </tr>
              <tr>
                <th>9 Gennaio</th>
                <td>890</td>
                <td>234</td>
              </tr>
              <tr>
                <th>10 Gennaio</th>
                <td>465</td>
                <td>267</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Totale</th>
                <td>4782</td>
                <td>3342</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

export default SezioneTabelle;
