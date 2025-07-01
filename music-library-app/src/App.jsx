import React from 'react';
import SongsList from './components/SongsList';
import './App.css';  

const App = ({ role }) => {  // Receive role as prop
  return (
    <div className="music-library">
      <h1 className="music-library-title">Music Library</h1>
      <main>
        <SongsList role={role} />  {/* Pass it down to SongsList */}
      </main>
    </div>
  );
};

export default App;