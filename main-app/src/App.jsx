import React, { useState, useEffect, Suspense } from 'react';
import { login, isAuthenticated, getRole, logout } from './auth';

console.log('Attempting to load remote...');
const MusicLibrary = React.lazy(() => import('music-library/MusicLibrary')
  .then(module => {
    console.log('✅ Remote loaded successfully!', module);
    return module;
  })
  .catch(err => {
    console.error('❌ Remote load failed!', err);
    throw err;
  })
);



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          color: 'red',
          fontWeight: 'bold',
          marginTop: '20px',
          textAlign: 'center'
        }}>
          ❌ Failed to load Music Library.
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  const [role, setRole] = useState(getRole());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!role && isAuthenticated()) {
      setRole(getRole());
    }
  }, [role]);

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      const userRole = getRole();
      
      localStorage.setItem('role', userRole);
      window.dispatchEvent(new CustomEvent('role-updated', {
        detail: { role: userRole }
      }));
      setRole(userRole);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('role');
    window.dispatchEvent(new CustomEvent('role-updated', {
      detail: { role: null }
    }));
    setRole(null);
  };

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '1000px',
      margin: '40px auto'
    }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>
        🎤 FinacPlus Main App
      </h1>

      {!role ? (
        <form
          onSubmit={handleLogin}
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px auto', maxWidth: '500px' }}
        >
          <input
            type="text"
            placeholder="Username (admin/user)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="password"
            placeholder="Password (admin123/user123)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{
            padding: '12px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Login
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <p>✅ Logged in as <strong>{role}</strong></p>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      )}

      <p style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginTop: '20px' }}>
        This main application dynamically loads and displays the <strong>Music Library</strong> as a remote component.
      </p>

      <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#888', textAlign: 'center' }}>
        Built with React + Vite + Module Federation
      </p>

      <div style={{ marginTop: '30px' }}>
        <ErrorBoundary>
          <Suspense fallback={
            <div style={{
              padding: '12px',
              textAlign: 'center',
              backgroundColor:'blue',
              color: 'red',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              ⏳ Loading Music Library...
            </div>
          }>
            <MusicLibrary role={role}/>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;









