function SezioneLink() {
  return (
    <section id="link" className="link">
      <h2>Link</h2>
      <ul>
        <li>
          <details>
            <summary>
              {/* A */}
              <code>&lt;a&gt;</code> - Elemento per definire un collegamento
              ipertestuale
            </summary>
            <p>Attributi dei link:</p>
            <p>
              L'attributo <code>href</code> specifica l'URL di destinazione. Gli
              URL possono essere:
            </p>
            <ul>
              <li className="sottoelemento">
                <b>Assoluti</b> — contengono l'intero percorso incluso il
                dominio (es. <code>https://www.google.com</code>)
              </li>
              <li className="sottoelemento">
                <b>Relativi</b> — contengono solo il percorso relativo al file
                HTML (es. <code>/pagina.html</code>)
              </li>
            </ul>
            <p>
              Esempio: <a href="https://www.google.com">Google</a>
            </p>
            <ul>
              {/* TIPI DI LINK */}
              <li className="sottoelemento">
                {/* MAILTO */}
                <code>mailto</code> - Tipo di link che lancia il programma di
                posta elettronica predefinito con l'indirizzo email specificato.
                <code>&lt;a href="mailto:example@example.com"&gt;</code>
                Esempio: <a href="mailto:example@example.com">Email</a>
              </li>
              <li className="sottoelemento">
                {/* TARGET */}
                <code>target</code> - Tipo di link che si apre in una nuova
                scheda del browser.
                <code>
                  &lt;a href="https://www.google.com" target="_blank"&gt;
                </code>
                Esempio:
                <a href="https://www.google.com" target="_blank">
                  Google
                </a>
              </li>
              <li className="sottoelemento">
                {/* ANCORE */}
                <code>anchor</code> - Tipo di link che si sposta a una sezione
                specifica della stessa pagina. L'attributo
                <code>href</code> specifica l'ID dell'elemento di destinazione
                preceduto da un cancelletto (#). Gli elementi di destinazione
                devono avere l'attributo
                <code>id</code> corrispondente.
                <code>&lt;a href="#testo"&gt;</code>
                Esempio:
                <a href="#testo">Vai alla sezione Testo</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </section>
  );
}

export default SezioneLink;