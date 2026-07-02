import VideoPanda from "../..//assets/Video/VideoProva.mp4";
import TracciaAudio from "../..//assets/Audio/Forest.mp3";


function SezioneAudioVideo() {
  return (
    <section id="audiovideo" classNameName="audiovideo">
      <h2>Video e Audio</h2>
      <ul>
        {/* VIDEO */}
        <li>
          <details>
            <summary>
              <code>&lt;video&gt;</code> - Elemento che prevede un certo numero
              di attributi che consentono di controllare la riproduzione.
            </summary>
            <p>Attributi:</p>
            <ul>
              {/* SRC */}
              <li classNameName="sottoelemento">
                <code>src</code> - Specifica il percorso del video.
              </li>
              {/* POSTER */}
              <li classNameName="sottoelemento">
                <code>poster</code> - Specifica un'immagine da mostrare mentre
                il video è in download o finchè l'utente non avvia la
                riproduzione.
              </li>
              {/* PRELOAD */}
              <li className="sottoelemento">
                <code className="attributo">preload</code> - Dice al browser
                cosa fare mentre carica la pagina.
                <code className="valore">"auto"</code> per scaricare il video
                durante il caricamento della pagina,
                <code className="valore">"none"</code> per non scaricare il
                video finchè la riproduzione non viene avviatta, e
                <code className="valore">"metadata"</code> per raccogliere le
                informazioni del video.
              </li>
              {/* WIDTH E HEIGHT */}
              <li className="sottoelemento">
                <code className="attributo">width,height</code> - Specificano le
                dimenzioni del player.
              </li>
              {/* CONTROLS */}
              <li className="sottoelemento">
                <code className="attributo">controls</code> - Indica che deve
                essere il browser a fornire i propri controlli di riproduzione.
              </li>
              {/* AUTOPLAY */}
              <li className="sottoelemento">
                <code className="attributo">autoplay</code> - Avvio automatico
                del video al caricamento della pagina.
              </li>
              {/* LOOP */}
              <li className="sottoelemento">
                <code className="attributo">loop</code> - Indica che la
                riproduzione del video dovrà ricominciare da capo una volta
                terminata.
              </li>
            </ul>
            <video
              src={VideoPanda}
              preload="auto"
              controls
              width="400"
              height="300"
            ></video>
          </details>
        </li>
        {/* AUDIO */}
        <li>
          <code>&lt;audio&gt;</code> - Elemento che permette di inserire un file
          audio nella pagina. Prevede gli stessi attributi di
          <code>&lt;video&gt;</code>.
          <audio src={TracciaAudio} controls preload="auto"></audio>
        </li>
      </ul>
    </section>
  );
}

export default SezioneAudioVideo;
