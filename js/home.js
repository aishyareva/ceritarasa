document.addEventListener('DOMContentLoaded', () => {
  const user = App.auth.getUser();
  const nameEl = document.getElementById('greeting-name');
  if (nameEl && user) nameEl.textContent = user.name;

  App.initLangToggle(document.querySelector('.lang-toggle'));
  App.initBottomNav();

  const trendingList   = document.getElementById('trending-list');
  const recommendedList = document.getElementById('recommended-list');
  const searchInput    = document.getElementById('search-input');
  const searchResults  = document.getElementById('search-results');
  const searchList     = document.getElementById('search-list');
  const defaultSections = document.getElementById('default-sections');
  const filterTags     = document.getElementById('filter-tags');

  function renderTrending(recipes) {
    trendingList.innerHTML = recipes.slice(0, 6).map(r => App.recipeCardV(r)).join('');
  }

  function renderRecommended(recipes) {
    recommendedList.innerHTML = recipes.slice(0, 4).map(r => App.recipeCardH(r, i18n.lang)).join('');
  }

  const all = [...DB.recipes].sort((a, b) => b.rating - a.rating);
  renderTrending(all);
  renderRecommended([...all].sort(() => Math.random() - 0.5));

  filterTags.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    filterTags.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const tag = chip.dataset.tag;
    const filtered = tag === 'all' ? all : all.filter(r => r.tags.includes(tag));
    renderTrending(filtered);
  });

  let searchTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    const q = searchInput.value.trim();
    if (!q) {
      searchResults.classList.remove('show');
      defaultSections.style.display = '';
      return;
    }
    searchTimeout = setTimeout(() => {
      const results = DB.search(q);
      searchResults.classList.add('show');
      defaultSections.style.display = 'none';
      if (!results.length) {
        searchList.innerHTML = `<div class="empty-state"><i class="bi bi-search"></i><p>Tidak ditemukan hasil untuk "<strong>${q}</strong>"</p></div>`;
      } else {
        searchList.innerHTML = results.map(r => App.recipeCardH(r, i18n.lang)).join('');
      }
    }, 300);
  });

  document.getElementById('btn-see-all-trending')?.addEventListener('click', e => {
    e.preventDefault();
    searchInput.value = ' ';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.value = '';
    searchResults.classList.add('show');
    defaultSections.style.display = 'none';
    searchList.innerHTML = all.map(r => App.recipeCardH(r, i18n.lang)).join('');
  });
});