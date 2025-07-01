
import React from 'react';
import ReactDOM from 'react-dom/client';
import MusicLibrary from './components/MusicLibrary';
//import './components/Styles1.css';
import '../src/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MusicLibrary />
  </React.StrictMode>,
);
