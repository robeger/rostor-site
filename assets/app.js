// Rostor — rostor.ro. Fără dependențe.
(function () {
  // Anul curent în footer
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());

  // Click pe o „durere” din hero: evidențiază stația din „O zi la magazin”
  document.querySelectorAll('.chips a[href^="#s"]').forEach(function (a) {
    a.addEventListener('click', function () {
      var el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      el.classList.remove('flash');
      setTimeout(function () { el.classList.add('flash'); }, 450);
    });
  });

  // Evenimente de conversie. Elementele marcate cu data-track trimit un eveniment
  // către analytics, dacă e încărcat (Plausible: window.plausible; altfel nimic).
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-track]');
    if (!t) return;
    var name = t.getAttribute('data-track');
    try {
      if (typeof window.plausible === 'function') window.plausible(name);
      if (typeof window.umami === 'object' && window.umami.track) window.umami.track(name);
    } catch (err) { /* analytics nu blochează niciodată pagina */ }
  });
})();
