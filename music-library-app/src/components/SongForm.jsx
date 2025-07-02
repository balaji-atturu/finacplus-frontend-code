import React,{useState} from 'react';
const SongForm = ({ onAdd }) => {
  const [newSong, setNewSong] = useState({ 
    title: '', 
    artist: '', 
    album: '', 
    year: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newSong.title || !newSong.artist) {
      alert('Title and Artist are required');
      return;
    }
    onAdd({
      ...newSong,
      id: Date.now(), 
      year: newSong.year || 'Unknown'
    });
    setNewSong({ title: '', artist: '', album: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <input
        placeholder="Title *"
        value={newSong.title}
        onChange={(e) => setNewSong({...newSong, title: e.target.value})}
        required
      />
      <input
        placeholder="Artist *"
        value={newSong.artist}
        onChange={(e) => setNewSong({...newSong, artist: e.target.value})}
        required
      />
      <input
        placeholder="Album"
        value={newSong.album}
        onChange={(e) => setNewSong({...newSong, album: e.target.value})}
      />
      <input
        type="number"
        placeholder="Year"
        value={newSong.year}
        onChange={(e) => setNewSong({...newSong, year: e.target.value})}
        min="1900"
        max={new Date().getFullYear()}
      />
      <button type="submit">Add Song</button>
    </form>
  );
};
export default SongForm;