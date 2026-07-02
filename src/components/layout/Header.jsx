import logo from "../..//assets/Immagini/code.png";

function Header({ vistaAttiva, onCambiaVista, playgroundAttivo, onTogglePlayground }) {
  return (
    <header>
      <h1 className="titolo">
        <button
          className={`tab ${vistaAttiva === 'html' ? 'attiva-tab' : ''}`}
          onClick={() => onCambiaVista('html')}
        >
          HTML
        </button>
        <button
          className={`tab ${vistaAttiva === 'css' ? 'attiva-tab' : ''}`}
          onClick={() => onCambiaVista('css')}
        >
          CSS
        </button>
      </h1>
      <button 
        className="btn-playground"
        onClick={() => onTogglePlayground(!playgroundAttivo)}
        title={playgroundAttivo ? 'Chiudi Playground' : 'Apri Playground'}
      >
        <img src={logo} alt="Editor" />
      </button>
    </header>
  );
}

export default Header;