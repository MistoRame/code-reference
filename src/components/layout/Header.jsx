import logo from "../..//assets/Immagini/code.png";
import HTMLLogo from "../..//assets/Immagini/HTML5Logo.webp";
import CSSLogo from "../..//assets/Immagini/CSS3Logo.png";
import JSLogo from "../..//assets/Immagini/JavaScriptLogo.png";

function Header({
  vistaAttiva,
  onCambiaVista,
  playgroundAttivo,
  onTogglePlayground,
}) {
  return (
    <header>
      <h1 className="titolo">
        <button
          className={`tab ${vistaAttiva === "html" ? "attiva-tab" : ""}`}
          onClick={() => onCambiaVista("html")}
        >
          <img src={HTMLLogo} alt="HTML5" />
        </button>
        <button
          className={`tab ${vistaAttiva === "css" ? "attiva-tab" : ""}`}
          onClick={() => onCambiaVista("css")}
          src={CSSLogo}
        >
          <img src={CSSLogo} alt="CSS3" />
        </button>
        <button
          className={`tab ${vistaAttiva === "js" ? "attiva-tab" : ""}`}
          onClick={() => onCambiaVista("js")}
          src={JSLogo}
        >
          <img src={JSLogo} alt="JavaScript" />
        </button>
      </h1>
      <button
        className="btn-playground"
        onClick={() => onTogglePlayground(!playgroundAttivo)}
        title={playgroundAttivo ? "Chiudi Playground" : "Apri Playground"}
      >
        <img src={logo} alt="Editor" />
      </button>
    </header>
  );
}

export default Header;
