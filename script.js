function cambiaPagina(id, tab) {
  // aggiorna tab attiva
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.remove('attiva-tab');
  });
  tab.classList.add('attiva-tab');

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
  }, 500);
}