function SezioneAttributiGlobali() {
  return (
    <section id="attributi" className="attributi">
      <h2>Attributi Globali</h2>
      <ul>
        <li>
          {/* ID */}
          <code>id</code> - Identifica univocamente un elemento.
        </li>
        <li>
          {/* className */}
          <code>className</code> - Assegnare una o più classNamei CSS a un
          elemento.
        </li>
        <li>
          {/* TITLE */}
          <code title="Esempio">title</code> - Fornisce informazioni aggiuntive
          sull'elemento sotto forma di tooltip al passaggio del mouse.
        </li>
        <li>
          {/* LANG */}
          <code>lang</code> - Specifica la lingua del contenuto dell'elemento,
          utile per l'accessibilità e per i motori di ricerca.
        </li>
        <li>
          {/* DIR */}
          <code>dir</code> - Indica la direzione del testo, può essere
          <code className="valore">"ltr"</code> per testo da sinistra a destra,
          o <code className="valore">"rtl"</code> per testo da destra a
          sinistra.
        </li>
        <li>
          {/* HIDDEN */}
          <code>hidden</code> - Nasconde l'elemento dalla visualizzazione, ma lo
          mantiene nel DOM.
        </li>
        <li>
          {/* TABINDEX */}
          <code>tabindex</code> - Controlla l'ordine di tabulazione degli
          elementi interattivi, consentendo di navigare tra di essi usando il
          tasto Tab.
        </li>
        <li>
          {/* CONTENTEDITABLE */}
          <code contenteditable="true" spellcheck="false">
            contenteditable
          </code>
          - Rende l'elemento modificabile direttamente dall'utente, consentendo
          di creare aree di testo editabili senza l'uso di campi di input.
        </li>
        <li>
          {/* DRAGGABLE */}
          <code draggable="true">draggable</code> - Rende l'elemento
          trascinabile, consentendo agli utenti di spostarlo all'interno della
          pagina o tra finestre del browser.
        </li>
        <li>
          {/* SPELLCHECK */}
          <code>spellcheck</code> - Indica se il browser deve eseguire un
          controllo ortografico sul contenuto dell'elemento. Può essere
          impostato su <code className="valore">"true"</code> per abilitare il
          controllo ortografico, o su
          <code className="valore">"false"</code> per disabilitarlo.
        </li>
        <li>
          {/* TRANSLATE */}
          <code>translate</code> - Indica se il contenuto dell'elemento deve
          essere tradotto quando la pagina viene tradotta in un'altra lingua.
          Può essere impostato su
          <code className="valore">"yes"</code> per consentire la traduzione, o
          su <code className="valore">"no"</code> per escludere l'elemento dalla
          traduzione.
        </li>
        <li>
          {/* data-* */}
          <code>data-*</code> - Permette di aggiungere attributi personalizzati
          all'elemento, utili per immagazzinare informazioni specifiche
          dell'applicazione da utilizzare con JavaScript.
        </li>
        <li>
          {/* ACCESSKEY */}
          <code>accesskey</code> - Specifica una scorciatoia da tastiera per
          accedere all'elemento.
        </li>
        <li>
          {/* AUTOFOCUS */}
          <code>autofocus</code> - Indica che l'elemento dovrebbe ricevere
          automaticamente il focus quando la pagina viene caricata.
        </li>
      </ul>
    </section>
  );
}

export default SezioneAttributiGlobali;
