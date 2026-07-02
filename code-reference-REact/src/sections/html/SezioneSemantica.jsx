function SezioneSemantica() {
  return (
    <section id="semantica" className="semantica">
      <h2>Struttura e layout</h2>
      <p>
        Elementi utilizzati per organizzare la struttura della pagina. Alcuni
        sono generici, altri hanno valenza semantica (<code>&lt;span&gt;</code>e
        <code>&lt;p&gt;</code>), in quanto comunicano al browser e agli screen
        reader il loro significato. Accettano tutti attributi globali.
      </p>
      <ul>
        {/*-- H1-H6 -- */}
        <li>
          <code>&lt;h1&gt;</code> \ <code>&lt;h6&gt;</code> - Elementi per
          definire titoli di diverso livello
          <div className="titoli" headingoffset="1">
            <h1>Esempio H1</h1>
            <h2>Esempio H2</h2>
            <h3>Esempio H3</h3>
            <h4>Esempio H4</h4>
            <h5>Esempio H5</h5>
            <h6>Esempio H6</h6>
          </div>
        </li>
        {/*-- P -- */}
        <li>
          <code>&lt;p&gt;</code> - Elemento per definire paragrafi. Va a capo
          prima e dopo, ha margini verticali di default.
        </li>
        {/*-- SPAN -- */}
        <li>
          <code>&lt;span&gt;</code>- Elemento inline per definire parti di testo
          all'interno di altri elementi. Non va a capo, é un contenutore
          generico
        </li>
        {/*-- DIV -- */}
        <li>
          <code>&lt;div&gt;</code>- Elemento per definire blocchi di contenuto
        </li>
        {/*-- HEADER -- */}
        <li>
          <code>&lt;header&gt;</code> - Intestazione della pagina o di una
          sezione. Può contenere elementi come il logo, il titolo, il menu di
          navigazione, ecc. Può essere usato all'interno di
          <code>&lt;article&gt;</code> o <code>&lt;section&gt;</code>.
        </li>
        {/*-- FOOTER -- */}
        <li>
          <code>&lt;footer&gt;</code> - Piè di pagina. Come
          <code>&lt;header&gt;</code>, può essere usato all'interno di
          <code>&lt;article&gt;</code> o <code>&lt;section&gt;</code>. Contiene
          informazioni come i diritti d'autore, i link ai social media, i
          contatti, ecc.
        </li>
        {/*-- NAV -- */}
        <li>
          <code>&lt;nav&gt;</code> - Elemento per definire una sezione di
          navigazione, che contiene link a pagine o sezioni correlate. Può
          essere usato all'interno di
          <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,
          <code>&lt;article&gt;</code> o <code>&lt;section&gt;</code>.
        </li>
        {/*-- MAIN -- */}
        <li>
          <code>&lt;main&gt;</code> - Elemento per definire il contenuto
          principale della pagina. Deve essere unico e non può apparire più di
          una volta e all'interno di altri elementi strutturali.
        </li>
        {/*-- ARTICLE -- */}
        <li>
          <code>&lt;article&gt;</code> - Elemento per definire un contenuto
          autonomo e indipendente, come un post o una notizia. Può essere usato
          fuori dal contesto della pagina.
        </li>
        {/*-- ASIDE -- */}
        <li>
          <code>&lt;aside&gt;</code> - Elemento per definire un contenuto
          correlato al contenuto principale, come una barra laterale, un box di
          approfondimento, ecc. Può essere usato all'interno di{" "}
          <code>&lt;article&gt;</code> o<code>&lt;section&gt;</code>.
        </li>
        {/*-- SECTION -- */}
        <li>
          <code>&lt;section&gt;</code> - Sezione tematica della pagina, che
          contiene un insieme di contenuti correlati.
        </li>
        <li>
          {/*-- IFRAME -- */}
          <code>&lt;iframe&gt;</code> - Elemento utilizzato per incorporare una
          pagina web all'interno di un altra pagina.
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11157.285727695751!2d9.583182149999999!3d45.6443664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1774201778375!5m2!1sit!2sit"
            width="600"
            height="450"            
            loading="lazy"
            sandbox="allow-scripts"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </li>
        <li>
          {/*-- COMMENTI -- */}
          <code className="commento">&lt;!-- --&gt;</code> - Tutto quello che viene
          scritto all'interno di questo elemento è considerato un commento.
        </li>
      </ul>
    </section>
  );
}

export default SezioneSemantica;
