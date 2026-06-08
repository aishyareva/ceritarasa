const Auth = {
  users: JSON.parse(localStorage.getItem('cr_users') || '[]'),

  saveUsers() { localStorage.setItem('cr_users', JSON.stringify(this.users)); },

  register(name, email, password) {
    if (this.users.find(u => u.email === email)) return { ok: false, msg: 'Email sudah terdaftar.' };
    const user = { id: Date.now(), name, email, password, avatar: null, joined: new Date().toISOString() };
    this.users.push(user);
    this.saveUsers();
    App.auth.setUser({ id: user.id, name: user.name, email: user.email, avatar: user.avatar });
    return { ok: true };
  },

  login(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, msg: 'Email atau kata sandi salah.' };
    App.auth.setUser({ id: user.id, name: user.name, email: user.email, avatar: user.avatar });
    return { ok: true };
  },

  logout() {
    App.auth.removeUser();
    App.auth.removeGuest();
    App.onboarding.reset();
    location.href = 'index.html';
  },

  updateProfile(name, avatarDataUrl) {
    const session = App.auth.getUser();
    if (!session) return;
    const idx = this.users.findIndex(u => u.id === session.id);
    if (idx > -1) {
      if (name)          this.users[idx].name   = name;
      if (avatarDataUrl) this.users[idx].avatar  = avatarDataUrl;
      this.saveUsers();
    }
    App.auth.setUser({ ...session, name: name || session.name, avatar: avatarDataUrl || session.avatar });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const tabLogin    = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const formLogin   = document.getElementById('form-login');
  const formReg     = document.getElementById('form-register');
  const btnGuest    = document.getElementById('btn-guest');

  if (!tabLogin) return;

  function switchTab(tab) {
    const isLogin = tab === 'login';
    tabLogin.classList.toggle('active', isLogin);
    tabRegister.classList.toggle('active', !isLogin);
    formLogin.classList.toggle('hidden', !isLogin);
    formReg.classList.toggle('hidden', isLogin);
  }

  tabLogin.addEventListener('click', () => switchTab('login'));
  tabRegister.addEventListener('click', () => switchTab('register'));

  formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const email = formLogin.querySelector('[name=email]').value.trim();
    const pass  = formLogin.querySelector('[name=password]').value;
    const res   = Auth.login(email, pass);
    if (res.ok) { App.onboarding.setDone(); location.href = 'home.html'; }
    else App.toast(res.msg, 'error');
  });

  formReg.addEventListener('submit', e => {
    e.preventDefault();
    const name  = formReg.querySelector('[name=name]').value.trim();
    const email = formReg.querySelector('[name=email]').value.trim();
    const pass  = formReg.querySelector('[name=password]').value;
    if (pass.length < 6) { App.toast('Kata sandi minimal 6 karakter.', 'error'); return; }
    const res = Auth.register(name, email, pass);
    if (res.ok) { App.onboarding.setDone(); location.href = 'home.html'; }
    else App.toast(res.msg, 'error');
  });

  document.querySelectorAll('.toggle-pw').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = btn.previousElementSibling;
      const isText = inp.type === 'text';
      inp.type = isText ? 'password' : 'text';
      btn.querySelector('i').className = `bi bi-eye${isText ? '' : '-slash'}`;
    });
  });

  if (btnGuest) {
    btnGuest.addEventListener('click', () => {
      App.auth.setGuest();
      App.onboarding.setDone();
      location.href = 'home.html';
    });
  }

  App.initLangToggle(document.querySelector('.lang-toggle'));
});