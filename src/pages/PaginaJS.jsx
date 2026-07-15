import Introduzione from '../sections/js/Introduzione';
import SezioneVariabili from '../sections/js/SezioneVariabili';
import SezioneEspOpe from '../sections/js/SezioneEspressioniOperatori';

function PaginaJS() {
  return (
    <div id="pagina-js" className="pagina">
      <Introduzione />
      <SezioneVariabili />
      <SezioneEspOpe />
    </div>
  );
}

export default PaginaJS;
