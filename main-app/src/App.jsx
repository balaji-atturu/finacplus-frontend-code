
// import { lazy, Suspense } from 'react';

// const MusicLibrary = lazy(() => import('musicLibrary/MusicLibrary'));

// function App() {
//   return (
//     <Suspense fallback="Loading Music Library...">
//       <MusicLibrary /> {/* Your music library renders here */}
//     </Suspense>
//   );
// }
// export default App

// import React, { useState, useEffect, Suspense } from 'react';
// import { login, isAuthenticated, getRole, logout } from './auth';
// import './App.css';

// // Lazy-load MusicLibrary component from the remote
// const MusicLibrary = React.lazy(() => import('musicLibrary/MusicLibrary'));

// // Error Boundary to catch module federation load failures
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div style={{
//           color: 'red',
//           fontWeight: 'bold',
//           marginTop: '20px',
//           textAlign: 'center'
//         }}>
//           ❌ Failed to load Music Library.
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// const App = () => {
//   const [role, setRole] = useState(getRole());
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     if (!role && isAuthenticated()) {
//       setRole(getRole());
//     }
//   }, [role]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const success = login(username, password);
//     if (success) {
//       setRole(getRole());
//       setUsername('');
//       setPassword('');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     setRole(null);
//   };

//   return (
//     <div style={{
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f5f5f5',
//       borderRadius: '12px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       maxWidth: '1000px',
//       margin: '40px auto'
//     }}>
//       <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>
//         🎤 FinacPlus Main App
//       </h1>

//       {!role ? (
//         <form
//           onSubmit={handleLogin}
//           style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px auto', maxWidth: '500px' }}
//         >
//           <input
//             type="text"
//             placeholder="Username (admin/user)"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <input
//             type="password"
//             placeholder="Password (admin123/user123)"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <button type="submit" style={{
//             padding: '12px',
//             backgroundColor: '#3498db',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}>
//             Login
//           </button>
//         </form>
//       ) : (
//         <div style={{ textAlign: 'center' }}>
//           <p>✅ Logged in as <strong>{role}</strong></p>
//           <button
//             onClick={handleLogout}
//             style={{
//               padding: '10px',
//               backgroundColor: '#e74c3c',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       )}

//       <p style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginTop: '20px' }}>
//         This main application dynamically loads and displays the <strong>Music Library</strong> as a remote component.
//       </p>

//       <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#888', textAlign: 'center' }}>
//         Built with React + Vite + Module Federation
//       </p>

//       <div style={{ marginTop: '30px' }}>
//         <ErrorBoundary>
//           <Suspense fallback={
//             <div style={{
//               padding: '12px',
//               backgroundColor: '#e0e0e0',
//               borderRadius: '8px',
//               textAlign: 'center',
//               color: '#333',
//               fontWeight: 'bold',
//               fontSize: '16px'
//             }}>
//               ⏳ Loading Music Library...
//             </div>
//           }>
//       <MusicLibrary role={role} /> 
//           </Suspense>
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect, Suspense } from 'react';
// import { AuthProvider, useAuth } from './auth-context';
// import './App.css';

// // Lazy-load MusicLibrary component from the remote
// const MusicLibrary = React.lazy(() => import('musicLibrary/MusicLibrary'));

// // Error Boundary to catch module federation load failures
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div style={{
//           color: 'red',
//           fontWeight: 'bold',
//           marginTop: '20px',
//           textAlign: 'center'
//         }}>
//           ❌ Failed to load Music Library.
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// const AuthWrapper = () => {
//   const { dispatch } = useAuth();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simple hardcoded auth - matches your original auth.js logic
//     if ((username === 'admin' && password === 'admin123') || 
//         (username === 'user' && password === 'user123')) {
//       dispatch({
//         type: 'LOGIN',
//         payload: { 
//           role: username === 'admin' ? 'admin' : 'user',
//           username 
//         }
//       });
//       setUsername('');
//       setPassword('');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     dispatch({ type: 'LOGOUT' });
//   };

//   const { role, username: authUsername } = useAuth();

  

//   return (
//     <>
//       <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>
//         🎤 FinacPlus Main App
//       </h1>

//       {!role ? (
//         <form
//           onSubmit={handleLogin}
//           style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px auto', maxWidth: '500px' }}
//         >
//           <input
//             type="text"
//             placeholder="Username (admin/user)"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <input
//             type="password"
//             placeholder="Password (admin123/user123)"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <button type="submit" style={{
//             padding: '12px',
//             backgroundColor: '#3498db',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}>
//             Login
//           </button>
//         </form>
//       ) : (
//         <div style={{ textAlign: 'center' }}>
//           <p>✅ Logged in as <strong>{authUsername} ({role})</strong></p>
//           <button
//             onClick={handleLogout}
//             style={{
//               padding: '10px',
//               backgroundColor: '#e74c3c',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       )}

//       <p style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginTop: '20px' }}>
//         This main application dynamically loads and displays the <strong>Music Library</strong> as a remote component.
//       </p>

//       <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#888', textAlign: 'center' }}>
//         Built with React + Vite + Module Federation
//       </p>

//       <div style={{ marginTop: '30px' }}>
//         <ErrorBoundary>
//           <Suspense fallback={
//             <div style={{
//               padding: '12px',
//               backgroundColor: '#e0e0e0',
//               borderRadius: '8px',
//               textAlign: 'center',
//               color: '#333',
//               fontWeight: 'bold',
//               fontSize: '16px'
//             }}>
//               ⏳ Loading Music Library...
//             </div>
//           }>
//             <MusicLibrary />
//           </Suspense>
//         </ErrorBoundary>
//       </div>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <div style={{
//         padding: '20px',
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor: '#f5f5f5',
//         borderRadius: '12px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         maxWidth: '1000px',
//         margin: '40px auto'
//       }}>
//         <AuthWrapper />
//       </div>
//     </AuthProvider>
//   );
// };

// export default App;




//  import React, { useState, useEffect, Suspense } from 'react';
//  import { login, isAuthenticated, getRole, logout } from './auth';
//  import './App.css';

// const MusicLibrary = React.lazy(() => {
//   return new Promise((resolve) => {
//     // First load the remote entry
//     const script = document.createElement('script');
//     script.src = 'https://music-library-separate.netlify.app/assets/remoteEntry.js';
    
//     script.onload = () => {
//       // Then use the standard import() function
//       import('musicLibrary/MusicLibrary')
//         .then(module => {
//           console.log('✅ Remote module loaded successfully');
//           resolve(module);
//         })
//         .catch(err => {
//           console.error('❌ Failed to load module:', err);
//           throw err;
//         });
//     };
    
//     script.onerror = (err) => {
//       console.error('❌ Failed to load remote entry:', err);
//       throw new Error('Failed to load remote entry');
//     };
    
//     document.head.appendChild(script);
//   });
// });



// import React, { useState, useEffect, Suspense } from 'react';
// import { login, isAuthenticated, getRole, logout } from './auth';
// import './App.css';

// console.log('Attempting to load remote...');
// const MusicLibrary = React.lazy(() => import('musicLibrary/MusicLibrary')
//   .then(module => {
//     console.log('✅ Remote loaded successfully!', module);
//     return module;
//   })
//   .catch(err => {
//     console.error('❌ Remote load failed!', err);
//     throw err;
//   })
// );



// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div style={{
//           color: 'red',
//           fontWeight: 'bold',
//           marginTop: '20px',
//           textAlign: 'center'
//         }}>
//           ❌ Failed to load Music Library.
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// const App = () => {
//   const [role, setRole] = useState(getRole());
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     if (!role && isAuthenticated()) {
//       setRole(getRole());
//     }
//   }, [role]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const success = login(username, password);
//     if (success) {
//       const userRole = getRole();
//       // Set role in localStorage and dispatch custom event
//       localStorage.setItem('role', userRole);
//       window.dispatchEvent(new CustomEvent('role-updated', {
//         detail: { role: userRole }
//       }));
//       setRole(userRole);
//       setUsername('');
//       setPassword('');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     localStorage.removeItem('role');
//     window.dispatchEvent(new CustomEvent('role-updated', {
//       detail: { role: null }
//     }));
//     setRole(null);
//   };

//   return (
//     <div style={{
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f5f5f5',
//       borderRadius: '12px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       maxWidth: '1000px',
//       margin: '40px auto'
//     }}>
//       <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>
//         🎤 FinacPlus Main App
//       </h1>

//       {!role ? (
//         <form
//           onSubmit={handleLogin}
//           style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px auto', maxWidth: '500px' }}
//         >
//           <input
//             type="text"
//             placeholder="Username (admin/user)"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <input
//             type="password"
//             placeholder="Password (admin123/user123)"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//           <button type="submit" style={{
//             padding: '12px',
//             backgroundColor: '#3498db',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}>
//             Login
//           </button>
//         </form>
//       ) : (
//         <div style={{ textAlign: 'center' }}>
//           <p>✅ Logged in as <strong>{role}</strong></p>
//           <button
//             onClick={handleLogout}
//             style={{
//               padding: '10px',
//               backgroundColor: '#e74c3c',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       )}

//       <p style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginTop: '20px' }}>
//         This main application dynamically loads and displays the <strong>Music Library</strong> as a remote component.
//       </p>

//       <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#888', textAlign: 'center' }}>
//         Built with React + Vite + Module Federation
//       </p>

//       <div style={{ marginTop: '30px' }}>
//         <ErrorBoundary>
//           <Suspense fallback={
//             <div style={{
//               padding: '12px',
//               textAlign: 'center',
//               backgroundColor:'blue',
//               color: 'red',
//               fontWeight: 'bold',
//               fontSize: '16px'
//             }}>
//               ⏳ Loading Music Library...
//             </div>
//           }>
//             <MusicLibrary role={role}/>
//           </Suspense>
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect, Suspense } from 'react';
import { login, isAuthenticated, getRole, logout } from './auth';
import './App.css';

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

const MusicLibrary = React.lazy(() => {
  const remoteUrl = 'https://music-library-separate.netlify.app/remoteEntry.js';
  
  return new Promise((resolve, reject) => {
    console.log('🔄 Attempting to load remote module...');
    
    // Check if remote is already loaded
    if (window.__federation_shared__?.musicLibrary) {
      console.log('ℹ️ Remote already loaded, importing directly');
      return import('musicLibrary/MusicLibrary').then(resolve).catch(reject);
    }

    const script = document.createElement('script');
    script.src = remoteUrl;
    script.async = true;

    script.onload = () => {
      console.log('✅ Remote entry loaded successfully');
      import('musicLibrary/MusicLibrary')
        .then(module => {
          console.log('🎉 MusicLibrary module loaded:', module);
          resolve(module);
        })
        .catch(err => {
          console.error('❌ Failed to import module:', err);
          reject(err);
        });
    };

    script.onerror = (err) => {
      console.error('❌ Failed to load remote entry:', err);
      reject(new Error(`Failed to load remote entry from ${remoteUrl}`));
    };

    document.head.appendChild(script);
  });
});

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
      {/* Your existing UI remains exactly the same */}
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>
        🎤 FinacPlus Main App
      </h1>

      {/* ... rest of your existing JSX ... */}

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