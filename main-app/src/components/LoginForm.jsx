// components/LoginForm.jsx
import React from 'react';

const LoginForm = ({ username, password, onUsernameChange, onPasswordChange, onSubmit }) => {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Username (admin/user)"
        value={username}
        onChange={(e) => onUsernameChange(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password (admin123/user123)"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
