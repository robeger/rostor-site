// Site-ul rostor.ro: demonstrația animată, meniul pe telefon și fereastra „Setări cookies”.
// Generat din conceptul Rostor (examples-data.js, resources.js, resource-actions.js). Fără cookie-uri, fără stocare în browser.
(function () {
'use strict';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = name => '<svg class="icon" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
const demoScenarios = [
  {
    id:'diagrama', label:'Cu diagrama producătorului', hint:'Alegi piesa din schema originală',
    steps:['Scrii VIN-ul și piesa', 'Rostor identifică mașina', 'Alegi codul din diagramă', 'Vezi prețurile la furnizori', 'Bifezi și primești oferta'],
    blocks:[
      { t:'user', step:0, text:'Plăcuțe frână față pentru VIN WVWZZZ1KZAW000001' },
      { t:'tool', step:1, wait:900, text:'Rostor · decodare VIN' },
      { t:'ai', step:1, wait:900, text:'Mașina e un VW Golf VI 1.6 TDI, 2010. Îți deschid diagrama frânei față ca să alegi codul exact.' },
      { t:'diagram', step:2, wait:1100, car:'VW Golf VI 1.6 TDI · 2010', parts:[['1', 'Disc frână', '1K0615301AA'], ['2', 'Plăcuțe frână', '1K0698151A'], ['3', 'Senzor uzură', '1K0907637C'], ['4', 'Etrier', '1K0615123E'], ['5', 'Suport etrier', '1K0615125D']], pick:1 },
      { t:'tool', step:3, wait:3200, text:'Rostor · caută 1K0698151A și echivalentele la 4 furnizori' },
      { t:'panel', step:3, wait:900, car:'VW Golf VI 1.6 TDI · 2010', part:'Plăcuțe frână față', total:133, rows:[
        ['TRW', 'GDB1550', 'Autokarma', 'În stoc', 189], ['ATE', '13.0460-2786.2', 'ePiesa', 'În stoc', 214], ['Textar', '2356001', 'Bárdi Auto', 'Mâine', 228], ['VW original', '1K0698151A', 'Unix Auto', '2 zile', 342, true]], picks:[0, 3] },
      { t:'offer', step:4, wait:2600, client:'Popescu', no:'OF-2026-0141', lines:[['TRW', 'GDB1550', 1, 189], ['VW original', '1K0698151A', 1, 342]], variants:true }
    ]
  },
  {
    id:'direct', label:'Direct la furnizori', hint:'Ai deja codul piesei',
    steps:['Scrii codul piesei', 'Rostor caută la toți furnizorii', 'Bifezi ce vrei să oferi', 'Primești oferta'],
    blocks:[
      { t:'user', step:0, text:'Discuri frână față 1K0615301AA. Vreau prețurile de la toți furnizorii.' },
      { t:'tool', step:1, wait:900, text:'Rostor · caută codul și echivalentele la 4 furnizori' },
      { t:'ai', step:1, wait:900, text:'Am găsit 48 de produse: originalul și echivalentele lui. Le vezi în panou, ordonate după preț.' },
      { t:'panel', step:2, wait:900, part:'Disc frână față · 1K0615301AA', total:48, rows:[
        ['Brembo', '09.9145.11', 'ePiesa', 'În stoc', 156], ['ATE', '24.0125-0124.1', 'Autokarma', 'În stoc', 171], ['Zimmermann', '600.3213.20', 'Bárdi Auto', 'Mâine', 183], ['VW original', '1K0615301AA', 'Unix Auto', '3 zile', 298, true]], picks:[0] },
      { t:'offer', step:3, wait:2200, client:'Service Alfa', no:'OF-2026-0142', lines:[['Brembo', '09.9145.11', 2, 156]] }
    ]
  },
  {
    id:'client', label:'Din ce spune clientul', hint:'Marcă, model și an, fără VIN',
    steps:['Scrii ce ți-a spus clientul', 'Rostor găsește motorul', 'Vezi prețurile pe piese', 'Primești oferta'],
    blocks:[
      { t:'user', step:0, text:'Client cu Dacia Logan 1.5 dCi din 2017. Vrea filtru de ulei și filtru de aer.' },
      { t:'tool', step:1, wait:900, text:'Rostor · identifică vehiculul după marcă, model și an' },
      { t:'ai', step:1, wait:900, text:'Logan II 1.5 dCi din 2017 are motorul K9K, 90 CP. Dacă ai talonul sau VIN-ul, verific și varianta exactă.' },
      { t:'panel', step:2, wait:1000, car:'Dacia Logan II 1.5 dCi · 2017', part:'Filtru ulei + filtru aer', total:61, rows:[
        ['Mann', 'W 75/3', 'ePiesa', 'În stoc', 38], ['Bosch', 'F 026 407 209', 'Autokarma', 'În stoc', 41], ['Mann', 'C 2433/2', 'ePiesa', 'În stoc', 52], ['Filtron', 'AP 186/1', 'Unix Auto', 'Mâine', 47]], picks:[0, 2] },
      { t:'offer', step:3, wait:2600, client:'Ionescu', no:'OF-2026-0143', lines:[['Mann', 'W 75/3', 1, 38], ['Mann', 'C 2433/2', 1, 52]] }
    ]
  },
  {
    id:'talon', label:'Din poza talonului', hint:'Faci o poză și o trimiți',
    steps:['Trimiți poza talonului', 'Rostor citește VIN-ul', 'Vezi prețurile la furnizori', 'Primești oferta'],
    blocks:[
      { t:'user', step:0, talon:true, text:'Kit distribuție pentru mașina asta.' },
      { t:'tool', step:1, wait:1000, text:'Rostor · citește talonul și decodează VIN-ul' },
      { t:'ai', step:1, wait:900, text:'Hyundai i30 1.4 (G4LC), 2015. Motorul are lanț, nu curea: kitul înseamnă lanț, întinzător, braț și patine.' },
      { t:'panel', step:2, wait:1000, car:'Hyundai i30 1.4 · 2015', part:'Kit lanț distribuție', total:22, rows:[
        ['Febi', '107289', 'Autokarma', 'În stoc', 612], ['SWAG', '33 10 3145', 'ePiesa', 'Mâine', 648], ['INA', '559 0123 10', 'Bárdi Auto', '2 zile', 705], ['Hyundai original', '24321-03HA0', 'Unix Auto', '4 zile', 1180, true]], picks:[0] },
      { t:'offer', step:3, wait:2200, client:'Marin', no:'OF-2026-0144', lines:[['Febi', '107289', 1, 612]] }
    ]
  },
  {
    id:'lista', label:'Răspuns ca listă', hint:'Direct în conversație, fără panou',
    steps:['Ceri o listă scurtă', 'Rostor caută la furnizori', 'Alegi din listă', 'Primești textul ofertei'],
    blocks:[
      { t:'user', step:0, text:'Ulei motor 5W30, 4 litri. Dă-mi o listă scurtă cu ce e în stoc.' },
      { t:'tool', step:1, wait:900, text:'Rostor · caută la 4 furnizori' },
      { t:'list', step:1, wait:900, intro:'Patru variante în stoc, ordonate după preț:', rows:[['Elf Evolution 900 SXR 5W30 · 4 l', 'ePiesa', 168], ['Mobil Super 3000 XE 5W30 · 4 l', 'Autokarma', 189], ['Castrol Edge 5W30 LL · 4 l', 'ePiesa', 214], ['Motul 8100 X-clean 5W30 · 4 l', 'Bárdi Auto', 236]], note:'Nu știu norma cerută de motor (ACEA sau aprobarea producătorului). Verific-o înainte să alegi, sau dă-mi VIN-ul.' },
      { t:'user', step:2, wait:2400, text:'Fă oferta cu Castrol, 2 bucăți, pentru Ionescu.' },
      { t:'text', step:3, wait:1100, text:'Bună ziua, domnule Ionescu! Vă trimit oferta OF-2026-0145:\n2 × Castrol Edge 5W30 LL, 4 l — 428 lei, în stoc.\nValabilă 3 zile. Vă mulțumim!' }
    ]
  }
];

const lei = n => n.toLocaleString('ro-RO') + ' lei';
function talonArt() {
  return `<svg class="ld-talon" viewBox="0 0 220 120" role="img" aria-label="Poză cu talonul mașinii (fictiv)"><rect x="2" y="2" width="216" height="116" rx="8" fill="#dfe8d8" stroke="#9fb394"/>
    <text x="12" y="20" font-size="9" font-weight="700" fill="#3c5234">CERTIFICAT DE ÎNMATRICULARE</text>${[['A', 'B 123 ABC'], ['D.1', 'HYUNDAI'], ['D.3', 'I30'], ['E', 'TMAD381UAFJ000001'], ['P.1', '1396']].map(([k, v], i) =>
    `<text x="12" y="${40 + i * 16}" font-size="8" fill="#5b6d52">${k}</text><text x="40" y="${40 + i * 16}" font-size="9" font-family="monospace" fill="#1d2a18">${v}</text>`).join('')}
    <rect x="160" y="30" width="46" height="56" rx="4" fill="#c9d6c0"/></svg>`;
}
function diagramArt(pick) {
  const P = (cx, cy, rx, ry, n, r1, r2, a0 = -90) => Array.from({ length:n }, (_, i) => { const a = (a0 + i * 360 / n) * Math.PI / 180; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  const hole = ([x, y], rx, ry) => `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${rx}" ry="${ry}"/>`;
  const call = (n, px, py, tx, ty) => `<g class="ld-call${n === pick + 1 ? ' pick' : ''}"><circle class="ld-dot" cx="${px}" cy="${py}" r="1.6"/><line x1="${px}" y1="${py}" x2="${tx}" y2="${ty}"/><circle cx="${tx}" cy="${ty}" r="8"/><text x="${tx}" y="${ty + 3.3}">${n}</text></g>`;
  // Fante de ventilație pe marginea discului, între fața din față și cea din spate.
  const vents = P(0, 112, 1, 84, 14, 0, 0, -78).filter(([, y]) => y > 34 && y < 190).map(([, y]) => {
    const t = Math.sqrt(Math.max(0, 1 - ((y - 112) / 84) ** 2));
    return `<line x1="${(100 + 26 * t).toFixed(1)}" y1="${y.toFixed(1)}" x2="${(112 + 26 * t).toFixed(1)}" y2="${y.toFixed(1)}"/>`;
  }).join('');
  const studs = P(46, 112, 8, 28, 5).map(([x, y]) => `<path d="M${x.toFixed(1)} ${(y - 1.6).toFixed(1)}h13a1.6 1.6 0 0 1 0 3.2h-13"/>`).join('');
  const pad = (x, flip) => { const f = flip ? -1 : 1;
    return `<polygon class="ld-back" points="${x},70 ${x + 9},63 ${x + 9},159 ${x},166"/><polygon class="ld-pad" points="${x - 7 * f},73 ${x},70 ${x},166 ${x - 7 * f},169"/>`; };
  return `<svg class="ld-dg-art" viewBox="0 0 340 222" aria-hidden="true">
    <defs><pattern id="ld-hatch" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="3"/></pattern></defs>
    <line class="ld-axis" x1="8" y1="112" x2="334" y2="112"/>
    <g class="ld-line">
      <ellipse cx="34" cy="112" rx="14" ry="46"/><path d="M34 66h12M34 158h12"/><ellipse cx="46" cy="112" rx="14" ry="46"/><ellipse cx="46" cy="112" rx="5" ry="15"/>${studs}
      <ellipse cx="112" cy="112" rx="26" ry="84"/><path d="M100 28h12M100 196h12"/>${vents}
      <ellipse cx="100" cy="112" rx="26" ry="84"/><ellipse class="ld-thin" cx="100" cy="112" rx="18" ry="58"/>
      <ellipse cx="96" cy="112" rx="11" ry="34"/><ellipse cx="96" cy="112" rx="4.5" ry="13"/>${P(96, 112, 7.5, 23, 5).map(p => hole(p, 1.4, 3.6)).join('')}
      ${pad(156, false)}${pad(186, true)}
      <path class="ld-wire" d="M194 150c10 10 4 26 18 34s22 2 28 12"/><rect x="236" y="194" width="12" height="7" rx="1.5" transform="rotate(30 242 197)"/>
      <path d="M222 52l12-8v22l-6 4v84l6-4v22l-12 8z"/><path class="ld-thin" d="M228 70v84"/>
      <path d="M252 62q0-12 14-14l30-4q10 0 10 12v112q0 12-10 12l-30-4q-14-2-14-14z"/><path class="ld-thin" d="M264 58v108M296 52v120"/>
      <ellipse cx="250" cy="112" rx="8" ry="27"/><ellipse cx="248" cy="112" rx="5.5" ry="21"/><rect x="284" y="36" width="7" height="9" rx="1.5"/>
      <path d="M312 70h16v8h-16zM328 68l5 2v8l-5 2zM312 146h16v8h-16zM328 144l5 2v8l-5 2z"/>
    </g>
    ${call(1, 112, 40, 86, 12)}${call(2, 160, 72, 160, 26)}${call(3, 218, 176, 270, 210)}${call(4, 300, 60, 312, 26)}${call(5, 228, 48, 214, 14)}</svg>`;
}
function demoBlock(b) {
  if (b.t === 'user') return `<div class="ld-msg ld-user">${b.talon ? talonArt() : ''}<p>${esc(b.text)}</p></div>`;
  if (b.t === 'tool') return `<div class="ld-tool"><span class="ld-spin" aria-hidden="true"></span><span>${esc(b.text)}</span></div>`;
  if (b.t === 'ai') return `<div class="ld-msg ld-ai"><p>${esc(b.text)}</p></div>`;
  if (b.t === 'diagram') return `<div class="ld-card ld-diagram"><header><b>Diagrama producătorului</b><small>${esc(b.car)} · Frâna față</small></header>
    <div class="ld-dg-body">${diagramArt(b.pick)}<div class="ld-dg-list"><ol>${b.parts.map(([n, name, code], i) => `<li class="${i === b.pick ? 'pick' : ''}"><span>${n}</span><div>${esc(name)}<code>${code}</code></div></li>`).join('')}</ol><svg class="ld-cursor" style="--row:${b.pick}" viewBox="0 0 16 20" aria-hidden="true"><path d="M1 1l13 10-6 1 3 6-2.5 1-3-6-4.5 4z"/></svg></div></div></div>`;
  if (b.t === 'panel') return `<div class="ld-card ld-panel"><header><b class="ld-logo">rostor.</b><span>Alegerea pieselor</span><small>${b.total} produse · 4 furnizori</small></header>
    <p class="ld-meta">${b.car ? `<span>Mașina <b>${esc(b.car)}</b></span>` : ''}<span>Piesa <b>${esc(b.part)}</b></span></p>
    <div class="ld-table"><div class="ld-tr ld-th"><span></span><span>Piesă</span><span>Furnizor</span><span>Disponibilitate</span><span>Preț</span></div>
    ${b.rows.map(([brand, code, sup, avail, price, orig], i) => { const k = b.picks.indexOf(i);
      return `<div class="ld-tr${k >= 0 ? ' pick' : ''}" style="--i:${i};--k:${k}"><span class="ld-check" aria-hidden="true"></span><span class="ld-part-name"><b>${brand}</b> ${code}${orig ? ' <em>original</em>' : ''}</span><span>${sup}</span><span class="${avail === 'În stoc' ? 'ok' : ''}">${avail}</span><b>${lei(price)}</b></div>`; }).join('')}</div>
    <footer><span>${b.picks.length} ${b.picks.length === 1 ? 'selectată' : 'selectate'}</span><span class="ld-btn" style="--k:${b.picks.length}">Pregătește oferta</span></footer></div>`;
  if (b.t === 'offer') { const sum = b.lines.reduce((s, [, , q, p]) => s + q * p, 0);
    return `<div class="ld-card ld-offer"><header><b>Oferta ${b.no}</b><small>pentru ${esc(b.client)} · valabilă 3 zile</small></header>
    <ul>${b.lines.map(([brand, code, q, p], i) => `<li><span>${b.variants ? `<em>Varianta ${'AB'[i]}</em>` : ''}${brand} ${code}</span><span>${q} buc.</span><b>${lei(q * p)}</b></li>`).join('')}</ul>
    <p class="ld-total">${b.variants ? '<span>Clientul alege una dintre variante</span>' : `<span>Total</span><b>${lei(sum)}</b>`}</p>
    <div class="ld-actions"><span>PDF</span><span>Excel</span><span>Copiază</span><span class="ld-sb">Proformă în SmartBill</span></div></div>`; }
  if (b.t === 'list') return `<div class="ld-msg ld-ai"><p>${esc(b.intro)}</p><ol class="ld-list">${b.rows.map(([name, sup, price], i) => `<li style="--i:${i}"><span>${esc(name)}<small>${sup} · în stoc</small></span><b>${lei(price)}</b></li>`).join('')}</ol><p class="ld-note">${esc(b.note)}</p></div>`;
  if (b.t === 'text') return `<div class="ld-msg ld-ai"><p>Textul ofertei, gata de trimis clientului:</p><div class="ld-quote">${esc(b.text).replace(/\n/g, '<br>')}</div><div class="ld-actions"><span>Copiază</span><span>PDF</span><span>Excel</span></div></div>`;
  return '';
}
function demoSteps(s, current) {
  return s.steps.map((label, i) => `<li${i === current ? ' aria-current="step"' : ''}${i < current ? ' class="done"' : ''}>${label}</li>`).join('');
}

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const demo = { el:null, i:0, b:0, clock:0, plan:[], paused:false, visible:false, end:0 };
const typeTime = text => text.length * 24 + 450;
function demoPlan(s) {
  let t = 500;
  return s.blocks.map(b => { t += b.wait || 0; const at = t; if (b.t === 'user') t += typeTime(b.text); return at; });
}
function demoSet(i) {
  const s = demoScenarios[i], root = demo.el.closest('.live-demo');
  Object.assign(demo, { i, b:0, clock:0, plan:demoPlan(s), end:0 });
  demo.el.innerHTML = '';
  root.querySelectorAll('[data-demo-pick]').forEach((btn, k) => { btn.setAttribute('aria-pressed', String(k === i)); btn.style.setProperty('--p', 0); });
  root.querySelector('.ld-steps').innerHTML = demoSteps(s, 0);
  root.querySelector('#ld-typing').textContent = 'Scrie un mesaj…';
  root.querySelector('#ld-typing').className = 'ld-placeholder';
  if (reduceMotion) { demo.el.innerHTML = s.blocks.map(demoBlock).join(''); demo.el.classList.add('ld-static'); demo.b = s.blocks.length; root.querySelector('.ld-steps').innerHTML = demoSteps(s, s.steps.length - 1); }
}
function demoAppend(block) {
  demo.el.insertAdjacentHTML('beforeend', demoBlock(block));
  const last = demo.el.lastElementChild, top = last.offsetTop - 12;
  // Derulează doar fereastra de chat, nu pagina: blocul nou ajunge sus, ca să se vadă animația lui.
  demo.el.scrollTo({ top:Math.max(0, Math.min(top, demo.el.scrollHeight)), behavior:'smooth' });
  demo.el.closest('.live-demo').querySelector('.ld-steps').innerHTML = demoSteps(demoScenarios[demo.i], block.step);
}
function demoTick(ms) {
  const chat = document.getElementById('ld-chat');
  if (!chat) { demo.el = null; return; }
  if (chat !== demo.el) { demo.el = chat; demoSet(0); demoWatch(chat); }
  if (reduceMotion || demo.paused || !demo.visible || document.hidden) return;
  demo.clock += ms;
  const s = demoScenarios[demo.i], typing = chat.closest('.live-demo').querySelector('#ld-typing');
  while (demo.b < s.blocks.length && demo.clock >= demo.plan[demo.b]) {
    const block = s.blocks[demo.b];
    if (block.t === 'user') {
      const spent = demo.clock - demo.plan[demo.b];
      if (spent < typeTime(block.text)) {
        typing.className = '';
        typing.textContent = (block.talon && spent < 600 ? '📎 talon.jpg  ' : '') + block.text.slice(0, Math.floor(spent / 24));
        break;
      }
      typing.textContent = 'Scrie un mesaj…'; typing.className = 'ld-placeholder';
    }
    demoAppend(block); demo.b++;
  }
  const total = demo.plan[demo.plan.length - 1] + 6500;
  chat.closest('.live-demo').querySelector('[aria-pressed="true"]').style.setProperty('--p', Math.min(1, demo.clock / total));
  if (demo.clock >= total) demoSet((demo.i + 1) % demoScenarios.length);
}
// Pornește doar când demonstrația intră în ecran; se oprește singură când iese.
function demoWatch(chat) {
  demo.visible = false;
  if (!('IntersectionObserver' in window)) { demo.visible = true; return; }
  new IntersectionObserver(entries => { for (const e of entries) demo.visible = e.isIntersecting; }, { threshold:.25 }).observe(chat.closest('.ld-window'));
}
setInterval(() => demoTick(50), 50);
document.addEventListener('click', event => {
  const pick = event.target.closest('[data-demo-pick]'), toggle = event.target.closest('[data-demo-toggle]');
  if (pick && demo.el) { demoSet(Number(pick.dataset.demoPick)); demo.paused = false; demoToggleLabel(); }
  else if (toggle && demo.el) { demo.paused = !demo.paused; demoToggleLabel(); }
});
function demoToggleLabel() {
  const btn = document.querySelector('[data-demo-toggle]');
  if (!btn) return;
  btn.innerHTML = demo.paused ? icon('play') + ' Pornește' : icon('pause') + ' Pauză';
  btn.closest('.live-demo').classList.toggle('ld-paused', demo.paused);
}


// Formularul de cereri: butoanele „Vreau în pilot” și „Cere integrarea” aleg tipul; câmpul pentru catalog apare doar
// la integrare; trebuie lăsat un telefon sau un email. Fără JavaScript, formularul merge la fel (serverul verifică).
const requestForm = document.querySelector('.request-form');
function requestKind(kind) {
  if (!requestForm) return;
  const radio = requestForm.querySelector(`input[name="tip"][value="${kind}"]`);
  if (radio) radio.checked = true;
  const source = requestForm.querySelector('.request-source');
  source.hidden = kind !== 'integrare';
  source.querySelector('input').required = kind === 'integrare';
}
if (requestForm) {
  requestForm.addEventListener('change', event => { if (event.target.name === 'tip') requestKind(event.target.value); });
  requestForm.addEventListener('submit', event => {
    const has = name => requestForm.elements[name].value.trim() !== '';
    const error = requestForm.querySelector('.request-error');
    error.hidden = has('telefon') || has('email');
    if (!error.hidden) { event.preventDefault(); requestForm.elements.telefon.focus(); }
  });
  const wanted = new URLSearchParams(location.search).get('tip');
  requestKind(['pilot', 'integrare', 'intrebare'].includes(wanted) ? wanted : requestForm.querySelector('input[name="tip"]:checked').value);
}
document.addEventListener('click', event => {
  const tip = event.target.closest('[data-tip]');
  if (tip && requestForm) requestKind(tip.dataset.tip);
});
document.addEventListener('click', event => {
  const control = event.target.closest('[data-action]');
  const nav = document.querySelector('.header .nav'), toggle = document.querySelector('.menu-toggle');
  if (!control) {
    if (event.target.closest('.header .nav a') && nav) { nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); }
    return;
  }
  if (control.dataset.action === 'cookie-settings') document.getElementById('cookie-dialog').showModal();
  if (control.dataset.action === 'menu' && nav) control.setAttribute('aria-expanded', String(nav.classList.toggle('open')));
});
})();
// Pagina /multumim: după formular, serverul trimite aici ?tip=… (reușit) sau ?eroare=… (cererea nu s-a salvat).
(function () {
  const box = document.querySelector('[data-thanks]');
  if (!box) return;
  const q = new URLSearchParams(location.search), error = q.get('eroare');
  const reasons = {
    contact: 'Lasă-ne un telefon sau un email, ca să te putem contacta.',
    nume: 'Completează numele.',
    email: 'Adresa de email nu pare corectă.',
    telefon: 'Numărul de telefon nu pare corect.',
    sursa: 'Spune-ne la ce catalog sau furnizor ai cont.',
    lung: 'Unul dintre câmpuri e prea lung.',
    'prea-multe': 'Am primit deja mai multe cereri de la tine. Încearcă din nou peste o oră sau scrie-ne la robert@rostor.ro.'
  };
  if (error) {
    box.querySelector('[data-title]').textContent = 'Cererea nu a plecat.';
    box.querySelector('[data-text]').textContent = reasons[error] || 'Ceva nu a mers. Încearcă din nou sau scrie-ne la robert@rostor.ro.';
    const back = box.querySelector('[data-back]');
    back.textContent = 'Înapoi la formular';
    back.href = '/contact';
  } else if (q.get('tip') === 'integrare') {
    box.querySelector('[data-text]').textContent = 'Am primit cererea de integrare. Te sunăm ca să vedem împreună ce cont ai și cum îl conectăm.';
  }
})();
