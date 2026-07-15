import { useState } from "react";
import suricato from "../..//assets/Immagini/suricato.png";

function SommaInput() {
  const [valoreA, setValoreA] = useState(5);
  const [valoreB, setValoreB] = useState(3);

  return (
    <>
      <input
        type="number"
        id="valoreA"
        value={valoreA}
        onChange={(e) => setValoreA(Number(e.target.value))}
      />
      <input
        type="number"
        id="valoreB"
        value={valoreB}
        onChange={(e) => setValoreB(Number(e.target.value))}
      />
      <output id="risultatoAB">{valoreA + valoreB}</output>
    </>
  );
}

function SezioneModuli() {
  return (
    <section id="moduli" className="moduli">
      <h2>Moduli</h2>
      <ul>
        <li>
          <details>
            <summary>
              {/* FORM */}
              <code>&lt;form&gt;</code> - Elemento per definire un modulo, usato
              per raccogliere input dagli utenti. Deve sempre essere dotato
              degli attributi <code>action</code> e<code>method</code>.
            </summary>
            <p>Attributi:</p>
            <ul>
              <li className="sottoelemento">
                {/* ACTION */}
                <code>action</code> - Specifica l'URL a cui inviare i dati del
                modulo quando viene inviato.
              </li>
              <li className="sottoelemento">
                {/* METHOD */}
                <code>method</code> - Specifica il metodo HTTP da utilizzare
                quando si inviano i dati del modulo. I valori comuni sono{" "}
                <code>GET</code> e <code>POST</code>. GET è ideale per inviare
                brevi moduli e quando occorre visualizzare i dati da un
                database. POST è più adatto per inviare moduli più lunghi, se
                c'è necessità di mandare dei file, se si modifica un database, o
                quando si devono inviare dati sensibili, poiché i dati non
                vengono visualizzati nell'URL. Senza questo attributo, il modulo
                utilizza GET per impostazione predefinita.
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              {/* INPUT */}
              <code>&lt;input&gt;</code> - Elemento per definire un campo di
              input all'interno di un modulo. Non necessita di un tag di
              chiusura.
            </summary>
            <p>Attributi:</p>
            <ul>
              <li className="sottoelemento">
                {/* TYPE */}
                <p>
                  <code className="attributo">type</code> - Specifica il tipo di
                  campo di input.
                </p>
                <ul>
                  <li className="sottoelemento">
                    {/* TEXT */}
                    <code className="valore">"text"</code> - input testuale
                    generico
                    <input type="text" />
                  </li>
                  <li className="sottoelemento">
                    {/* PASSWORD */}
                    <code className="valore">"password"</code> - input per dati
                    sensibili
                    <input type="password" />
                  </li>
                  <li className="sottoelemento">
                    {/* EMAIL */}
                    <code class="valore">"email"</code> - input per indirizzi
                    email, il browser eseguirà una validazione di base per
                    assicurarsi che l'input sia nel formato corretto.
                  </li>
                  <li className="sottoelemento">
                    {/* URL */}
                    <code className="valore">"url"</code> - input per indirizzi
                    web, il browser eseguirà una validazione di base per
                    assicurarsi che l'input sia nel formato corretto.
                  </li>
                  <li className="sottoelemento">
                    {/* DATE */}
                    <code className="valore">"date"</code> - input per la
                    selezione di una data
                    <input type="date" />
                  </li>
                  <li className="sottoelemento">
                    {/* NUMBER */}
                    <code className="valore">"number"</code> - input numerico
                    <input type="number" />
                  </li>
                  <li className="sottoelemento">
                    {/* CHECKBOX */}
                    <code className="valore">"checkbox"</code> - casella di
                    selezione e delesezione di una o più opzioni. L'attributo è
                    accompagnato anche da
                    <code>value</code>, che indica il valore associato a ciascun
                    pulsante, e da <code>checked</code> se il valore deve essere
                    selezionato al caricamento della pagina. Tutti i pulsanti di
                    un gruppo devono avere lo stesso valore per l'attributo{" "}
                    <code>name</code>.
                    <input type="checkbox" name="opzionecheck" value="lunedi" />
                    Lunedi
                    <input
                      type="checkbox"
                      name="opzionecheck"
                      value="martedi"
                    />
                    Martedi
                    <input
                      type="checkbox"
                      name="opzionecheck"
                      value="mercoledi"
                    />
                    Mercoledi
                  </li>
                  <li className="sottoelemento">
                    {/* RADIO */}
                    <code className="valore">"radio"</code> - pulsanti di
                    opzione che consentono una sola selezione da un gruppo di
                    valori. Funziona similmente alle checkbox, con gli attributi{" "}
                    <code>value</code>,<code>checked</code> e <code>name</code>.
                    <input type="radio" name="opzioneradio" value="1" />1
                    <input type="radio" name="opzioneradio" value="2" />2
                    <input
                      type="radio"
                      name="opzioneradio"
                      value="3"
                      checked="checked"
                    />
                    3
                  </li>
                  <li className="sottoelemento">
                    {/* FILE */}
                    <code className="valore">"file"</code> - input per il
                    caricamento di file. L'attributo <code>accept</code>
                    specifica i tipi di file accettati, e l'attributo
                    <code>multiple</code> consente di selezionare più file
                    contemporaneamente.
                    <input type="file" accept=".jpg,.png" />
                  </li>
                  <li className="sottoelemento">
                    {/* SUBMIT */}
                    <code className="valore">"submit"</code> - pulsante per inviare
                    il modulo. Se non è presente un pulsante di questo tipo, il
                    modulo viene inviato quando l'utente preme Invio all'interno
                    di un campo di input.
                    <input type="submit" value="Invia" />
                  </li>
                  <li className="sottoelemento">
                    {/* IMAGE */}
                    <code className="valore">"image"</code> - Se si vuole
                    utilizzare un'immagine come pulsante di invio, è possibile
                    usare questo tipo di input. L'attributo
                    <code className="attributo">src</code> specifica l'URL
                    dell'immagine da utilizzare.
                    <div>
                      <input type="text" />
                      <input
                        alt="ImmagineTasto"
                        type="image"
                        src="Immagini/invio.webp"
                        width="100"
                        height="100"
                      />
                    </div>
                  </li>
                  <li className="sottoelemento">
                    {/* HIDDEN */}
                    <code className="valore">"hidden"</code> - Campo di input
                    nascosto che non è visibile all'utente ma può essere
                    utilizzato per inviare dati al server.
                    <input type="hidden" />
                  </li>
                  <li class="sottoelemento">
                    {/* REQUIRED */}
                    <code className="valore">"required"</code> - Attributo che
                    rende obbligatorio il compimento del campo di input.
                  </li>
                  <li className="sottoelemento">
                    {/* SEARCH */}
                    <code className="valore">"search"</code> - input per
                    ricerche, simile a<code className="valore">"text"</code> ma
                    con funzionalità aggiuntive come un pulsante di
                    cancellazione integrato in alcuni browser.
                    <input type="search" placeholder="Inserisci URL" />
                  </li>
                </ul>
              </li>
              <li className="sottoelemento">
                {/* NAME */}
                <code className="attributo">name</code> - Specifica il nome del
                campo di input, usato come chiave quando i dati del modulo
                vengono inviati al server.
              </li>
              <li className="sottoelemento">
                {/* MAxlenght */}
                <code className="attributo">maxlength</code> - Specifica il
                numero massimo di caratteri che possono essere inseriti nel
                campo di input.
              </li>
              <li className="sottoelemento">
                {/* PLACEHOLDER */}
                <code className="attributo">placeholder</code> - Valore
                visualizzato nella casella di testo finchè l'utente non inserirà
                del testo nell'area.
              </li>
            </ul>
          </details>
        </li>
        {/* DATALIST */}
        <li>
          <code>&lt;datalist&gt;</code> - Fornisce suggerimenti automatici per
          un <code>&lt;input&gt;</code>. Va collegato all'input tramite
          l'attributo <code>id</code> corrispondente al <code>list</code>{" "}
          dell'input.
          <input list="frutti" type="text" />
          <datalist id="frutti">
            <option value="Mela"></option>
            <option value="Pera"></option>
            <option value="Banana"></option>
          </datalist>
        </li>
        {/* TEXTAREA */}
        <li>
          <code>&lt;textarea&gt;</code> - Elemento per definire un campo di
          input multilinea. A differenza di
          <code>&lt;input&gt;</code>, necessita di un tag di chiusura. Tutto il
          testo che compare tra i due tag verrà visualizzato all'interno del
          campo di input come testo predefinito.
          <textarea>Esempio...</textarea>
        </li>
        <li>
          {/* SELECT */}
          <details>
            <summary>
              <code>&lt;select&gt;</code> - Consente all'utente di selezionare
              l'opzione da un menu a discesa. Ogni opzione è definita da un
              elemento <code>&lt;option&gt;</code>
              <select>
                <option value="opzione1">Opzione 1</option>
                <option value="opzione2">Opzione 2</option>
                <option value="opzione3">Opzione 3</option>
              </select>
            </summary>
            è possibile mostrare più opzioni contemporaneamente usando
            l'attributo <code>size</code>, e consentire la selezione di più
            opzioni usando l'attributo <code>multiple</code>.
            <select size="3" multiple>
              <option value="opzione1">Opzione 1</option>
              <option value="opzione2">Opzione 2</option>
              <option value="opzione3">Opzione 3</option>
            </select>
          </details>
        </li>
        <li>
          {/* BUTTON */}
          <code>&lt;button&gt;</code> - Elemento introdotto per offrire maggiore
          flessibilità nella creazione di pulsanti. Può essere utilizzato per
          creare pulsanti di invio, reset o pulsanti generici. A differenza di
          <code>
            &lt;input type=<span className="valore">"submit"</span>&gt;
          </code>
          , il contenuto del pulsante può includere testo, immagini o altri
          elementi HTML.
          <p>
            <button>
              <img
                src={suricato}
                className="imgbutton"
                alt="Pulsante"
                loading="lazy"
              />
              Invia
            </button>
          </p>
        </li>
        <li>
          {/* LABEL */}
          <code>&lt;label&gt;</code> - Elemento utilizzato per associare
          un'etichetta a un campo di input. Aiuta a migliorare l'accessibilità e
          l'usabilità del modulo. L'attributo
          <code>for</code> deve corrispondere all'attributo
          <code>id</code> del campo di input a cui si riferisce. In questo modo,
          quando l'utente clicca sull'etichetta, il focus viene spostato al
          campo di input associato.
          <br />
          <label>
            Etá: <input type="text" />
          </label>
          <br />
          Genere:
          <input type="radio" id="F" name="genere" value="F" />
          <label for="F">Femmina</label>
          <input type="radio" id="M" name="genere" value="M" />
          <label for="M">Maschio</label>
        </li>
        <li>
          {/* FIELDSET */}
          <code>&lt;fieldset&gt;</code> - Elemento utilizzato per raggruppare
          logicamente i campi di input all'interno di un modulo. Spesso
          accompagnato da <code>&lt;legend&gt;</code>, che fornisce una
          didascalia per il gruppo di campi.
          <br />
          <fieldset>
            <legend>Informazioni personali</legend>
            <label>
              Nome: <input type="text" />
            </label>
            <br />
            <label>
              Cognome: <input type="text" />
            </label>
            <br />
            <label>
              Email: <input type="email" />
            </label>
          </fieldset>
        </li>
        {/* PROGESS */}
        <li>
          <code>&lt;progress&gt;</code> - Elemento utilizzato per visualizzare
          il progresso di un'attività in corso. L'attributo
          <code>value</code>
          specifica il progresso attuale, mentre l'attributo
          <code>max</code> specifica il valore massimo del progresso.
          <progress value="70" max="100"></progress>
        </li>
        {/* METER */}
        <li>
          <code>&lt;meter&gt;</code> - Elemento utilizzato per visualizzare una
          misurazione all'interno di un intervallo specifico, rappresenta una
          misurazione statica. L'attributo
          <code>value</code> specifica la misurazione attuale, mentre gli
          attributi <code>min</code>, <code>max</code>, e<code>low</code>,{" "}
          <code>high</code>, e<code>optimum</code> possono essere usati per
          definire l'intervallo e i valori di riferimento.
          <meter
            value="0.6"
            min="0"
            max="1"
            low="0.3"
            high="0.8"
            optimum="0.5"
          ></meter>
        </li>
        {/* OUTPUT */}
        <li>
          <code>&lt;output&gt;</code> - Elemento utilizzato per visualizzare il
          risultato di un calcolo o l'output di un'operazione. Utilizza
          l'attributo <code> for </code>
          per collegare l'output agli input che lo generano.
          <br />
          <SommaInput />
        </li>
      </ul>
    </section>
  );
}

export default SezioneModuli;
