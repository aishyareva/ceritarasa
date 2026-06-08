document.addEventListener('DOMContentLoaded', () => {
  App.initBottomNav();
  App.initLangToggle(document.querySelector('.page-header .lang-toggle') || document.querySelector('.profile-hero .lang-toggle'));
  document.querySelectorAll('.lang-toggle').forEach(el => App.initLangToggle(el));

  const user      = App.auth.getUser();
  const isGuest   = App.auth.isGuest();
  const nameEl    = document.getElementById('profile-name');
  const emailEl   = document.getElementById('profile-email');
  const badgeEl   = document.getElementById('badge-label');
  const avatarEl  = document.getElementById('avatar-el');
  const guestBanner = document.getElementById('guest-banner');
  const accountSection = document.getElementById('account-section');
  const favSub    = document.getElementById('fav-sub');

  function renderAvatar(src) {
    if (src) {
      avatarEl.innerHTML = `<img src="${src}" alt="avatar" style="width:100%;height:100%;object-fit:cover;">`;
    } else {
      avatarEl.innerHTML = `<i class="bi bi-person-fill"></i>`;
    }
  }

  if (user) {
    nameEl.textContent  = user.name;
    emailEl.textContent = user.email;
    badgeEl.textContent = 'Anggota';
    renderAvatar(user.avatar);
  } else if (isGuest) {
    nameEl.textContent  = 'Tamu';
    emailEl.textContent = '';
    badgeEl.textContent = 'Mode Tamu';
    guestBanner.style.display = 'flex';
    if (accountSection) accountSection.style.display = 'none';
  }

  const favIds   = App.favs.getAll();
  const visited  = JSON.parse(localStorage.getItem('cr_visited') || '[]');
  const regions  = [...new Set(favIds.map(id => DB.getById(id)?.province).filter(Boolean))];

  document.getElementById('stat-favs').textContent    = favIds.length;
  document.getElementById('stat-visited').textContent = visited.length;
  document.getElementById('stat-regions').textContent = regions.length;
  if (favSub) favSub.textContent = `${favIds.length} resep tersimpan`;

  const overlay      = document.getElementById('overlay');
  const editModal    = document.getElementById('edit-modal');
  const confirmModal = document.getElementById('confirm-modal');

  function openModal(el) {
    overlay.classList.add('show');
    el.classList.add('show');
  }
  function closeModals() {
    overlay.classList.remove('show');
    editModal.classList.remove('show');
    confirmModal.classList.remove('show');
  }

  overlay.addEventListener('click', closeModals);

  const btnEdit = document.getElementById('btn-edit-profile');
  if (btnEdit) {
    btnEdit.addEventListener('click', () => {
      const editName = document.getElementById('edit-name');
      if (user) editName.value = user.name;
      openModal(editModal);
    });
  }

  const btnSave = document.getElementById('btn-save-profile');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const newName = document.getElementById('edit-name').value.trim();
      if (!newName) { App.toast('Nama tidak boleh kosong.', 'error'); return; }
      Auth.updateProfile(newName, null);
      nameEl.textContent = newName;
      closeModals();
      App.toast(i18n.t('profile_save') + '!', 'success');
    });
  }

  const avatarInput = document.getElementById('avatar-input');
  if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target.result;
        Auth.updateProfile(null, dataUrl);
        renderAvatar(dataUrl);
        App.toast('Foto diperbarui!', 'success');
      };
      reader.readAsDataURL(file);
    });
  }

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => openModal(confirmModal));
  }

  document.getElementById('btn-cancel-logout')?.addEventListener('click', closeModals);
  document.getElementById('btn-confirm-logout')?.addEventListener('click', () => Auth.logout());
});
