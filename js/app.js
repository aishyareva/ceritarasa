const App = {
  auth: {
    getUser:    ()     => JSON.parse(localStorage.getItem('cr_user') || 'null'),
    setUser:    (u)    => localStorage.setItem('cr_user', JSON.stringify(u)),
    removeUser: ()     => localStorage.removeItem('cr_user'),
    isLoggedIn: ()     => !!App.auth.getUser(),
    isGuest:    ()     => localStorage.getItem('cr_guest') === '1',
    setGuest:   ()     => localStorage.setItem('cr_guest', '1'),
    removeGuest:()     => localStorage.removeItem('cr_guest'),
    hasSession: ()     => App.auth.isLoggedIn() || App.auth.isGuest(),
  },

  onboarding: {
    isDone: () => localStorage.getItem('cr_onboarded') === '1',
    setDone: () => localStorage.setItem('cr_onboarded', '1'),
    reset:   () => localStorage.removeItem('cr_onboarded'),
  },

  favs: {
    getAll: ()     => JSON.parse(localStorage.getItem('cr_favs') || '[]'),
    has:    (id)   => App.favs.getAll().includes(id),
    toggle: (id)   => {
      const favs = App.favs.getAll();
      const idx   = favs.indexOf(id);
      if (idx > -1) favs.splice(idx, 1); else favs.push(id);
      localStorage.setItem('cr_favs', JSON.stringify(favs));
      return idx === -1;
    }
  },

  guard() {
    const page = location.pathname.split('/').pop() || 'index.html';
    const publicPages = ['index.html', 'auth.html', ''];
    if (!publicPages.includes(page) && !App.auth.hasSession()) {
      location.href = 'index.html';
    }
    if ((page === 'index.html' || page === '') && App.onboarding.isDone() && App.auth.hasSession()) {
      location.href = 'home.html';
    }
    if (page === 'auth.html' && App.auth.hasSession()) {
      location.href = 'home.html';
    }
  },

  toast(msg, type = '', duration = 2500) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = `toast ${type}`;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), duration);
  },

  navigate(url) { location.href = url; },

  getParam(key) {
    return new URLSearchParams(location.search).get(key);
  },

  initLangToggle(container) {
    if (!container) return;
    container.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === i18n.lang) btn.classList.add('active');
      btn.addEventListener('click', () => {
        container.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        i18n.set(btn.dataset.lang);
        location.reload();
      });
    });
  },

  initBottomNav() {
    const page = location.pathname.split('/').pop() || 'index.html';
    const map = { 'home.html': 0, 'map.html': 1, 'ingredient-search.html': 2, 'favorites.html': 3, 'profile.html': 4 };
    const items = document.querySelectorAll('.nav-item');
    const idx = map[page] ?? -1;
    if (idx > -1 && items[idx]) items[idx].classList.add('active');
  },

  levelLabel(level) {
    const map = { easy: i18n.t('level_easy'), medium: i18n.t('level_medium'), hard: i18n.t('level_hard') };
    return map[level] || level;
  },

  renderStars(rating) {
    const full  = Math.floor(rating);
    const half  = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return `${'<i class="bi bi-star-fill"></i>'.repeat(full)}${'<i class="bi bi-star-half"></i>'.repeat(half)}${'<i class="bi bi-star"></i>'.repeat(empty)}`;
  },

  recipeCardH(recipe, lang) {
    const isFav = App.favs.has(recipe.id);
    return `
    <a href="recipe.html?id=${recipe.id}" class="recipe-card-h" style="display:flex;text-decoration:none;color:inherit;">
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.src='images/placeholder.webp'">
      <div class="info">
        <div class="title">${recipe.name}</div>
        <div class="origin">${recipe.origin}</div>
        <div class="meta">
          <span class="meta-pill"><i class="bi bi-clock"></i> ${recipe.duration} ${i18n.t('duration')}</span>
          <span class="meta-pill"><i class="bi bi-bar-chart"></i> ${App.levelLabel(recipe.level)}</span>
          <span class="rating"><i class="bi bi-star-fill"></i> ${recipe.rating}</span>
        </div>
      </div>
      <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.preventDefault();App.toggleFavBtn(this,'${recipe.id}')">
        <i class="bi bi-heart${isFav ? '-fill' : ''}"></i>
      </button>
    </a>`;
  },

  recipeCardV(recipe) {
    return `
    <a href="recipe.html?id=${recipe.id}" style="text-decoration:none;color:inherit;width:160px;" class="recipe-card-v">
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.src='images/placeholder.webp'">
      <div class="info">
        <div class="title">${recipe.name}</div>
        <div class="origin">${recipe.origin}</div>
        <div class="meta" style="margin-top:var(--sp-2);">
          <span class="rating"><i class="bi bi-star-fill"></i> ${recipe.rating}</span>
        </div>
      </div>
    </a>`;
  },

  toggleFavBtn(btn, id) {
    const added = App.favs.toggle(id);
    btn.classList.toggle('active', added);
    btn.querySelector('i').className = `bi bi-heart${added ? '-fill' : ''}`;
    App.toast(i18n.t(added ? 'fav_added' : 'fav_removed'), added ? 'success' : '');
  }
};

App.guard();
i18n.apply();