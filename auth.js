// auth.js — shared authentication logic using localStorage
const Auth = {
  getUsers() {
    return JSON.parse(localStorage.getItem('slnt_users') || '[]');
  },
  saveUsers(users) {
    localStorage.setItem('slnt_users', JSON.stringify(users));
  },
  getSession() {
    const s = localStorage.getItem('slnt_session');
    return s ? JSON.parse(s) : null;
  },
  setSession(user) {
    localStorage.setItem('slnt_session', JSON.stringify(user));
  },
  clearSession() {
    localStorage.removeItem('slnt_session');
  },
  requireAuth(role) {
    const user = this.getSession();
    if (!user) { window.location.href = 'index.html'; return null; }
    if (role && user.role !== role && user.role !== 'admin') { window.location.href = 'index.html'; return null; }
    return user;
  },
  register(name, email, password, role) {
    const users = this.getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    const user = { id: Date.now().toString(), name, email: email.toLowerCase(), password, role: role || 'employee', createdAt: new Date().toISOString() };
    users.push(user);
    this.saveUsers(users);
    return { success: true, user };
  },
  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email.toLowerCase() && u.password === password);
    if (!user) return { success: false, message: 'Incorrect email or password.' };
    this.setSession(user);
    return { success: true, user };
  },
  resetPassword(email, newPassword) {
    const users = this.getUsers();
    const idx = users.findIndex(u => u.email === email.toLowerCase());
    if (idx === -1) return { success: false, message: 'No account found with that email.' };
    users[idx].password = newPassword;
    this.saveUsers(users);
    return { success: true };
  },
  logout() {
    this.clearSession();
    window.location.href = 'index.html';
  }
};
