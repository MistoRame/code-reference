function cambiaPagina(id, tab) {

  // se la pagina è già attiva non fare nulla
  const paginaCorrente = document.querySelector('.pagina:not([style*="display: none"])');
  if (paginaCorrente && paginaCorrente.id === id) return;

  // aggiorna tab attiva
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('attiva-tab');
  });
  tab.classList.add('attiva-tab');

  // aggiunge classe al body per cambiare tema
  if (id === 'pagina-css') {
    document.body.classList.add('tema-css');
  } else {
    document.body.classList.remove('tema-css');
  }
  // fade out pagina corrente
  const pagine = document.querySelectorAll('.pagina');
  pagine.forEach(p => p.style.opacity = '0');

  // aggiorna indice
  document.getElementById('indice-html').style.display = 'none';
  document.getElementById('indice-css').style.display = 'none';

  // dopo la transizione mostra la pagina giusta
  setTimeout(() => {
    pagine.forEach(p => p.style.display = 'none');
    const target = document.getElementById(id);
    target.style.display = 'block';

    // mostra indice corretto
    const indiceId = id === 'pagina-html' ? 'indice-html' : 'indice-css';
    document.getElementById(indiceId).style.display = 'flex';

    // fade in
    setTimeout(() => target.style.opacity = '1', 10);
  }, 200);
}

/* ── FUNZIONE PER AGGIORNARE L'OUTPUT DINAMICAMENTE ──────────────── */
const a = document.getElementById('valoreA');
const b = document.getElementById('valoreB');
const risultato = document.getElementById('risultatoAB');

function aggiorna() {
  risultato.value = Number(a.value) + Number(b.value);
}

a.addEventListener('input', aggiorna);
b.addEventListener('input', aggiorna);
aggiorna(); // calcolo iniziale



/* ── FUNZIONE PER SCRIVERE HTML DINAMICAMENTE DA UNA TEXTAREA ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
const editor = document.getElementById('codiceesempio1');
const preview = document.getElementById('esempio1');

function aggiorna() {
    preview.innerHTML = editor.value;
  }

  editor.addEventListener('input', aggiorna);
  
  aggiorna(); // chiamata iniziale per caricare il contenuto già presente
});
 */