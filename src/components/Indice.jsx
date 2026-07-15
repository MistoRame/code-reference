const indiciPagine = {
  html: [
    { href: '#base',       testo: 'Elementi base' },
    { href: '#semantica',  testo: 'Semantica' },
    { href: '#testo',      testo: 'Testo' },
    { href: '#liste',      testo: 'Liste' },
    { href: '#link',       testo: 'Link' },
    { href: '#img',        testo: 'Immagini' },
    { href: '#tabelle',    testo: 'Tabelle' },
    { href: '#moduli',     testo: 'Moduli' },
    { href: '#audiovideo', testo: 'Video e Audio' },
    { href: '#attributi',  testo: 'Attributi globali' },
  ],
  css: [
    { href: '#css-introduzione', testo: 'Introduzione' },
    { href: '#css-selettori',    testo: 'Selettori' },
    { href: '#css-colori',       testo: 'Colori' },
  ],
  js: [
    { href: '#js-introduzione', testo: 'Introduzione' },
    { href: '#js-variabili',    testo: 'Variabili' },
    { href: '#js-espressioni_operatori', testo: 'Espressioni e Operatori' },
  ],
};

function Indice({ vistaAttiva }) {
  const links = indiciPagine[vistaAttiva];

  return (
    <nav id="indice" className="indice">
      <span className="indice-titolo">Indice</span>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => document.getElementById('indice').classList.remove('aperto')}
        >
          {link.testo}
        </a>
      ))}
    </nav>
  );
}

export default Indice;