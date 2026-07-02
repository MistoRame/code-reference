import SezioneBase from "../sections/css/SezioneBase";
import SezioneSelettori from "../sections/css/SezioneSelettori";
import SezioneColori from "../sections/css/SezioneColori";
import SezioneTesto from "../sections/css/SezioneTesto";


function PaginaCSS() {
  return (
    <div id="pagina-css" className="pagina">
        <SezioneBase />     
        <SezioneSelettori />
        <SezioneColori />
        <SezioneTesto />
    </div>    
  );
}

export default PaginaCSS;