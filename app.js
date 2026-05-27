(function() {
  const DATA = window.NYC_GOV_DATA || {};
  const panel = document.getElementById('infoPanel');

  // ============ INFO PANEL ============
  function siloClass(silo) {
    if (['doing','reviewing','inter','budget','legal'].includes(silo)) return silo;
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
        <p>The node <code>${id}</code> doesn't have a data entry yet.</p>
      </div>`;
      return;
    }
    const facts = (d.keyFacts && d.keyFacts.length)
      ? `<div class="key-facts"><h3>Key facts</h3><ul>${d.keyFacts.map(f => `<li>${f}</li>`).join('')}</ul></div>`
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
    if (typeof gtag === 'function') {
      gtag('event', 'node_click', { event_category: 'gov_map', event_label: id });
    }
  }
  function setActive(id) {
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    document.querySelectorAll(`[data-id="${id}"]`).forEach(el => el.classList.add('active'));
  }
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-id]');
    if (!el) return;
    e.stopPropagation();
    const id = el.getAttribute('data-id');
    setActive(id);
    renderInfo(id);
  });
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
  window.openNode = (id) => { setActive(id); renderInfo(id); };

  // ============ OVERLAYS REGISTRY ============
  // Each overlay describes a process that links nodes already on the map.
  // colorVar = the CSS variable holding the overlay color (set in styles.css).
  // steps[].nodes = diagram node IDs to highlight when the step is active.
  // steps[].branch = true if this step is a side-branch (gets distinct styling).
  const OVERLAYS = {
    ulurp: {
      name: 'ULURP — Uniform Land Use Review Procedure',
      subtitle: 'Charter §197-c · max ~205 days · click any step for detail',
      overviewId: 'ulurp-overview',
      colorVar: '--ov-ulurp',
      branchColorVar: '--ov-ulurp-branch',
      steps: [
        { id:'ulurp-cert',     stepNum:'0',  shortName:'DCP Certification',          timeLabel:'starts clock',                                arcLabel:'cert.', nodes:['dcp'] },
        { id:'ulurp-cb',       stepNum:'1',  shortName:'Community Board',            timeLabel:'60 days · advisory',                          arcLabel:'60d',   nodes:['cb-brooklyn','cb-queens','cb-manhattan','cb-bronx','cb-staten-island','cb-total'] },
        { id:'ulurp-bp',       stepNum:'2',  shortName:'Borough President',          timeLabel:'30 days · advisory',                          arcLabel:'30d',   nodes:['bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'] },
        { id:'ulurp-cpc',      stepNum:'3',  shortName:'City Planning Commission',   timeLabel:'60 days · vote',                              arcLabel:'60d',   nodes:['dcp'] },
        { id:'ulurp-council',  stepNum:'4',  shortName:'City Council',               timeLabel:'50 days · vote',                              arcLabel:'50d',   nodes:['city-council'] },
        { id:'ulurp-mayor',    stepNum:'5a', shortName:'Mayor',                      timeLabel:'5 days · veto (non-AH)',                      arcLabel:'5d',    nodes:['mayor'] },
        { id:'ulurp-ahab',     stepNum:'5b', shortName:'Aff. Housing Appeals Board', timeLabel:'Mayor + Speaker + BP · 2-of-3 (AH only)',     arcLabel:'AHAB',  nodes:['mayor','city-council','bp-brooklyn','bp-queens','bp-manhattan','bp-bronx','bp-staten-island'], branch:true },
        { id:'ulurp-override', stepNum:'6',  shortName:'Council Override',           timeLabel:'10 days · 2/3 vote',                          arcLabel:'10d',   nodes:['city-council'] }
      ]
    }
    // elurp, local-law, budget-process are added below from OVERLAYS_EXT (if defined in data.js)
  };
  if (window.NYC_GOV_OVERLAYS_EXT) Object.assign(OVERLAYS, window.NYC_GOV_OVERLAYS_EXT);

  // Aggregated node set for an overlay (for dim/highlight)
  function overlayNodeSet(overlay) {
    return new Set((overlay.steps || []).flatMap(s => s.nodes));
  }

  const banner = document.getElementById('overlayBanner');
  const svg    = document.getElementById('overlayConnections');
  const toggleBtns = Array.from(document.querySelectorAll('.overlay-toggle'));
  let activeOverlay = null;

  function applyHighlight() {
    document.querySelectorAll('.overlay-active-node').forEach(el => el.classList.remove('overlay-active-node','branch-node'));
    if (!activeOverlay) return;
    const ov = OVERLAYS[activeOverlay];
    if (!ov) return;
    const nodes = overlayNodeSet(ov);
    nodes.forEach(id => {
      document.querySelectorAll(`[data-id="${id}"]`).forEach(el => el.classList.add('overlay-active-node'));
    });
    // Branch step nodes get an additional class — purely cosmetic if needed later
    (ov.steps || []).filter(s => s.branch).forEach(s => {
      s.nodes.forEach(id => {
        document.querySelectorAll(`[data-id="${id}"]`).forEach(el => el.classList.add('branch-node'));
      });
    });
  }

  // ===== Banner rendering =====
  function renderBanner(overlay) {
    if (!overlay) { banner.innerHTML = ''; return; }
    const steps = overlay.steps || [];
    const stepHtml = steps.map((s, i) => {
      const arrow = (i === 0) ? '' :
        `<li class="overlay-arrow ${steps[i].branch || steps[i-1].branch ? 'branch-arrow' : ''}">${steps[i].branch ? '↘' : (steps[i-1].branch ? '↗' : '→')}</li>`;
      const stepClass = `overlay-step${s.branch ? ' branch-step' : ''}`;
      return arrow + `<li class="${stepClass}" data-id="${s.id}" tabindex="0">
        <span class="step-num">${s.stepNum}</span>
        <span class="step-name">${s.shortName}</span>
        <span class="step-days">${s.timeLabel}</span>
      </li>`;
    }).join('');
    banner.innerHTML = `
      <div class="overlay-banner-header">
        <strong>${overlay.name}</strong>
        <span class="overlay-banner-sub">${overlay.subtitle || ''}</span>
      </div>
      <ol class="overlay-timeline">${stepHtml}</ol>`;

    // Step click handlers
    banner.querySelectorAll('.overlay-step').forEach(stepEl => {
      stepEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = stepEl.getAttribute('data-id');
        banner.querySelectorAll('.overlay-step.active').forEach(s => s.classList.remove('active'));
        stepEl.classList.add('active');
        renderInfo(id);
      });
      stepEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          stepEl.click();
        }
      });
    });
  }

  // ===== Connection drawing =====
  function nodeCenter(id, containerRect) {
    const el = document.querySelector(`[data-id="${id}"]`);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: r.left + r.width / 2 - containerRect.left,
      y: r.top  + r.height / 2 - containerRect.top
    };
  }
  function representativeForStep(step, containerRect) {
    for (const id of step.nodes) {
      const c = nodeCenter(id, containerRect);
      if (c) return c;
    }
    return null;
  }
  function drawCurve(x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1;
    const cx1 = x1 + dx * 0.25, cy1 = y1 + dy * 0.6;
    const cx2 = x1 + dx * 0.75, cy2 = y1 + dy * 0.4;
    return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
  }
  function drawConnections() {
    if (!activeOverlay) { svg.innerHTML = ''; return; }
    const ov = OVERLAYS[activeOverlay];
    if (!ov) { svg.innerHTML = ''; return; }
    const diagram = document.querySelector('.diagram-panel');
    const rect = diagram.getBoundingClientRect();
    svg.setAttribute('width', rect.width);
    svg.setAttribute('height', rect.height);
    svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);

    const points = (ov.steps || [])
      .map(s => ({ step: s, p: representativeForStep(s, rect) }))
      .filter(x => x.p);

    let inner = '';
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i].p, b = points[i+1].p;
      const d = drawCurve(a.x, a.y, b.x, b.y);
      const isBranch = points[i].step.branch || points[i+1].step.branch;
      const pathCls = isBranch ? 'overlay-path branch-path' : 'overlay-path';
      const marker = isBranch ? 'url(#ovBranchArrow)' : 'url(#ovArrow)';
      inner += `<path class="${pathCls}" d="${d}" marker-end="${marker}" />`;

      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const label = points[i+1].step.arcLabel;
      if (label) {
        const padX = 4;
        const w = label.length * 6.5 + padX * 2;
        const h = 14;
        inner += `<rect class="${isBranch ? 'overlay-label-bg branch-label-bg' : 'overlay-label-bg'}" x="${mx - w/2}" y="${my - h/2}" width="${w}" height="${h}" rx="4" ry="4"/>`;
        inner += `<text class="${isBranch ? 'overlay-text branch-text' : 'overlay-text'}" x="${mx}" y="${my + 4}" text-anchor="middle">${label}</text>`;
      }
    }
    const defs = `
      <defs>
        <marker id="ovArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" class="overlay-arrowhead"/>
        </marker>
        <marker id="ovBranchArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" class="branch-arrowhead"/>
        </marker>
      </defs>`;
    svg.innerHTML = defs + inner;
  }

  // ===== Toggle / state =====
  function setOverlay(id) {
    // Clear any previous body classes
    document.body.classList.forEach(c => {
      if (c.startsWith('overlay-')) document.body.classList.remove(c);
    });
    toggleBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
    activeOverlay = (id && OVERLAYS[id]) ? id : null;

    if (activeOverlay) {
      document.body.classList.add('overlay-active');
      document.body.classList.add('overlay-' + activeOverlay);
      const btn = toggleBtns.find(b => b.getAttribute('data-overlay') === activeOverlay);
      if (btn) btn.setAttribute('aria-pressed', 'true');
      renderBanner(OVERLAYS[activeOverlay]);
      banner.setAttribute('aria-hidden', 'false');
      svg.setAttribute('aria-hidden', 'false');
      renderInfo(OVERLAYS[activeOverlay].overviewId);
      setActive(OVERLAYS[activeOverlay].overviewId);
    } else {
      banner.innerHTML = '';
      banner.setAttribute('aria-hidden', 'true');
      svg.setAttribute('aria-hidden', 'true');
      svg.innerHTML = '';
    }
    applyHighlight();
    requestAnimationFrame(drawConnections);
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-overlay');
      setOverlay(activeOverlay === id ? null : id);
    });
  });

  // URL ?overlay=<id> auto-enables (also accepts legacy ?overlay=ulurp)
  const urlOv = new URLSearchParams(window.location.search).get('overlay');
  if (urlOv && OVERLAYS[urlOv]) {
    requestAnimationFrame(() => setOverlay(urlOv));
  }

  window.addEventListener('resize', () => requestAnimationFrame(drawConnections));

  // Console helper
  window.setOverlay = setOverlay;
})();
