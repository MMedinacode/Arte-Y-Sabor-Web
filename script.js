/* ============================================================
   ARTE Y SABOR — datos y lógica
   ============================================================
   ✅ CARTA CON PRECIOS REALES (agregada 11-09-2026): transcrita del menú
   digital oficial del local en Fudo (https://menu.fu.do/arteysabor/qr-menu,
   el link real que funciona — la variante /mundotattoo de la bio de
   Instagram está muerta, "TIENDA NO ENCONTRADA", ver nota en index.html).
   No trae fotos propias por producto (Fudo no las tenía cargadas), así que
   carta-fotos.js les pone un ícono ilustrado por categoría — no es una foto
   inventada, se nota que es un dibujo.
   El "Menú del día" y "Desayunos" siguen sin precio publicado en ningún
   canal (Instagram bloquea las historias sin sesión) — quedan "Consultar".
   ============================================================ */

const MENU = {
  "dia": {
    "label": "Menú del día",
    "items": [
      {
        "n": "Menú del día",
        "d": "\"El menú del día siempre se me hace agua a la boca, es demasiado sabroso\" — reseña real. Precio sin confirmar, cambia día a día.",
        "img": "menu-dia.jpg"
      },
      {
        "n": "Desayunos",
        "d": "\"Los desayunos también, bien contundentes\" — cita textual de una reseña real. Precio sin confirmar.",
        "img": "mesa.jpg"
      }
    ]
  },
  "cafe": {
    "label": "Café y Té",
    "items": [
      { "n": "Espresso", "p": 1500 },
      { "n": "Americano", "p": 2000 },
      { "n": "Cortado", "p": 2500 },
      { "n": "Capuccino", "p": 2500 },
      { "n": "Capuccino Sabores", "p": 3000 },
      { "n": "Latte", "p": 2500 },
      { "n": "Mocaccino", "p": 3500 },
      { "n": "Chocolate Caliente", "p": 3500 },
      { "n": "Frapuccino", "p": 4500 },
      { "n": "Té Negro", "d": "Manzana, limón o frutos rojos", "p": 1800 },
      { "n": "Té Verde", "p": 1500 },
      { "n": "Té de Jamaica", "p": 2000 }
    ]
  },
  "empanadas": {
    "label": "Empanadas",
    "items": [
      { "n": "Empanada de Queso", "d": "Chilena frita", "p": 2500 },
      { "n": "Empanada Queso Mechada", "d": "Chilena frita", "p": 3000 },
      { "n": "Empanada Queso Pollo", "d": "Chilena frita", "p": 2500 },
      { "n": "Empanada Jamón Queso Tocino", "d": "Venezolana, al horno", "p": 2500 },
      { "n": "Empanada Mechada", "d": "Venezolana, al horno", "p": 2500 },
      { "n": "Empanada Mechada Queso", "d": "Venezolana, al horno", "p": 2500 },
      { "n": "Empanada Pabellón", "d": "Venezolana, al horno", "p": 2500 },
      { "n": "Empanada Pollo", "d": "Venezolana, al horno", "p": 2500 },
      { "n": "Empanada Pollo Queso", "d": "Venezolana, al horno", "p": 2500 }
    ]
  },
  "sandwiches": {
    "label": "Sandwiches",
    "items": [
      { "n": "Brasileño", "d": "Palta, queso", "p": 5900 },
      { "n": "Italiano", "d": "Palta, tomate, mayo", "p": 5900 },
      { "n": "Luco", "d": "Queso", "p": 5900 },
      { "n": "Chacarero", "d": "Palta, queso o mayonesa", "p": 5900 },
      { "n": "Pobre", "d": "Cebolla caramelizada y huevo", "p": 5900 }
    ]
  },
  "venezuela": {
    "label": "Arepas",
    "items": [
      { "n": "La Peluda", "d": "Mechada, queso amarillo", "p": 4900 },
      { "n": "Pabellón (Arepa)", "d": "Mechada, caraota, tajadas, queso llanero", "p": 4900 },
      { "n": "Reina Pepiada", "d": "Pollo, palta", "p": 4900 }
    ]
  },
  "picar": {
    "label": "Para Picar",
    "items": [
      { "n": "Papas Fritas", "p": 3000 },
      { "n": "Salchipapas", "p": 4500 },
      { "n": "Chorrillana", "p": 11900 },
      { "n": "Pichanga Sureña", "p": 16900 },
      { "n": "Colación", "p": 5990 },
      { "n": "Extra Papas Fritas", "p": 1000 }
    ]
  },
  "hamburguesas": {
    "label": "Hamburguesas y Hot Dog",
    "items": [
      { "n": "Tradicional Burger", "d": "Pan de papa, doble carne, cheddar, lechuga, tomate, mayonesa + 300gr papas", "p": 8900 },
      { "n": "Chicana Burger", "d": "Pan brioche, doble carne, cheddar, guacamole, jalapeño, mayonesa + 300gr papas", "p": 9900 },
      { "n": "Neo Tradicional Burger", "d": "Pan rojo, doble carne, cheddar, pepinillos, aros de cebolla, tocino, salsa de la casa, barbecue + 300gr papas", "p": 9900 },
      { "n": "Blackout Burger", "d": "Pan negro, doble carne, cheddar, tocino, lechuga, pepinillos, salsa de la casa, cebolla caramelizada y crispy + 300gr papas", "p": 10900 },
      { "n": "Paint Burger", "d": "Pan negro, doble carne, tocino, cebolla morada, lechuga, bañado en queso cheddar + 300gr papas", "p": 10900 },
      { "n": "Perro Caliente Venezolano", "p": 3500 },
      { "n": "Italiano (Hot Dog)", "p": 3000 },
      { "n": "Chilezolano", "d": "Palta, tomate, papas hilo, queso gouda, tocino", "p": 3900 }
    ]
  },
  "bebidas": {
    "label": "Bebidas y Jugos",
    "items": [
      { "n": "Bebida Express", "p": 1500 },
      { "n": "Bebida Personal 350", "p": 2000 },
      { "n": "Frescolita", "p": 2500 },
      { "n": "Maltín", "p": 2500 },
      { "n": "Papelón", "p": 3000 },
      { "n": "Limonada Tradicional", "p": 3000 },
      { "n": "Limonada Especial", "d": "Menta, jengibre", "p": 3500 },
      { "n": "Jugo Natural (Naranja, Piña, Frutilla, Mango...)", "d": "Sabores a elección", "p": 3000 },
      { "n": "Jugo Mixto", "d": "Con leche", "p": 3500 }
    ]
  },
  "bar": {
    "label": "Tragos y Vinos",
    "items": [
      { "n": "Piscola", "p": 4000 },
      { "n": "Roncola", "p": 4000 },
      { "n": "Wiscola", "p": 5000 },
      { "n": "Mojito Tradicional", "p": 5000 },
      { "n": "Mojito Sabores", "p": 6000 },
      { "n": "Daiquiri Frozen", "p": 5000 },
      { "n": "Pisco Sour Catedral", "p": 6000 },
      { "n": "Tequila Margarita", "p": 4000 },
      { "n": "Expreso Martiny", "p": 6000 },
      { "n": "Ruso Blanco", "p": 4500 },
      { "n": "Ruso Negro", "p": 4000 },
      { "n": "Michelada", "p": 1000 },
      { "n": "Schop Artesanal Amber", "p": 4500 },
      { "n": "Casillero del Diablo Sauvignon Blanc", "d": "Blancos, botella", "p": 15900 },
      { "n": "Misiones de Rengo Chardonnay", "d": "Blancos, botella", "p": 14900 },
      { "n": "Casillero del Diablo Shiraz Rosé", "d": "Rosé, botella", "p": 13900 },
      { "n": "Undurraga Brut", "d": "Espumante, botella", "p": 15900 },
      { "n": "Marqués de Casa Concha Cabernet Sauvignon", "d": "Selección reserva, botella", "p": 26900 },
      { "n": "Copa de vino", "d": "Blanco o tinto, casillero", "p": 4500 }
    ]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl   = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');

Object.keys(MENU).forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.type = 'button';
  tab.textContent = MENU[key].label;
  tab.dataset.key = key;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  tab.addEventListener('click', () => showTab(key));
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + key;

  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  MENU[key].items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item reveal';

    if (item.img) {
      // La clase cf-thumb la necesita el grid de .menu-item para ubicarla en
      // su columna; sin ella la miniatura caia fuera de las areas y abria
      // una fila extra.
      const cont = document.createElement('div');
      cont.className = 'cf-thumb';
      const im = document.createElement('img');
      im.src = 'fotos/' + item.img; im.alt = item.n; im.loading = 'lazy';
      im.style.cssText = 'width:58px;height:58px;object-fit:cover;border-radius:12px;';
      cont.appendChild(im);
      row.appendChild(cont);
    }

    const texto = document.createElement('div');
    texto.className = 'menu-item-text';
    const nombre = document.createElement('span');
    nombre.className = 'name';
    nombre.textContent = item.n;
    texto.appendChild(nombre);

    if (item.d) {
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = item.d;
      texto.appendChild(desc);
    }

    // Sin precio publicado: "Consultar", nunca un monto inventado.
    const precio = document.createElement('div');
    precio.className = 'price';
    precio.textContent = item.p ? money(item.p) : 'Consultar';

    row.appendChild(texto);
    row.appendChild(precio);
    grid.appendChild(row);
  });

  panel.appendChild(grid);
  panelsEl.appendChild(panel);
});

function showTab(key) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    const activo = t.dataset.key === key;
    t.classList.toggle('active', activo);
    t.setAttribute('aria-selected', activo ? 'true' : 'false');
  });
  document.querySelectorAll('.menu-panel').forEach(p => {
    p.classList.toggle('active', p.id === 'panel-' + key);
  });
  initScrollReveal();
}

/* ---------- NAVEGACIÓN POR PESTAÑAS ---------- */
const navLinks = document.getElementById('navLinks');

function goToTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.dataset.tabPanel === tabId);
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.tab === tabId);
  });
  navLinks.classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initScrollReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); goToTab(el.dataset.tab); });
});

document.getElementById('navToggle').addEventListener('click', function () {
  const abierto = navLinks.classList.toggle('open');
  this.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

/* ---------- INDICADOR ABIERTO / CERRADO ----------
   ⚠️ Google confirma que CIERRA a las 21:00. La hora de apertura NO está publicada: se asume 09:00 como estimación y así se declara en Visítanos. */
function horarioDeHoy() {
  return [9 * 60, 21 * 60];
}

function actualizarEstado(dotId, textId) {
  const dot  = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if (!dot || !text) return;
  const ahora   = new Date();
  const minutos = ahora.getHours() * 60 + ahora.getMinutes();
  const h       = horarioDeHoy();
  if (!h) {
    // Sin horario publicado: se esconde la pildora entera en vez de
    // afirmar que esta cerrado, cosa que no nos consta.
    const caja = text.closest('.pill, .status-line') || text.parentElement;
    if (caja) caja.hidden = true;
    return;
  }
  const abierto = minutos >= h[0] && minutos < h[1];
  text.textContent = abierto ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !abierto);
}

actualizarEstado('statusDot', 'statusText');
actualizarEstado('statusDot2', 'statusText2');
actualizarEstado('statusDot3', 'statusText3');

/* ---------- SCROLL REVEAL (con red de seguridad) ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.transitionDelay = (Math.min(i % 6, 6) * 55) + 'ms';
    io.observe(el);
  });

  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1200);
}
initScrollReveal();

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 320);
});

// Marca en la lista de horario el día de hoy. La lista es estática en el
// HTML a propósito: si el JS falla, el horario igual se lee.
function marcarDiaDeHoy() {
  const hoy = new Date().getDay();
  document.querySelectorAll('.horario-semana li[data-dia]').forEach(function (li) {
    li.classList.toggle('hs-hoy', Number(li.dataset.dia) === hoy);
  });
}
marcarDiaDeHoy();
