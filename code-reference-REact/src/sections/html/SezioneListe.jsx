function SezioneListe() {
  return (
    <section id="liste" className="liste">
      <h2>Liste</h2>
      <ul>
        {/* OL */}
        <li>
          <details>
            <summary>
              <code>&lt;ol&gt;</code> - Elemento per definire liste ordinate,
              utilizzano numeri (CSS per lettere, numeri romani..). Gli elementi
              della lista sono rappresentati da &lt;li&gt;
            </summary>
            <ol>
              <li>Primo elemento</li>
              <li>Secondo elemento</li>
              <li>Terzo elemento</li>
            </ol>
          </details>
        </li>
        {/* UL */}
        <li>
          <details>
            <summary>
              <code>&lt;ul&gt;</code> - Elemento per definire liste non
              ordinate, utilizzano puntatori. Gli elementi della lista sono
              rappresentati da &lt;li&gt;
            </summary>
            <ul>
              <li>Primo elemento</li>
              <li>Secondo elemento</li>
              <li>Terzo elemento</li>
            </ul>
          </details>
        </li>
        {/* DL */}
        <li>
          <details>
            <summary>
              <code>&lt;dl&gt;</code> - Elemento per definire liste di
              definizioni, usate per definire una terminologia. Gli elementi
              della lista sono rappresentati da &lt;dt&gt; (termine) e
              &lt;dd&gt; (definizione)
            </summary>
            <dl>
              <dt>HTML</dt>
              <dd>HyperText Markup Language</dd>
              <dt>CSS</dt>
              <dd>Cascading Style Sheets</dd>
              <dt>JavaScript</dt>
              <dd>Linguaggio di programmazione per il web</dd>
            </dl>
          </details>
        </li>
      </ul>
    </section>
  );
}

export default SezioneListe;