import SezioneBase from '../sections/html/SezioneBase';
import SezioneSemantica from '../sections/html/SezioneSemantica';
import SezioneTesto from '../sections/html/SezioneTesto';
import SezioneListe from '../sections/html/SezioneListe';
import SezioneLink from '../sections/html/SezioneLink';
import SezioneImmagini from '../sections/html/SezioneImmagini';
import SezioneTabelle from '../sections/html/SezioneTabelle';
import SezioneModuli from '../sections/html/SezioneModuli';
import SezioneAudioVideo from '../sections/html/SezioneAudioVideo';
import SezioneAttributiGlobali from '../sections/html/SezioneAttributiGlobali';

function PaginaHTML() {
  return (
    <div id="pagina-html" className="pagina">
      <SezioneBase />
      <SezioneSemantica />
      <SezioneTesto />
      <SezioneListe />
      <SezioneLink />
      <SezioneImmagini />
      <SezioneTabelle />
      <SezioneModuli />
      <SezioneAudioVideo />
      <SezioneAttributiGlobali />
    </div>
  );
}

export default PaginaHTML;