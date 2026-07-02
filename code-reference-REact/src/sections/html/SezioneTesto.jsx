function SezioneTesto() {
  return (
    <section id="testo" className="testo">
      <h2>Elementi di testo</h2>
      <p>
        Questi vengono utilizzati per descrivere la struttura della pagina, per
        esempio titoli, sottotitoli, e paragrafi. Essi inoltre convogliano
        informazioni semantiche, per esempio dove debba essere posta l'enfasi,
        la definizione degli acronimi utilizzati, o il testo che rappresenta una
        citazione.
      </p>
      <ul>
        {/* B */}
        <li>
          <details>
            <summary>
              <code>&lt;b&gt;</code> -<b>Bold. Caratteri in grassetto</b>
            </summary>
            <p>
              L'elemento <code>&lt;b&gt;</code> è utilizzato per indicare che il
              testo all'interno del tag deve essere visualizzato in grassetto.
              Tuttavia, a differenza di altri elementi come{" "}
              <code>&lt;strong&gt;</code>, l'elemento
              <code>&lt;b&gt;</code>
              non conferisce alcuna importanza semantica al testo. Viene
              utilizzato principalmente per scopi di formattazione visiva, senza
              implicare un significato particolare.
            </p>
          </details>
        </li>
        {/* I */}
        <li>
          <details>
            <summary>
              <code>&lt;i&gt;</code> -<i>Italic. Caratteri in corsivo</i>
            </summary>
            <p>
              L'elemento <code>&lt;i&gt;</code> è utilizzato per indicare che il
              testo all'interno del tag deve essere visualizzato in corsivo.
              Tuttavia, a differenza di altri elementi come{" "}
              <code>&lt;em&gt;</code>, l'elemento
              <code>&lt;i&gt;</code>
              non conferisce alcuna importanza semantica al testo. Viene
              utilizzato principalmente per scopi di formattazione visiva, senza
              implicare un significato particolare.
            </p>
          </details>
        </li>
        {/* U */}
        <li>
          <details>
            <summary>
              <code>&lt;u&gt;</code> -<u>Underline. Caratteri sottolineati</u>
            </summary>
            <p>
              L'elemento <code>&lt;u&gt;</code> è utilizzato per indicare che il
              testo all'interno del tag deve essere visualizzato sottolineato.
              Tuttavia, a differenza di altri elementi come{" "}
              <code>&lt;ins&gt;</code>, l'elemento
              <code>&lt;u&gt;</code>
              non conferisce alcuna importanza semantica al testo. Viene
              utilizzato principalmente per scopi di formattazione visiva, senza
              implicare un significato particolare.
            </p>
          </details>
        </li>
        {/* SUP */}
        <li>
          <details>
            <summary>
              <code>&lt;sup&gt;</code> -
              <sup>Superscript. Caratteri in apice</sup>
            </summary>
            <p>
              L'elemento <code>&lt;sup&gt;</code> è utilizzato per indicare che
              il testo all'interno del tag deve essere visualizzato in apice.
              Viene comunemente usato per rappresentare esponenti, note a piè di
              pagina o simboli matematici.
            </p>
          </details>
        </li>
        {/* SUB */}
        <li>
          <details>
            <summary>
              <code>&lt;sub&gt;</code> -
              <sub>Subscript. Caratteri in pedice</sub>
            </summary>
            <p>
              L'elemento <code>&lt;sub&gt;</code> è utilizzato per indicare che
              il testo all'interno del tag deve essere visualizzato in pedice.
              Viene comunemente usato per rappresentare indici o simboli
              matematici.
            </p>
          </details>
        </li>
        {/* BR */}
        <li>
          <details>
            <summary>
              <code>&lt;br&gt;</code> - Break. Elemento per andare a capo
            </summary>
            <p>
              L'elemento <code>&lt;br&gt;</code> è utilizzato per inserire
              un'interruzione di linea all'interno del testo. A differenza di
              altri elementi come <code>&lt;p&gt;</code>, che creano un nuovo
              paragrafo, l'elemento
              <code>&lt;br&gt;</code> non aggiunge spazio verticale tra le
              linee, ma semplicemente va a capo. Non necessita di un tag di
              chiusura, è un elemento vuoto.
            </p>
          </details>
        </li>
        {/* HR */}
        <li>
          <details>
            <summary>
              <code>&lt;hr&gt;</code> - Horizontal Rule. Elemento per disegnare
              una linea orizzontale
            </summary>
            <p>
              L'elemento <code>&lt;hr&gt;</code> è utilizzato per inserire una
              linea orizzontale nella pagina. Viene comunemente usato per
              separare sezioni di contenuto o per creare una divisione visiva
              tra elementi. Non necessita di un tag di chiusura, è un elemento
              vuoto.
            </p>
          </details>
        </li>
        {/* STRONG */}
        <li>
          <details>
            <summary>
              <code>&lt;strong&gt;</code> - Testo importante. Visualizzato in
              grassetto
            </summary>
            <p>
              L'elemento <code>&lt;strong&gt;</code> è utilizzato per indicare
              che il testo all'interno del tag è importante o ha un significato
              particolare. Viene visualizzato in grassetto.
            </p>
          </details>
        </li>
        {/* EM */}
        <li>
          <details>
            <summary>
              <code>&lt;em&gt;</code> - Testo enfatizzato. Visualizzato in
              corsivo
            </summary>
            <p>
              L'elemento <code>&lt;em&gt;</code> è utilizzato per indicare che
              il testo all'interno del tag è enfatizzato o ha un significato
              particolare. Viene visualizzato in corsivo.
            </p>
          </details>
        </li>
        {/* BLOCKQUOTE */}
        <li>
          <details>
            <summary>
              <code>&lt;blockquote&gt;</code> - Citazione lunga. Visualizzato
              con rientro
            </summary>
            <p>
              L'elemento <code>&lt;blockquote&gt;</code> è utilizzato per
              indicare una citazione lunga, che occupa un intero paragrafo.
              Viene visualizzato con un rientro a sinistra e spesso con uno
              stile diverso per distinguere la citazione dal resto del testo.
            </p>
          </details>
        </li>
        {/* Q */}
        <li>
          <details>
            <summary>
              <code>&lt;q&gt;</code> - Elemento per citazioni brevi.
            </summary>
            <p>
              L'elemento <code>&lt;q&gt;</code> è utilizzato per indicare una
              citazione breve. Viene visualizzato tra virgolette.
            </p>
          </details>
        </li>
        {/* ABBR */}
        <li>
          <code>&lt;abbr&gt;</code> - Elemento per abbreviazioni. Visualizzato
          con un tooltip che mostra l'intero termine quando si passa il
          <abbr title="Sorpresa!">mouse sopra</abbr>
        </li>
        {/* CITE */}
        <li>
          <code>&lt;cite&gt;</code> - Elemento per citazioni di opere.
          Visualizzato in corsivo
        </li>
        {/* DFN */}
        <li>
          <code>&lt;dfn&gt;</code> - Elemento per definizioni. Visualizzato in
          corsivo in alcuni browser, tranne Safari e Chrome
        </li>
        {/* ADDRESS */}
        <li>
          <code>&lt;address&gt;</code> - Elemento per contenere le informazioni
          di contatto. Spesso visualizzato in corsivo
        </li>
        {/* INS */}
        <li>
          <code>&lt;ins&gt;</code> - Elemento per definire pezzi di testo appena
          inseriti.
          <ins>Visualizzato in sottolineato</ins>
        </li>
        {/* DEL */}
        <li>
          <code>&lt;del&gt;</code> - Elemento per definire parti di testo
          cancellato.
          <del>Visualizzato in barrato</del>
        </li>
        {/* S */}
        <li>
          <code>&lt;s&gt;</code> - Elemento per definire testo non più corretto
          o rilevante. <s>Visualizzato in barrato</s>
        </li>
        {/* PRE E CODE */}
        <li>
          <code>&lt;pre&gt;</code>, <code>&lt;code&gt;</code> - Elementi per
          definire blocchi di codice. Il testo all'interno di
          <code>&lt;pre&gt;</code> viene visualizzato con spazi e interruzioni
          di linea preservati, mentre
          <code>&lt;code&gt;</code> viene visualizzato in un font monospaziato.
          Spesso usati insieme per mostrare esempi di codice.
        </li>
        {/* MARK */}
        <li>
          <code>&lt;mark&gt;</code> - Elemento per evidenziare parti di testo.
          <mark>Visualizzato in giallo</mark>
        </li>
        {/* TIME */}
        <li>
          <code>&lt;time&gt;</code> - Elemento per definire una data o orario
          leggibile dalle macchine, ha un attributo specifico
          <code>datetime</code> che contiene la data in formato standard
          (2025-01-15).
        </li>
        {/* KBD */}
        <li>
          <code>&lt;kbd&gt;</code> - Elemento per definire input da tastiera.
          <kbd>Ctrl+C</kbd>
        </li>
        {/* SAMP */}
        <li>
          <code>&lt;samp&gt;</code> - Elemento per definire output di programmi.
          Visualizzato in font monospace.
          <samp>Errore: File non trovato</samp>
        </li>
        {/* VAR */}
        <li>
          <code>&lt;var&gt;</code> - Elemento per rappresentare variabili
          matematiche o di programmazione. Visualizzato in corsivo. <var>x</var>{" "}
          = 5
        </li>
      </ul>
    </section>
  );
}

export default SezioneTesto;
