function Introduzione() {
  return (
    <section id="js-introduzione" className="js-introduzione">
      <h2>Introduzione a JavaScript</h2>
      <p>
        JavaScript è un linguaggio di programmazione versatile e potente che
        viene utilizzato principalmente per lo sviluppo web. È un linguaggio
        lato client, il che significa che viene eseguito nel browser
        dell'utente, consentendo di creare interazioni dinamiche e migliorare
        l'esperienza dell'utente.Con JavaScript, è possibile manipolare il
        contenuto delle pagine web, gestire eventi come clic e movimenti del
        mouse, effettuare richieste al server senza ricaricare la pagina (AJAX),
        e molto altro ancora. È uno dei linguaggi fondamentali per lo sviluppo
        web moderno, insieme a HTML e CSS.
      </p>
      <ul>
        <li className="sottoelemento">
          <p>
            Uno <b>script</b> è costituito da una serie di istruzioni che un
            computer può eseguire in successione. Ogni singola istruzione o
            passo deve terminare con un punto e virgola.
          </p>
        </li>
        <li className="sottoelemento">
          <p>
            JavaScript distingue tra maiuscole e minuscole (case-sensitive).
          </p>
        </li>
        <li className="sottoelemento">
          <p>
            Alcune istruzioni sono racchiuse fra parentesi graffe, che servono a
            formare dei blocchi di codice. La parentesi graffa di chiusura non
            deve essere seguita da un punto e virgola.
          </p>
        </li>
        <li className="sottoelemento">
          <p>
            Le istruzioni possono essere raggruppate in funzioni, che sono dei
            blocchi di codice che possono essere richiamati più volte.
          </p>
        </li>
        <li className="sottoelemento">
          <p>
            I commenti aiutano a descrivere il significato del codice,
            migliorando la sua leggibilità. Possono essere monoriga, scrivendo
            dopo i caratteri <code className="commento">//</code>, o multiriga,
            mettendo il testo tra i caratteri{" "}
            <code className="commento">/* */</code> .
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Introduzione;
