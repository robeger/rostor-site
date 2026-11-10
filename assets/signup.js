// Rostor — de unde pornește crearea contului.
// În producție, cât timp PORTAL e gol, butoanele „Creează cont” duc la secțiunea „Cum începi”,
// unde se cere o invitație. Când portalul e public, se completează adresa aici (un singur loc).
// Pe calculatorul de dezvoltare, butoanele duc la portalul local (services/portal, portul 8780).
(function () {
  var PORTAL = ''; // ex. 'https://app.rostor.ro'
  var local = ['localhost', '127.0.0.1'].indexOf(location.hostname) !== -1;
  if (!PORTAL && local) PORTAL = 'http://localhost:8780';

  if (PORTAL) {
    document.querySelectorAll('[data-signup]').forEach(function (a) {
      a.href = PORTAL + '/cont-nou';
      a.removeAttribute('target');
    });
    document.querySelectorAll('[data-invite-only]').forEach(function (el) { el.hidden = true; });
  }
  document.querySelectorAll('[data-login]').forEach(function (a) {
    if (PORTAL) a.href = PORTAL + '/intra'; else a.hidden = true;
  });
})();
