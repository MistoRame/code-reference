import NY from "../..//assets/Immagini/NY.webp";

function SezioneImmagini() {
  return (
    <section id="img" className="img">
      <h2>Immagini</h2>
      <ul>
        <li>
          <details>
            <summary>
              {/* IMG */}
              <code>&lt;img&gt;</code> - Elemento per inserire immagini nella
              pagina. Non necessita di un tag di chiusura, è un elemento vuoto.
            </summary>
            <p>Attributi:</p>
            <ul>
              <li className="sottoelemento">
                {/* SRC */}
                <code>src</code> - Specifica l'URL dell'immagine da
                visualizzare.
              </li>
              <li className="sottoelemento">
                {/* ALT */}
                <code>alt</code> - Fornisce un testo che descrive l'immagine,
                utilizzato quando l'immagine non può essere visualizzata o per
                migliorare l'accessibilità.
              </li>
              <li className="sottoelemento">
                {/* WIDTH E HEIGHT */}
                <code>width</code> e <code>height</code> - Specificano la
                larghezza e l'altezza dell'immagine in pixel.
              </li>
              <li className="sottoelemento">
                {/* TITLE */}
                <code>title</code> - Fornisce un testo che viene visualizzato
                come tooltip quando si passa il mouse sopra l'immagine.
              </li>
            </ul>
          </details>
        </li>
        <li>
          {/* PICTURE */}
          <code>&lt;picture&gt;</code> - Elemento che permette di specificare
          più sorgenti per un'immagine, lasciando scegliere al browser quale
          utilizzare in base alle dimensioni dello schermo o al formato
          supportato.
        </li>
        <li>
          {/* SOURCE */}
          <code>&lt;source&gt;</code> - Elemento per specificare le diverse
          sorgenti per un'immagine all'interno di un elemento
          <code>&lt;picture&gt;</code>. Ha attributi specifici:
          <code>src</code> (percorso file),
          <code>srcset</code> (immagini responsive),
          <code>media</code> (condizioni per l'utilizzo della sorgente) e{" "}
          <code>type</code> (formato dell'immagine). Non necessita di un tag di
          chiusura, è un elemento vuoto.
        </li>
        <li>
          {/* FIGURE */}
          <code>&lt;figure&gt;</code> - Elemento per raggruppare una o più
          immagini con una didascalia.
        </li>
        <li>
          {/* FIGCAPTION */}
          <code>&lt;figcaption&gt;</code> - Elemento per fornire una didascalia
          a un elemento
          <figure>
            <img src={NY} alt="New York" title="New York" />
            <figcaption>Skyline di New York 2025</figcaption>
          </figure>
        </li>
        <li>
          <details>
            <summary>
              {/* SVG */}
              <code>&lt;svg&gt;</code> - Elemento per creare grafica vettoriale.
              A differenza di <code>&lt;img&gt;</code>, che visualizza
              un'immagine statica, l'elemento
              <code>&lt;svg&gt;</code> consente di creare grafica dinamica e
              interattiva utilizzando il linguaggio SVG (Scalable Vector
              Graphics). Può essere usato per disegnare forme, linee, testo e
              immagini, ed è scalabile senza perdita di qualità.
            </summary>
            <p>Attributi:</p>
            <ul>
              <li className="sottoelemento">
                {/* VIEWBOX */}
                <code className="attributo">viewBox</code> - Definisce l'area
                visibile del disegno SVG. È rappresentato da quattro valori:
                min-x, min-y, width e height (es. "0 0 100 100").
              </li>
              <li className="sottoelemento">
                {/* PRESERVEASPECTREATION */}
                <code className="attributo">preserveAspectRatio</code> -
                Controlla come il disegno SVG viene scalato e posizionato
                all'interno dell'area definita da viewBox. Valori possibili:
                "none" (non preserva le proporzioni), "xMinYMin" (allinea
                l'angolo superiore sinistro del disegno con l'angolo superiore
                sinistro dell'area), "xMidYMid" (centra il disegno nell'area),
                "xMaxYMax" (allinea l'angolo inferiore destro del disegno con
                l'angolo inferiore destro dell'area), ecc.
              </li>
              <li className="sottoelemento">
                {/* FOCUSABLE */}
                <code className="attributo">focusable</code> - Controlla se
                l'elemento SVG può ricevere il focus tramite la tastiera. Valori
                possibili: "true" (l'elemento può ricevere il focus), "false"
                (l'elemento non può ricevere il focus).
              </li>
              <li className="sottoelemento">
                {/* XMLNS */}
                <code className="attributo">xmlns</code> - Specifica lo spazio
                dei nomi XML per l'elemento SVG.
              </li>
              <li className="sottoelemento">
                {/* WIDTH E HEIGHT */}
                <code className="attributo">width</code> e
                <code className="attributo">height</code> - Specificano la
                larghezza e l'altezza dell'immagine in pixel.
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </section>
  );
}

export default SezioneImmagini;
