document.addEventListener('DOMContentLoaded', () => {
  App.initLangToggle(document.querySelector('.lang-toggle'));
  App.initBottomNav();

  const list    = document.getElementById('fav-list');
  const countEl = document.getElementById('fav-count');

  function render() {
    const ids     = App.favs.getAll();
    const recipes = ids.map(id => DB.getById(id)).filter(Boolean);
    countEl.textContent = `${recipes.length} resep tersimpan`;
    if (!recipes.length) {
      list.innerHTML = `
        <div class="empty-state">
          <i class="bi bi-heart"></i>
          <p data-i18n="fav_empty">${i18n.t('fav_empty')}</p>
          <p class="text-xs" style="margin-top:var(--sp-2);" data-i18n="fav_empty_sub">${i18n.t('fav_empty_sub')}</p>
          <a href="home.html" class="btn btn-primary btn-sm" style="margin-top:var(--sp-4);">${i18n.t('nav_home')}</a>
        </div>`;
      return;
    }
    list.innerHTML = recipes.map(r => App.recipeCardH(r, i18n.lang)).join('');

    list.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.closest('[href]')?.href?.split('=')[1] || '';
        App.favs.toggle(id);
        setTimeout(render, 200);
      });
    });
  }

  render();
});