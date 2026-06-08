document.addEventListener('DOMContentLoaded', () => {
  App.initLangToggle(document.querySelector('.lang-toggle'));
  App.initBottomNav();

  const input        = document.getElementById('ingr-input');
  const btnAdd       = document.getElementById('btn-add-ingr');
  const tagsEl       = document.getElementById('ingr-tags');
  const btnFind      = document.getElementById('btn-find');
  const resultsSection = document.getElementById('results-section');
  const resultsEl    = document.getElementById('ingr-results');
  const suggestionsEl = document.getElementById('suggestions');

  const SUGGESTIONS = [
    'Bawang merah', 'Bawang putih', 'Cabai', 'Santan', 'Kemiri',
    'Jahe', 'Kunyit', 'Serai', 'Daging sapi', 'Ayam', 'Udang',
    'Telur', 'Gula merah', 'Kecap', 'Tomat',
  ];

  let tags = [];

  function renderSuggestions() {
    const used = tags.map(t => t.toLowerCase());
    const available = SUGGESTIONS.filter(s => !used.includes(s.toLowerCase())).slice(0, 10);
    suggestionsEl.innerHTML = available.map(s =>
      `<button class="suggestion-chip" data-s="${s}">${s}</button>`
    ).join('');
  }

  function renderTags() {
    tagsEl.innerHTML = tags.map((t, i) =>
      `<span class="ingr-tag">${t}
        <button onclick="removeTag(${i})" aria-label="Hapus ${t}"><i class="bi bi-x"></i></button>
      </span>`
    ).join('');
    renderSuggestions();
  }

  function addTag(val) {
    const v = val.trim();
    if (!v) return;
    if (tags.map(t => t.toLowerCase()).includes(v.toLowerCase())) {
      App.toast('Bahan sudah ditambahkan.', '');
      return;
    }
    tags.push(v);
    renderTags();
    input.value = '';
    input.focus();
  }

  window.removeTag = function(idx) {
    tags.splice(idx, 1);
    renderTags();
    resultsSection.style.display = 'none';
  };

  btnAdd.addEventListener('click', () => addTag(input.value));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addTag(input.value); }
  });

  suggestionsEl.addEventListener('click', (e) => {
    const chip = e.target.closest('.suggestion-chip');
    if (chip) addTag(chip.dataset.s);
  });

  btnFind.addEventListener('click', () => {
    if (!tags.length) { App.toast(i18n.t('ingr_empty'), ''); return; }

    const results = DB.findByIngredients(tags);
    resultsSection.style.display = 'block';

    if (!results.length) {
      resultsEl.innerHTML = `
        <div class="empty-state">
          <i class="bi bi-basket3"></i>
          <p data-i18n="ingr_none">${i18n.t('ingr_none')}</p>
        </div>`;
      return;
    }

    resultsEl.innerHTML = results.map(({ recipe, matchCount, matchedIngredients }) => {
      const pct = Math.min(100, Math.round((matchCount / (recipe.ingredients.length + (recipe.spices?.length || 0))) * 100));
      return `
      <a href="recipe.html?id=${recipe.id}" style="text-decoration:none;color:inherit;">
        <div class="recipe-card-h" style="flex-direction:column;gap:0;padding:0;overflow:hidden;">
          <div style="display:flex;gap:var(--sp-3);padding:var(--sp-3);">
            <img src="${recipe.image}" alt="${recipe.name}" style="width:80px;height:80px;border-radius:var(--radius-md);object-fit:cover;flex-shrink:0;" onerror="this.src='images/placeholder.webp'">
            <div style="flex:1;min-width:0;">
              <div class="title" style="font-family:var(--ff-display);font-weight:700;">${recipe.name}</div>
              <div class="origin" style="font-size:var(--fz-xs);color:var(--clr-text-3);margin-top:2px;">${recipe.origin}</div>
              <div class="meta" style="display:flex;align-items:center;gap:var(--sp-3);margin-top:var(--sp-2);">
                <span class="meta-pill"><i class="bi bi-clock"></i> ${recipe.duration} ${i18n.t('duration')}</span>
                <span class="rating"><i class="bi bi-star-fill"></i> ${recipe.rating}</span>
              </div>
            </div>
          </div>
          <div style="padding:0 var(--sp-3) var(--sp-3);">
            <div class="match-bar">
              <div class="progress-bar" style="flex:1;">
                <div class="fill" style="width:${pct}%;"></div>
              </div>
              <span class="match-label">${matchCount} ${i18n.t('ingr_match')}</span>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:var(--sp-1);margin-top:var(--sp-1);">
              ${matchedIngredients.map(m => `<span class="badge badge-success" style="font-size:10px;">${m}</span>`).join('')}
            </div>
          </div>
        </div>
      </a>`;
    }).join('');

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  renderSuggestions();

  const fromHome = App.getParam('q');
  if (fromHome) {
    fromHome.split(',').forEach(t => addTag(t.trim()));
  }
});
