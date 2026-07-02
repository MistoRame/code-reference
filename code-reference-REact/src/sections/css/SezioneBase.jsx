function SezioneBase() {
  return (
    <section id="css-introduzione" className="css-introduzione">
      <h2>Introduzione</h2>
      <p>
        Il linguaggio CSS consente di creare delle regole che governano il modo
        in cui deve essere visualizzato il contenuto di un elemento. Una regola
        CSS è composta da due parti: un selettore e una dichiarazione. La
        dichiarazione è composta a sua volta da due parti: una proprietà e un
        valore.
      </p>
      <svg
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        className="schema-css"
      >
        {/* SFONDO */}
        <rect width="400" height="200" fill="#2d2d3a" rx="8" />

        {/* TESTO SELETTORE */}
        <text
          x="60"
          y="50"
          fill="#DAB266"
          font-family="Orbitron, monospace"
          font-size="11"
          letter-spacing="2"
        >
          SELETTORE
        </text>

        {/* LINEA SELETTORE */}
        <line
          x1="85"
          y1="52"
          x2="85"
          y2="70"
          stroke="#DAB266"
          stroke-width="1.5"
        />

        {/* codice */}
        <text x="80" y="80" font-family="Consolas, monospace" font-size="16">
          <tspan fill="#DAB266">p</tspan>
          <tspan fill="#e0e0e0">{"{"}</tspan>
        </text>
        <text x="110" y="80" font-family="Consolas, monospace" font-size="16">
          <tspan fill="#9cdcfe">font-family</tspan>
          <tspan fill="#e0e0e0">:</tspan>
          <tspan fill="#ce9178">Arial</tspan>
          <tspan fill="#e0e0e0">;{"}"}</tspan>
        </text>

        {/* LINEA DICHIARAZIONE */}
        <path
          d="M 100 90 L 100 110 L 290 110 L 290 90"
          stroke="#4cc9c0"
          stroke-width="1.5"
          fill="none"
        />

        {/* TESTO DICHIARAZIONE */}
        <text
          x="133"
          y="123"
          fill="#4cc9c0"
          font-family="Orbitron, monospace"
          font-size="11"
          letter-spacing="2"
        >
          DICHIARAZIONE
        </text>

        {/* LINEA PROPRIETA */}
        <path
          d="M 100 130 L 100 140 L 210 140 L 210 130"
          stroke="#9cdcfe"
          stroke-width="1.5"
          fill="none"
        />

        {/* TESTO PROPRIETÁ */}
        <text
          x="118"
          y="152"
          fill="#9cdcfe"
          font-family="Orbitron, monospace"
          font-size="9"
          letter-spacing="2"
        >
          PROPRIETÁ
        </text>

        {/* LINEA VALORE */}
        <path
          d="M 230 130 L 230 140 L 280 140 L 280 130"
          stroke="#ce9178"
          stroke-width="1.5"
          fill="none"
        />

        {/* TESTO VALORE */}
        <text
          x="228"
          y="152"
          fill="#ce9178"
          font-family="Orbitron, monospace"
          font-size="9"
          letter-spacing="2"
        >
          VALORE
        </text>
      </svg>
      {/* LINK */}
      <p>
        L'elemento <code>&lt;link&gt;</code> è utilizzato per dire al browser
        dove trovare il file CSS da utilizzare per impostare lo stile della
        pagina. Non prevede un tag di chiusura ed è posto dentro{" "}
        <code>&lt;head&gt;</code>. Ha 3 attributi principali:
        <code className="attributo">rel</code>,
        <code className="attributo">href</code> e
        <code className="attributo">type</code>.
      </p>
      <ul>
        <li className="sottoelemento">
          {/* REL */}
          <code className="attributo">rel</code> - Specifica la relazione tra il
          documento e il file collegato. Per i fogli di stile, il valore è
          sempre <code className="valore">"stylesheet"</code>.
        </li>
        <li className="sottoelemento">
          {/* HREF */}
          <code className="attributo">href</code> - l'URL del file CSS. É
          possibile utilizzare più file CSS per pagina.
        </li>
        <li className="sottoelemento">
          {/* TYPE */}
          <code className="attributo">type</code> - Tipo di contenuto del file
          collegato. Per i fogli di stile, il valore è sempre
          <code className="valore">"text/css"</code>.
        </li>
      </ul>
      <p>
        É possibile includere delle regole agli elementi HTML racchiudendoli
        nell'elemento <code>&lt;style&gt;</code>, oppure usandolo direttamente
        come loro attributo.
      </p>
      <p>
        Se a uno stesso elemento vengono applicate più regole, è importante
        capire quale ha la precedenza; Nel caso in cui i due selettori abbiano
        la stessa specificità, viene usato quello che compare per ultimo nel
        codice. Se invece i selettori hanno specificità diversa, vince quello
        con specificità maggiore. È possibile aggingere l'attributo
        <code className="attributo"> !important</code> a una dichiarazione per
        darle la massima priorità, ma è sconsigliato farlo se non in casi
        estremi, poiché rende più difficile la manutenzione del codice.
      </p>
      <p>
        Alcune proprietà CSS vengono ereditate dagli elementi figli, mentre
        altre no. Ad esempio, le proprietà di testo come 
        <code className="attributo"> color</code> e 
        <code className="attributo"> font-family</code> vengono ereditate, mentre
        le proprietà di layout come
        <code className="attributo"> margin</code> e
        <code className="attributo"> padding</code> no. Se si desidera forzare
        l'ereditarietà di una proprietà che normalmente non viene ereditata, è
        possibile utilizzare il valore
        <code className="valore"> inherit</code>. È possibile utilizzare anche i
        valori <code className="valore"> initial</code> per ripristinare il
        valore predefinito di una proprietà, e
        <code className="valore"> unset</code> per rimuovere qualsiasi valore
        assegnato a una proprietà, facendola comportare come se non fosse stata
        specificata.
      </p>
    </section>
  );
}

export default SezioneBase;
