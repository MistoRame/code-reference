import DemoRGB from "../../components/layout/DemoRGB";

function SezioneColori() {
  return (
    <section id="css-colori" className="css-colori">
      <h2>Colori</h2>
      <p>
        La proprietà <code className="valore">color</code> consente di impostare
        il colore del testo di un elemento, mentre la proprietà{" "}
        <code className="valore">background-color</code> consente di impostare
        il suo colore di sfondo, in quanto CSS tratta ogni elemento come se si
        trovasse in un box che ne contiene il contenuto. È possibile specificare
        questa proprietà in diversi modi:
      </p>
      <ul>
        <li className="sottoelemento">
          {/* NOME */}
          -Nome di colore predefinito riconosciuto dal browser. Come
          <code className="valore">red</code>,
          <code className="valore">blue</code>, o
          <code className="valore">green</code>.
        </li>
        <li className="sottoelemento">
          {/* ESAGONALE */}
          -Valore esadecimale, ad esempio
          <code className="valore">#ff0000</code> per il rosso, o
          <code className="valore">#0000ff</code> per il blu. L'opacità è
          gestita aggiungendo due cifre in più alla fine del codice esadecimale,
          da 00 (trasparente) a FF (opaco).
        </li>
        <li className="sottoelemento">
          {/* RGB */}
          -Notazione RGB, ad esempio
          <code className="valore">rgb(255, 0, 0)</code> per il rosso,
          <code className="valore">rgb(0, 0, 255)</code> per il blu, o
          <code className="valore">rgb(0, 255, 0)</code> per il verde. L'opacità
          è gestita aggiungendo un quarto valore, da 0 (trasparente) a 1 (opaco)
        </li>
        <li className="sottoelemento">
          {/* HSL */}
          -Notazione HSL, ad esempio
          <code className="valore">hsl(0, 100%, 50%)</code> per il rosso, o
          <code className="valore">hsl(240, 100%, 50%)</code> per il blu.
          L'opacità è gestita aggiungendo un quarto valore, da 0 (trasparente) a
          1 (opaco)
        </li>
      </ul>
      <div className="rgb-demo">
        <DemoRGB />
      </div>
    </section>
  );
}

export default SezioneColori;
