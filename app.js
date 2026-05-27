(function() {
  const DATA = window.NYC_GOV_DATA || {};
  const panel = document.getElementById('infoPanel');

  function siloClass(silo) {
    if (silo === 'doing' || silo === 'reviewing' || silo === 'inter' || silo === 'budget' || silo === 'legal') {
      return silo;
    }
    return 'legal';
  }

  function siloLabel(silo) {
    return ({
      doing: 'Doing Silo',
      reviewing: 'Reviewing Silo',
      inter: 'Intergovernmental Silo',
      budget: 'Budget',
      legal: 'Foundational law'
    })[silo] || 'Info';
  }

  function renderInfo(id) {
    const d = DATA[id];
    if (!d) {
      panel.innerHTML = `<div class="info-empty">
        <h2>No data yet</h2>
        <p>The node <code>${id}</code> doesn't have a data entry yet. Add one to <code>data.js</code>.</p>
      </div>`;
      return;
    }

    const facts = (d.keyFacts && d.keyFacts.length)
      ? `<div class="key-facts">
           <h3>Key facts</h3>
           <ul>${d.keyFacts.map(f => `<li>${f}</li>`).join('')}</ul>
         </div>`
      : '';

    const source = d.source
      ? `<div class="sources">Source: <a href="${d.source.url}" target="_blank" rel="noopener">${d.source.label}</a></div>`
      : '';

    panel.innerHTML = `
      <div class="info-card">
        <span class="silo-tag ${siloClass(d.silo)}">${siloLabel(d.silo)}</span>
        <h2>${d.name}</h2>
        ${d.subhead ? `<p class="subhead">${d.subhead}</p>` : ''}
        <p class="description">${d.description || ''}</p>
        ${facts}
        ${source}
      </div>`;

    // analytics
    if (typeof gtag === 'function') {
      gtag('event', 'node_click', { event_category: 'gov_map', event_label: id });
    }
  }

  function setActive(id) {
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    document.querySelectorAll(`[data-id="${id}"]`).forEach(el => el.classList.add('active'));
  }

  function onClick(e) {
    const el = e.target.closest('[data-id]');
    if (!el) return;
    e.stopPropagation();
    const id = el.getAttribute('data-id');
    setActive(id);
    renderInfo(id);
  }

  document.addEventListener('click', onClick);

  // Keyboard support: tab through nodes, Enter to open
  document.querySelectorAll('[data-id]').forEach(el => {
    if (el.tabIndex < 0) el.tabIndex = 0;
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = el.getAttribute('data-id');
        setActive(id);
        renderInfo(id);
      }
    });
  });

  // Console helper
  window.openNode = (id) => { setActive(id); renderInfo(id); };

  // ============ ULURP OVERLAY ============
  // ULURP step → diagram node IDs that should be highlighted at that step.
  // Order matters: the connecting line is drawn between sequential steps.
  const ULURP_STEPS = [
    { id: 'ulurp-cert',     nodes: ['dcp'],                                                  label: 'cert.' },
    { id: 'ulurp-cb',       nodes: ['cb-brooklyn','cb-queens','cb-manhattan','cb-bronx','cb-staten-island','cb-total'], label: '60d' },
    { id: 'ulurp-bp',       nodes: ['bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'], label: '30d' },
    { id: 'ulurp-cpc',      nodes: ['dcp'],                                                  label: '60d' },
    { id: 'ulurp-council',  nodes: ['city-council'],                                         label: '50d' },
    { id: 'ulurp-mayor',    nodes: ['mayor'],                                                label: '5d' },
    // AHAB branch (Nov 2025) — Mayor + Speaker (= city-council) + local BP, 2-of-3 reverses Council on AH apps
    { id: 'ulurp-ahab',     nodes: ['mayor','city-council','bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'], label: 'AHAB', branch: true },
    { id: 'ulurp-override', nodes: ['city-council'],                                         label: '10d' }
  ];

  // Aggregated set of node IDs involved in ULURP (used for dim/highlight)
  const ULURP_NODES = new Set(ULURP_STEPS.flatMap(s => s.nodes));

  const toggleBtn = document.getElementById('toggleUlurp');
  const banner = document.getElementById('ulurpBanner');
  const svg = document.getElementById('ulurpConnections');
  let ulurpOn = false;

  function applyUlurpHighlight() {
    document.querySelectorAll('.ulurp-active').forEach(el => el.classList.remove('ulurp-active'));
    if (!ulurpOn) return;
    ULURP_NODES.forEach(id => {
      document.querySelectorAll(`[data-id="${id}"]`).forEach(el => el.classList.add('ulurp-active'));
    });
  }

  function nodeCenter(id, containerRect) {
    // Find the first visible element with this data-id; use its bounding center
    const el = document.querySelector(`[data-id="${id}"]`);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - containerRect.left,
      y: r.top  + r.height / 2 - containerRect.top,
      el
    };
  }

  function representativeNodeForStep(step, containerRect) {
    // Use the first node of the step that we can find
    for (const id of step.nodes) {
      const c = nodeCenter(id, containerRect);
      if (c) return c;
    }
    return null;
  }

  function drawCurve(x1, y1, x2, y2) {
    // Simple cubic curve with vertical-ish control points
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cx1 = x1 + dx * 0.25;
    const cy1 = y1 + dy * 0.6;
    const cx2 = x1 + dx * 0.75;
    const cy2 = y1 + dy * 0.4;
    return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
  }

  function drawUlurpConnections() {
    if (!ulurpOn) { svg.innerHTML = ''; return; }
    const panel = document.querySelector('.diagram-panel');
    const rect = panel.getBoundingClientRect();
    svg.setAttribute('width', rect.width);
    svg.setAttribute('height', rect.height);
    svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);

    let inner = '';

    const points = ULURP_STEPS
      .map(s => ({ step: s, p: representativeNodeForStep(s, rect) }))
      .filter(x => x.p);

    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i].p;
      const b = points[i + 1].p;
      const d = drawCurve(a.x, a.y, b.x, b.y);
      // Mark the segment as AHAB-branch if either endpoint is the AHAB step
      const isBranch = points[i].step.branch || points[i + 1].step.branch;
      const cls = isBranch ? 'ahab-path' : '';
      const marker = isBranch ? 'url(#ahabArrow)' : 'url(#ulurpArrow)';
      inner += `<path class="${cls}" d="${d}" marker-end="${marker}" />`;

      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      const label = points[i + 1].step.label;
      if (label) {
        const padX = 4;
        const w = label.length * 6.5 + padX * 2;
        const h = 14;
        const bgCls = isBranch ? 'label-bg ahab-label-bg' : 'label-bg';
        const textCls = isBranch ? 'ahab-text' : '';
        inner += `<rect class="${bgCls}" x="${mx - w/2}" y="${my - h/2}" width="${w}" height="${h}" rx="4" ry="4"/>`;
        inner += `<text class="${textCls}" x="${mx}" y="${my + 4}" text-anchor="middle">${label}</text>`;
      }
    }
    // arrowhead defs (after iteration so we know we need both colors)
    const defs = `
      <defs>
        <marker id="ulurpArrow" viewBox="0 0 10 10" refX="9" refY="5"
                markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" class="ulurp-arrowhead"/>
        </marker>
        <marker id="ahabArrow" viewBox="0 0 10 10" refX="9" refY="5"
                markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" class="ahab-arrowhead"/>
        </marker>
      </defs>`;
    svg.innerHTML = defs + inner;
  }

  function setUlurp(on) {
    ulurpOn = on;
    document.body.classList.toggle('overlay-ulurp', on);
    toggleBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    banner.setAttribute('aria-hidden', on ? 'false' : 'true');
    svg.setAttribute('aria-hidden', on ? 'false' : 'true');
    applyUlurpHighlight();
    // Draw after layout settles
    requestAnimationFrame(drawUlurpConnections);
    if (on) {
      renderInfo('ulurp-overview');
      setActive('ulurp-overview');
    }
  }

  toggleBtn.addEventListener('click', () => setUlurp(!ulurpOn));

  // Allow ?overlay=ulurp in the URL to auto-enable (handy for sharing/testing)
  if (new URLSearchParams(window.location.search).get('overlay') === 'ulurp') {
    requestAnimationFrame(() => setUlurp(true));
  }

  // Step click → open that step's info card
  document.querySelectorAll('.ulurp-step').forEach(step => {
    step.tabIndex = 0;
    step.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = step.getAttribute('data-id');
      document.querySelectorAll('.ulurp-step.active').forEach(s => s.classList.remove('active'));
      step.classList.add('active');
      renderInfo(id);
    });
    step.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        step.click();
      }
    });
  });

  // Redraw on resize / scroll-driven layout shifts
  window.addEventListener('resize', () => requestAnimationFrame(drawUlurpConnections));
})();
