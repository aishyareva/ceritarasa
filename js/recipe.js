document.addEventListener('DOMContentLoaded', () => {
  const id     = App.getParam('id');
  const recipe = DB.getById(id);
  const wrap   = document.getElementById('recipe-wrap');
  const lang   = i18n.lang;

  if (recipe) {
    const visited = JSON.parse(localStorage.getItem('cr_visited') || '[]');
    if (!visited.includes(recipe.id)) { visited.push(recipe.id); localStorage.setItem('cr_visited', JSON.stringify(visited)); }
  }

  if (!recipe) {
    wrap.innerHTML = `<div class="empty-state" style="margin-top:var(--sp-12);"><i class="bi bi-exclamation-circle"></i><p>Resep tidak ditemukan.</p><a href="home.html" class="btn btn-primary btn-sm" style="margin-top:var(--sp-4);">Kembali</a></div>`;
    return;
  }

  const isFav  = App.favs.has(recipe.id);
  const level  = { easy: i18n.t('level_easy'), medium: i18n.t('level_medium'), hard: i18n.t('level_hard') }[recipe.level];

  function renderIngredients() {
    const all = [...recipe.ingredients, ...(recipe.spices || [])];
    return all.map(item => {
      const name   = item.name[lang] || item.name.id;
      const hasAlt = item.alt;
      const altText = hasAlt ? (item.alt[lang] || item.alt.id) : '';
      return `
      <div class="ingredient-item">
        <div>
          <div class="ingr-name">${name}</div>
          ${hasAlt ? `
            <button class="show-alt-btn" onclick="toggleAlt(this)" data-alt="${altText}">
              <i class="bi bi-arrow-repeat"></i> ${i18n.t('alt_ingredients')}
            </button>
            <div class="ingr-alt" style="display:none;">${altText}</div>
          ` : ''}
        </div>
        <div class="ingr-amount">${item.amount}</div>
      </div>`;
    }).join('');
  }

  function renderSteps() {
    return recipe.steps.map(s => `
      <div class="step-item">
        <div class="step-num">${s.id}</div>
        <div class="step-text">${s.text[lang] || s.text.id}</div>
      </div>
    `).join('');
  }

  function renderHistory() {
    const h = recipe.history;
    return `
      <div class="history-block">
        <div class="hb-icon"><i class="bi bi-geo-alt"></i></div>
        <div class="hb-title" data-i18n="origin_label">${i18n.t('origin_label')}</div>
        <p>${h.origin[lang] || h.origin.id}</p>
      </div>
      <div class="history-block">
        <div class="hb-icon"><i class="bi bi-people"></i></div>
        <div class="hb-title" data-i18n="cultural_note">${i18n.t('cultural_note')}</div>
        <p>${h.culture[lang] || h.culture.id}</p>
      </div>
      <div class="history-block">
        <div class="hb-icon"><i class="bi bi-star"></i></div>
        <div class="hb-title" data-i18n="fun_fact">${i18n.t('fun_fact')}</div>
        <p>${h.funFact[lang] || h.funFact.id}</p>
      </div>`;
  }

  wrap.innerHTML = `
    <div class="recipe-hero">
      <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='images/placeholder.webp'">
      <div class="recipe-hero-overlay"></div>
      <div class="hero-actions">
        <button class="hero-action-btn" onclick="history.back()"><i class="bi bi-arrow-left"></i></button>
        <div class="d-flex gap-2">
          <button class="hero-action-btn" onclick="shareRecipe()"><i class="bi bi-share"></i></button>
          <button class="hero-action-btn fav-btn ${isFav ? 'active' : ''}" id="fav-main-btn" onclick="toggleMainFav()">
            <i class="bi bi-heart${isFav ? '-fill' : ''}"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="recipe-meta-card">
      <div class="d-flex align-center justify-between">
        <div>
          <div class="recipe-title">${recipe.name}</div>
          <div class="recipe-origin"><i class="bi bi-geo-alt"></i> ${recipe.origin}</div>
        </div>
        <span class="badge badge-${recipe.level === 'easy' ? 'success' : recipe.level === 'hard' ? 'primary' : 'accent'}">${level}</span>
      </div>
      <div class="recipe-stats">
        <div class="stat-item">
          <div class="stat-value"><i class="bi bi-clock" style="color:var(--clr-accent);"></i> ${recipe.duration}</div>
          <div class="stat-label" data-i18n="duration">${i18n.t('duration')}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-value"><i class="bi bi-star-fill" style="color:var(--clr-star);"></i> ${recipe.rating}</div>
          <div class="stat-label">${recipe.reviews.toLocaleString()} ${i18n.t('rating')}</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-value"><i class="bi bi-bar-chart" style="color:var(--clr-primary);"></i></div>
          <div class="stat-label">${level}</div>
        </div>
      </div>
    </div>

    <div class="tab-area">
      <p class="text-muted text-sm" style="margin-bottom:var(--sp-4);line-height:1.6;">${recipe.description[lang] || recipe.description.id}</p>

      <div class="tabs">
        <button class="tab-btn active" data-tab="recipe" data-i18n="tab_recipe">${i18n.t('tab_recipe')}</button>
        <button class="tab-btn" data-tab="video" data-i18n="tab_video">${i18n.t('tab_video')}</button>
        <button class="tab-btn" data-tab="history" data-i18n="tab_history">${i18n.t('tab_history')}</button>
      </div>

      <div class="tab-content">
        <div class="tab-pane active" id="tab-recipe">
          <div class="section-sub" data-i18n="ingredients">${i18n.t('ingredients')}</div>
          ${renderIngredients()}
          <div class="divider"></div>
          <div class="section-sub" data-i18n="steps">${i18n.t('steps')}</div>
          ${renderSteps()}
        </div>

        <div class="tab-pane" id="tab-video">
          <div class="yt-embed">
            <iframe src="https://www.youtube.com/embed/${recipe.youtubeId}" allowfullscreen loading="lazy" title="${recipe.name}"></iframe>
          </div>
          <a href="https://www.youtube.com/watch?v=${recipe.youtubeId}" target="_blank" rel="noopener" class="yt-btn">
            <i class="bi bi-youtube"></i> <span data-i18n="watch_yt">${i18n.t('watch_yt')}</span>
          </a>
        </div>

        <div class="tab-pane" id="tab-history">
          ${renderHistory()}
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`)?.classList.add('active');
    });
  });

  window.toggleAlt = function(btn) {
    const altEl = btn.nextElementSibling;
    const visible = altEl.style.display !== 'none';
    altEl.style.display = visible ? 'none' : 'block';
    btn.querySelector('i').className = `bi bi-arrow-repeat${visible ? '' : ' text-accent'}`;
  };

  window.toggleMainFav = function() {
    const btn = document.getElementById('fav-main-btn');
    App.toggleFavBtn(btn, recipe.id);
  };

  window.shareRecipe = function() {
    const url = location.href;
    if (navigator.share) {
      navigator.share({ title: recipe.name, url });
    } else {
      navigator.clipboard.writeText(url).then(() => App.toast(i18n.t('copy_success'), 'success'));
    }
  };
});