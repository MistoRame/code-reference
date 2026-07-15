import BloccoCodice from "../../components/BloccoCodice";

const EsempioFontFace = `
  @font-face {
  font-family: NomeFont;
  src: url("Percorso/NomeFont.woff") format("woff");
  src: url("Percorso/NomeFont.svg") format("svg");
}`;

function SezioneTesto() {
  return (
    <section id="css-testo" className="css-testo">
      <h2>Testo</h2>
      <ul>
        <li className="sottoelemento">
          {/* FONT-FAMILY */}
          <code className="attributo">font-family</code> - Consente di
          specificare il tipo di carattere da utilizzare per il testo degli
          elementi ai quali si applica la regola CSS. Il valore è il nome del
          tipo di carattere e coloro che visitano il sito dovranno avere
          installato sul computer quel tipo di carattere per poterlo
          visualizzare correttamente. Per questo motivo, è buona pratica
          specificare più tipi di carattere come opzioni di riserva, separati da
          virgole. Ad esempio,
          <code className="attributo">font-family</code>
          <code className="valore">: Arial, Helvetica, sans-serif;</code>
          indica che il browser dovrebbe utilizzare Arial se è disponibile,
          altrimenti Helvetica, e se nessuno dei due è disponibile, dovrebbe
          utilizzare un qualsiasi tipo di carattere sans-serif generico. Se il
          nome del carattere è costituito da più parole, occorre racchiuderlo
          tra virgolette.
        </li>
        <li className="sottoelemento">
          {/* FONT-SIZE */}
          <code className="attributo">font-size</code> - Imposta la dimensione
          del testo. Può essere specificata in pixel(
          <code className="valore">px</code>), percentuali(
          <code className="valore">%</code>), o em(
          <code className="valore">em</code>).
        </li>
        <li className="sottoelemento">
          {/* FONT-FACE */}
          <code className="attributo">font-face</code> - Permette di utilizzare
          un font personalizzato che non è installato sul computer dell'utente,
          specificando il percorso del file del font, il nome da associare ad
          esso, e il formato del file per renderlo compatibile con i diversi
          browser.
          <BloccoCodice codice={EsempioFontFace} linguaggio="css" />
        </li>
        <li className="sottoelemento">
          {/* FONT-WEIGHT */}
          <code className="attributo">font-weight</code> - Controlla lo spessore
          del testo, con valori da 100 a 900 (400 è normale, 700 è grassetto),
          oppure con parole chiave come
          <code className="valore"> normal</code>,
          <code className="valore"> bold</code>, e
          <code className="valore"> bolder</code>.
        </li>
        <li className="sottoelemento">
          {/* FONT-STYLE */}
          <code className="attributo">font-style</code> - Controlla lo stile del
          testo, con valori come
          <code className="valore"> normal</code>,
          <code className="valore"> italic</code> (corsivo), e
          <code className="valore"> oblique</code> (testo inclinato).
        </li>
        <li className="sottoelemento">
          {/* TEXT-TRANSFORM */}
          <code className="attributo">text-transform</code> - Controlla la
          trasformazione del testo, con valori come
          <code className="valore"> lowercase</code> (Testo in minuscolo),
          <code className="valore"> uppercase</code> (Testo in maiuscolo), e
          <code className="valore"> capitalize</code> (Prima lettera di ogni
          parola in maiuscolo).
        </li>
        <li className="sottoelemento">
          {/* TEXT-DECORATION */}
          <code className="attributo">text-decoration</code> - Controlla la
          decorazione del testo, con valori come
          <code className="valore"> none</code> (rimuove qualsiasi decorazione),
          <code className="valore"> underline</code> (sottolineato),
          <code className="valore"> overline</code> (linea sopra il testo),
          <code className="valore"> line-through</code> (barrato), e
          <code className="valore"> blink</code> (testo lampeggiante).
        </li>
        <li className="sottoelemento">
          {/* LINE-HEIGHT */}
          <code className="attributo"> line-height</code> - Interlinea, spazio
          verticale che separa le varie righe di testo.
        </li>
      </ul>
    </section>
  );
}

export default SezioneTesto;
