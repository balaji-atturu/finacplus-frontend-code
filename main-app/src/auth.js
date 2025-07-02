
const users = {
  admin: { username: 'admin', password: 'admin123', role: 'admin' },
  user: { username: 'user', password: 'user123', role: 'user' }
};

export const login = (username, password) => {
  const user = Object.values(users).find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    localStorage.setItem('jwt', `${user.username}-jwt`);
    localStorage.setItem('role', user.role);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('role');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('jwt');
};

export const getRole = () => {
  return localStorage.getItem('role');
};
