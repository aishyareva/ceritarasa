document.addEventListener('DOMContentLoaded', async () => {
  App.initLangToggle(document.querySelector('.lang-toggle'));
  App.initBottomNav();

  const svgWrap   = document.getElementById('map-svg-wrap');
  const islandList = document.getElementById('island-list');
  const panel      = document.getElementById('main-panel');
  const hint       = document.getElementById('map-hint');

  let currentIsland = null;

  const svgResp = await fetch('images/map-indonesia.svg');
  const svgText = await svgResp.text();
  svgWrap.innerHTML = svgText;
  const svgEl = svgWrap.querySelector('svg');
  svgEl.id = 'indonesia-map';
  svgEl.setAttribute('width', '100%');
  svgEl.removeAttribute('height');

  DB.islands.forEach(island => {
    const btn = document.createElement('button');
    btn.className = 'island-chip';
    btn.textContent = island.name;
    btn.addEventListener('click', () => selectIsland(island));
    islandList.appendChild(btn);
  });

  function selectIsland(island) {
    currentIsland = island;
    islandList.querySelectorAll('.island-chip').forEach((c, i) => {
      c.classList.toggle('active', DB.islands[i].id === island.id);
    });

    const allPaths = svgEl.querySelectorAll('path, circle');
    allPaths.forEach(el => {
      const inIsland = island.svgIds.includes(el.id);
      el.classList.toggle('highlighted', inIsland);
      el.classList.toggle('dimmed', !inIsland);
    });

    hint.textContent = i18n.t('select_province');
    renderProvincePanel(island);
  }

  function renderProvincePanel(island) {
    const provs = DB.provinces.filter(p => p.island === island.id);
    if (!provs.length) {
      panel.innerHTML = `<div class="empty-state"><i class="bi bi-geo-alt"></i><p>${i18n.t('select_province')}</p></div>`;
      return;
    }
    panel.innerHTML = `
      <div class="fw-600 mb-4">${i18n.t('choose_prov')}</div>
      <div class="province-grid" id="prov-grid">
        ${provs.map(p => `
          <div class="prov-card" data-prov="${p.id}">
            <div class="name">${p.name}</div>
            <div class="count">${p.recipes.length} resep</div>
          </div>
        `).join('')}
      </div>
      <div class="recipe-panel" id="recipe-panel"></div>
    `;

    document.getElementById('prov-grid').addEventListener('click', e => {
      const card = e.target.closest('.prov-card');
      if (!card) return;
      document.querySelectorAll('.prov-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      renderProvinceRecipes(card.dataset.prov);
    });
  }

  function renderProvinceRecipes(provId) {
    const recipePanel = document.getElementById('recipe-panel');
    const prov = DB.provinces.find(p => p.id === provId);
    const recipes = DB.getByProv(provId);

    if (!recipes.length) {
      recipePanel.innerHTML = `
        <div class="divider"></div>
        <div class="empty-state" style="padding:var(--sp-6);">
          <i class="bi bi-bowl"></i>
          <p>Resep ${prov?.name || ''} belum tersedia. Segera hadir!</p>
        </div>`;
      return;
    }

    recipePanel.innerHTML = `
      <div class="divider"></div>
      <div class="fw-600 mb-4">${i18n.t('province_food')} ${prov?.name || ''}</div>
      <div class="d-flex flex-col gap-3">
        ${recipes.map(r => App.recipeCardH(r, i18n.lang)).join('')}
      </div>`;
  }

  svgEl.querySelectorAll('path, circle').forEach(el => {
    el.addEventListener('click', () => {
      const province = DB.provinces.find(p =>
        DB.islands.find(isl => isl.id === p.island)?.svgIds.includes(el.id)
      );
      const island = DB.islands.find(isl => isl.svgIds.includes(el.id));
      if (island) selectIsland(island);
      if (province) {
        setTimeout(() => {
          const card = document.querySelector(`[data-prov="${province.id}"]`);
          if (card) { card.classList.add('active'); renderProvinceRecipes(province.id); card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        }, 100);
      }
    });
  });
});