function SezioneSelettori() {
  return (
    <section id="css-selettori" className="css-selettori">
      <h2>Selettori</h2>
      <p>
        I selettori CSS sono utilizzati per selezionare gli elementi HTML a cui
        applicare le regole di stile. Esistono diversi tipi di selettori che
        consentono di indirizzare le regole verso specifici elementi di un
        documento. I selettore CSS distinguono fra lettere maiuscole e
        minuscole, pertanto i nomi di elementi e valori devono essere esatti.
      </p>
      <ul>
        <li className="sottoelemento">
          {/* SELETTORE UNIVERSALE */}
          <code className="selettore">*</code> - Selettore universale che
          seleziona tutti gli elementi della pagina.
        </li>
        <li className="sottoelemento">
          {/* SELETTORE DI TIPO */}
          <code className="selettore">elemento</code> - Selettore di tipo che
          seleziona tutti gli elementi di un certo tipo, ad esempio
          <code> p</code> per i paragrafi o <code>h1</code> per i titoli di primo
          livello.
        </li>
        <li className="sottoelemento">
          {/* SELETTORE DI classNameE */}
          <code className="selettore">.classNamee</code> - Selettore di
          classNamee che seleziona tutti gli elementi che hanno una certa
          classNamee. Un elemento può appartenere a più classNamei
          contemporaneamente.
        </li>
        <li className="sottoelemento">
          {/* SELETTORE ID */}
          <code className="selettore">#id</code> - Selettore ID che seleziona un
          elemento in base al suo ID univoco. Ogni ID deve essere usato una sola
          volta all'interno di una pagina.
        </li>
        <li className="sottoelemento">
          {/* SELETTORE FIGLIO */}
          <code className="selettore">elemento {">"} elemento</code> - Selettore
          figlio, seleziona gli elementi che sono figli diretti di un altro
          elemento. Ad esempio, <code>div {">"} p</code> seleziona tutti i
          paragrafi che sono figli diretti di un div.
        </li>
        <li className="sottoelemento">
          {/* SELETTORE DISCENDENTE */}
          <code className="selettore">elemento elemento</code> - Selettore
          discendente, seleziona gli elementi che sono discendenti di un altro
          elemento. Ad esempio, <code>p a</code> individua ogni elemento{" "}
          <code>&lt;a&gt;</code> ospitato da un elemento
          <code>&lt;p&gt;</code>, anche se fra di essi vi sono altri elementi.
        </li>
        <li className="sottoelemento">
          {/* SELETTORE FRATELLO ADIACENTE */}
          <code className="selettore">elemento + elemento</code> - Selettore
          fratello adiacente, seleziona gli elementi che sono fratelli adiacenti
          di un altro elemento. Ad esempio,
          <code>h1 + p </code>
          seleziona solo il paragrafo che segue immediatamente un titolo di
          primo livello.
        </li>
        <li className="sottoelemento">
          {/* SELETTORE FRATELLO GENERICO */}
          <code className="selettore">elemento ~ elemento</code> - Selettore
          fratello generico, seleziona gli elementi che sono fratelli di un
          altro elemento. Ad esempio, <code>h1 ~ p</code> seleziona tutti i
          paragrafi che seguono un titolo di primo livello.
        </li>
      </ul>
    </section>
  );
}

export default SezioneSelettori;
