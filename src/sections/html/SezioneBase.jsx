function SezioneBase() {
  return (
    <section id="base" className="base">
      <h2>Elementi base</h2>
      <ul>
        {/* !DOCTYPE */}
        <li>
          <code>&lt;!DOCTYPE&gt;</code> - Elemento posto all'inizio della pagina
          web, comunica al browser quale versione di HTML stiamo usando.
          <br />
          Per HTML5 <code>&lt;!DOCTYPE html&gt;</code>
        </li>

        {/* HTML */}
        <li>
          <code>&lt;html&gt;</code> - Elemento radice di ogni pagina HTML
        </li>

        {/* HEAD */}
        <li>
          <details>
            <summary>
              <code>&lt;head&gt;</code> - Contiene metadati della pagina
            </summary>
            <ul>
              {/* TITLE */}
              <li className="sottoelemento">
                <code>&lt;title&gt;</code> - Definisce il titolo della pagina,
                visualizzato sulla scheda del browser
              </li>

              {/* META */}
              <li className="sottoelemento">
                <code>&lt;meta&gt;</code> - Contiene informazioni relative alla
                pagina web, come la codifica dei caratteri, la descrizione,
                l'autore, istruzioni per i motori di ricerca, ecc. Non necessita
                di un tag di chiusura. Gli attributi più comuni sono name,
                content, charset e http-equiv.
                <p>Attributi:</p>
                <ul>
                  <li className="sottoelemento">
                    <p>
                      <code className="attributo">name</code> - Usato per
                      definire informazioni usate dai motori di ricerca, browser
                      e altri servizi. L'attributo <i>content</i> contiene
                      l'effettiva descrizione.
                    </p>
                    <ul>
                      <li className="sottoelemento">
                        <code className="attributo">"description"</code> -
                        Contiene una descrizione della pagina, utilizzata dai
                        motori di ricerca per mostrare un'anteprima nei
                        risultati di ricerca.
                      </li>
                      <li className="sottoelemento">
                        <code className="attributo">"keywords"</code> - Elenco
                        di parole chiave che un utente può usare per cercare la
                        pagina. Valore non più utilizzato in quanto i motori di
                        ricerca non lo considerano più per il posizionamento nei
                        risultati di ricerca.
                      </li>
                      <li className="sottoelemento">
                        <code className="attributo">"robots"</code> - Indica se
                        i motori di ricerca devono indicizzare la pagina. Valori
                        possibili: "index" (consente l'indicizzazione),
                        "noindex" (impedisce l'indicizzazione), "follow"
                        (consente ai motori di ricerca di seguire i link
                        presenti nella pagina), "nofollow" (impedisce ai motori
                        di ricerca di seguire i link presenti nella pagina).
                      </li>
                    </ul>
                    <p>
                      <code>http-equiv</code> - Usato come comando per il
                      browser, agiscono come gli HTTP headers. L'attributo{" "}
                      <i>content</i> contiene l'effettiva descrizione.
                    </p>
                    <ul>
                      <li className="sottoelemento">
                        <code className="attributo">"author"</code> - Definisce
                        l'autore della pagina.
                      </li>
                      <li className="sottoelemento">
                        <code className="attributo">"pragma"</code> - Impedisce
                        al browser di memorizzare la pagina nella cache. Valore:
                        "no-cache".
                      </li>
                      <li className="sottoelemento">
                        <code className="attributo">"expires"</code> - Indica la
                        data di scadenza della pagina, dopo la quale il browser
                        la considera obsoleta e la ricarica dal server. Il
                        valore deve essere una data in formato HTTP (Es. "Wed,
                        21 Oct 2025 07:28:00 GMT") o "0" per indicare che la
                        pagina è già scaduta.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </details>
        </li>

        {/* BODY */}
        <li>
          <code>&lt;body&gt;</code> - Contiene il contenuto visibile della
          pagina
        </li>
      </ul>
    </section>
  );
}

export default SezioneBase;
