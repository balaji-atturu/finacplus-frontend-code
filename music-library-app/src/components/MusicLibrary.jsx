import React from 'react';
import App from '../App';
import '../App.css';

const MusicLibrary = ({ role }) => {  // Receive role as prop
  return <App  role={role}/>;  // Pass it down to App
};

export default MusicLibrary;