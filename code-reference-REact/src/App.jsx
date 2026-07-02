import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Layout from './components/layout/Layout';
import Playground from './components/layout/Playground';
import PaginaHTML from './pages/PaginaHTML';
import PaginaCSS from './pages/PaginaCSS';

function App() {
  const [vistaAttiva, setVistaAttiva] = useState(() => {
    return localStorage.getItem('paginaAttiva') || 'html';
  });

  const [playgroundAttivo, setPlaygroundAttivo] = useState(false);

  useEffect(() => {
    localStorage.setItem('paginaAttiva', vistaAttiva);
    // applica tema scuro al body quando si è sulla pagina CSS
    if (vistaAttiva === 'css') {
      document.body.classList.add('tema-css');
    } else {
      document.body.classList.remove('tema-css');
    }
  }, [vistaAttiva]);

  return (
    <>
      <button
        className="hamburger"
        onClick={() => document.getElementById('indice').classList.toggle('aperto')}
      >
        ☰
      </button>

      <Header 
        vistaAttiva={vistaAttiva} 
        onCambiaVista={setVistaAttiva}
        playgroundAttivo={playgroundAttivo}
        onTogglePlayground={setPlaygroundAttivo}
      />

      <main className={`main-app ${playgroundAttivo ? 'playground-active' : ''}`}>
        <div className="main-content">
          <Layout vistaAttiva={vistaAttiva}>
            {vistaAttiva === 'html' && <PaginaHTML />}
            {vistaAttiva === 'css' && <PaginaCSS />}
          </Layout>
        </div>
        
        {playgroundAttivo && (
          <div className="playground-panel">
            <Playground />
          </div>
        )}
      </main>
    </>
  );
}

export default App;