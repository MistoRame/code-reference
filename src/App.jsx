import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Playground from "./components/layout/Playground";
import PaginaHTML from "./pages/PaginaHTML";
import PaginaCSS from "./pages/PaginaCSS";
import PaginaJS from "./pages/PaginaJS";

function App() {
  const [vistaAttiva, setVistaAttiva] = useState(() => {
    return localStorage.getItem("paginaAttiva") || "html";
  });

  const [playgroundAttivo, setPlaygroundAttivo] = useState(false);

  useEffect(() => {
    localStorage.setItem("paginaAttiva", vistaAttiva);

    // applica tema html al body quando si è sulla pagina HTML
    if (vistaAttiva === "html") {
      document.body.classList.add("tema-html");
    } else {
      document.body.classList.remove("tema-html");
    }

    // applica tema css al body quando si è sulla pagina CSS
    if (vistaAttiva === "css") {
      document.body.classList.add("tema-css");
    } else {
      document.body.classList.remove("tema-css");
    }

    // applica tema js al body quando si è sulla pagina JS
    if (vistaAttiva === "js") {
      document.body.classList.add("tema-js");
    } else {
      document.body.classList.remove("tema-js");
    }
  }, [vistaAttiva]);

  return (
    <>
      <button
        className="hamburger"
        onClick={() =>
          document.getElementById("indice").classList.toggle("aperto")
        }
      >
        ☰
      </button>

      <Header
        vistaAttiva={vistaAttiva}
        onCambiaVista={setVistaAttiva}
        playgroundAttivo={playgroundAttivo}
        onTogglePlayground={setPlaygroundAttivo}
      />

      <main
        className={`main-app ${playgroundAttivo ? "playground-active" : ""}`}
      >
        <div className="main-content">
          <Layout vistaAttiva={vistaAttiva}>
            {vistaAttiva === "html" && <PaginaHTML />}
            {vistaAttiva === "css" && <PaginaCSS />}
            {vistaAttiva === "js" && <PaginaJS />}
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
