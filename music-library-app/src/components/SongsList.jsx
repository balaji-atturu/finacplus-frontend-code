

// import React, { useState, useMemo } from 'react';
// import { songs as initialSongs } from '../mockSongs';
// import SongCard from './SongCard';
// import '../styles/Styles1.css';

// const SongsList = ({ role }) => {  // Accept role prop from main app
//   const [songs, setSongs] = useState(initialSongs);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('none');
//   const [groupBy, setGroupBy] = useState(null);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [showDeleteForm, setShowDeleteForm] = useState(false);
//   const [newSong, setNewSong] = useState({ title: '', artist: '', album: '', year: '2025' });
//   const [deleteCriteria, setDeleteCriteria] = useState({ title: '', artist: '', album: '' });
//   const [notification, setNotification] = useState(null);

//   const showNotification = (message, isSuccess = true) => {
//     setNotification({ message, isSuccess });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const handleAddSong = () => {
//     if (!newSong.title || !newSong.artist || !newSong.album) {
//       showNotification('Please provide title, artist, and album', false);
//       return;
//     }

//     const songToAdd = {
//       id: Date.now(),
//       title: newSong.title.trim(),
//       artist: newSong.artist.trim(),
//       album: newSong.album.trim(),
//       year: parseInt(newSong.year) || 2025,
//     };

//     setSongs([...songs, songToAdd]);
//     setNewSong({ title: '', artist: '', album: '', year: '2025' });
//     setShowAddForm(false);
//     showNotification('Song successfully added!');
//   };

//   const handleDeleteSong = () => {
//     if (!deleteCriteria.title || !deleteCriteria.artist || !deleteCriteria.album) {
//       showNotification('Please provide title, artist, and album to delete', false);
//       return;
//     }

//     const remainingSongs = songs.filter(song => 
//       !(song.title.toLowerCase() === deleteCriteria.title.toLowerCase() &&
//         song.artist.toLowerCase() === deleteCriteria.artist.toLowerCase() &&
//         song.album.toLowerCase() === deleteCriteria.album.toLowerCase())
//     );

//     if (remainingSongs.length === songs.length) {
//       showNotification('No matching song found', false);
//     } else {
//       setSongs(remainingSongs);
//       showNotification('Song successfully deleted!');
//     }

//     setDeleteCriteria({ title: '', artist: '', album: '' });
//     setShowDeleteForm(false);
//   };

//   const processedSongs = useMemo(() => {
//     let result = [...songs];

//     // Filtering
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       result = result.filter(song =>
//         song.title.toLowerCase().includes(term) ||
//         song.artist.toLowerCase().includes(term) ||
//         song.album.toLowerCase().includes(term)
//       );
//     }

//     // Grouping
//     if (groupBy) {
//       const grouped = result.reduce((acc, song) => {
//         const key = song[groupBy] || 'Unknown';
//         if (!acc[key]) {
//           acc[key] = {
//             name: key,
//             songs: [],
//             sortValue:
//               sortBy === 'year' ? song.year :
//               ['title', 'album', 'artist'].includes(sortBy) ? song[sortBy].toLowerCase() :
//               0
//           };
//         }

//         acc[key].songs.push(song);

//         // Update group sortValue
//         if (sortBy === 'year') {
//           acc[key].sortValue = Math.min(acc[key].sortValue, song.year);
//         } else if (['title', 'album', 'artist'].includes(sortBy)) {
//           if (song[sortBy].toLowerCase() < acc[key].sortValue) {
//             acc[key].sortValue = song[sortBy].toLowerCase();
//           }
//         }

//         return acc;
//       }, {});

//       // Convert to array and sort groups
//       const sortedGroups = Object.values(grouped).sort((a, b) => {
//         if (sortBy === 'none') return 0;
//         if (sortBy === 'year') return a.sortValue - b.sortValue;
//         return a.sortValue.localeCompare(b.sortValue);
//       });

//       // Sort songs inside each group
//       return sortedGroups.map(group => ({
//         ...group,
//         songs: [...group.songs].sort((a, b) => {
//           if (sortBy === 'none') return 0;
//           if (sortBy === 'year') return a.year - b.year;
//           return a[sortBy].localeCompare(b[sortBy]);
//         })
//       }));
//     }

//     // No grouping — flat sorting
//     return result.sort((a, b) => {
//       if (sortBy === 'none') return 0;
//       if (sortBy === 'year') return a.year - b.year;
//       return a[sortBy].localeCompare(b[sortBy]);
//     });
//   }, [songs, searchTerm, sortBy, groupBy]);

//   return (
//     <div className="music-library">
//       {notification && (
//         <div className={`notification ${notification.isSuccess ? 'success' : 'error'}`}>
//           {notification.message}
//         </div>
//       )}

//       <div className="controls">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search songs..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="sort-group-container">
//           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//             <option value="none">No Sorting</option>
//             <option value="title">Sort by Title</option>
//             <option value="artist">Sort by Artist</option>
//             <option value="album">Sort by Album</option>
//             <option value="year">Sort by Year</option>
//           </select>

//           <select value={groupBy || ''} onChange={(e) => setGroupBy(e.target.value || null)}>
//             <option value="">No Grouping</option>
//             <option value="artist">Group by Artist</option>
//             <option value="album">Group by Album</option>
//             <option value="year">Group by Year</option>
//           </select>
//         </div>

//         <div className="action-buttons">
//           <button onClick={() => setShowAddForm(true)}>Add Song</button>
//           <button onClick={() => setShowDeleteForm(true)}>Delete Song</button>
//         </div>
//       </div>

//       {showAddForm && (
//         <div className="song-form">
//           <h3>Add New Song</h3>
//           <input
//             placeholder="Title *"
//             value={newSong.title}
//             onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
//           />
//           <input
//             placeholder="Artist *"
//             value={newSong.artist}
//             onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
//           />
//           <input
//             placeholder="Album *"
//             value={newSong.album}
//             onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Year"
//             value={newSong.year}
//             onChange={(e) => setNewSong({ ...newSong, year: e.target.value })}
//           />
//           <div className="form-actions">
//             <button onClick={handleAddSong}>Submit</button>
//             <button onClick={() => setShowAddForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {showDeleteForm && (
//         <div className="song-form">
//           <h3>Delete Song</h3>
//           <input
//             placeholder="Title *"
//             value={deleteCriteria.title}
//             onChange={(e) => setDeleteCriteria({ ...deleteCriteria, title: e.target.value })}
//           />
//           <input
//             placeholder="Artist *"
//             value={deleteCriteria.artist}
//             onChange={(e) => setDeleteCriteria({ ...deleteCriteria, artist: e.target.value })}
//           />
//           <input
//             placeholder="Album *"
//             value={deleteCriteria.album}
//             onChange={(e) => setDeleteCriteria({ ...deleteCriteria, album: e.target.value })}
//           />
//           <div className="form-actions">
//             <button onClick={handleDeleteSong}>Delete</button>
//             <button onClick={() => setShowDeleteForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <div className="songs-container">
//         {processedSongs.length > 0 ? (
//           groupBy ? (
//             <div className="group-container">
//               {processedSongs.map(group => (
//                 <div key={`group-${group.name}`} className="group">
//                   <h3 className="group-header">
//                     {groupBy === 'artist' && `Artist: ${group.name}`}
//                     {groupBy === 'album' && `Album: ${group.name}`}
//                     {groupBy === 'year' && `Year: ${group.name}`}
//                   </h3>
//                   <div className="horizontal-group">
//                     {group.songs.map(song => (
//                       <SongCard
//                         key={`${group.name}-${song.id}`}
//                         song={song}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="horizontal-list">
//               {processedSongs.map(song => (
//                 <SongCard
//                   key={song.id}
//                   song={song}
//                 />
//               ))}
//             </div>
//           )
//         ) : (
//           <div className="no-results">No songs found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SongsList;








import React, { useState, useMemo } from 'react';
import { songs as initialSongs } from '../mockSongs';
import SongCard from './SongCard';
import '../styles/Styles1.css';

const SongsList = ({ role }) => {  
  const [songs, setSongs] = useState(initialSongs);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('none');
  const [groupBy, setGroupBy] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [newSong, setNewSong] = useState({ title: '', artist: '', album: '', year: '2025' });
  const [deleteCriteria, setDeleteCriteria] = useState({ title: '', artist: '', album: '' });
  const [notification, setNotification] = useState(null);

  const showNotification = (message, isSuccess = true) => {
    setNotification({ message, isSuccess });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddSong = () => {
    if (!newSong.title || !newSong.artist || !newSong.album) {
      showNotification('Please provide title, artist, and album', false);
      return;
    }

    const songToAdd = {
      id: Date.now(),
      title: newSong.title.trim(),
      artist: newSong.artist.trim(),
      album: newSong.album.trim(),
      year: parseInt(newSong.year) || 2025,
    };

    setSongs([...songs, songToAdd]);
    setNewSong({ title: '', artist: '', album: '', year: '2025' });
    setShowAddForm(false);
    showNotification('Song successfully added!');
  };

  const handleDeleteSong = () => {
    if (!deleteCriteria.title || !deleteCriteria.artist || !deleteCriteria.album) {
      showNotification('Please provide title, artist, and album to delete', false);
      return;
    }

    const remainingSongs = songs.filter(song => 
      !(song.title.toLowerCase() === deleteCriteria.title.toLowerCase() &&
        song.artist.toLowerCase() === deleteCriteria.artist.toLowerCase() &&
        song.album.toLowerCase() === deleteCriteria.album.toLowerCase())
    );

    if (remainingSongs.length === songs.length) {
      showNotification('No matching song found', false);
    } else {
      setSongs(remainingSongs);
      showNotification('Song successfully deleted!');
    }

    setDeleteCriteria({ title: '', artist: '', album: '' });
    setShowDeleteForm(false);
  };

  const processedSongs = useMemo(() => {
    let result = [...songs];

    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(song =>
        song.title.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term) ||
        song.album.toLowerCase().includes(term)
      );
    }

    
    if (groupBy) {
      const grouped = result.reduce((acc, song) => {
        const key = song[groupBy] || 'Unknown';
        if (!acc[key]) {
          acc[key] = {
            name: key,
            songs: [],
            sortValue:
              sortBy === 'year' ? song.year :
              ['title', 'album', 'artist'].includes(sortBy) ? song[sortBy].toLowerCase() :
              0
          };
        }

        acc[key].songs.push(song);

        
        if (sortBy === 'year') {
          acc[key].sortValue = Math.min(acc[key].sortValue, song.year);
        } else if (['title', 'album', 'artist'].includes(sortBy)) {
          if (song[sortBy].toLowerCase() < acc[key].sortValue) {
            acc[key].sortValue = song[sortBy].toLowerCase();
          }
        }

        return acc;
      }, {});

      
      const sortedGroups = Object.values(grouped).sort((a, b) => {
        if (sortBy === 'none') return 0;
        if (sortBy === 'year') return a.sortValue - b.sortValue;
        return a.sortValue.localeCompare(b.sortValue);
      });

      
      return sortedGroups.map(group => ({
        ...group,
        songs: [...group.songs].sort((a, b) => {
          if (sortBy === 'none') return 0;
          if (sortBy === 'year') return a.year - b.year;
          return a[sortBy].localeCompare(b[sortBy]);
        })
      }));
    }

    
    return result.sort((a, b) => {
      if (sortBy === 'none') return 0;
      if (sortBy === 'year') return a.year - b.year;
      return a[sortBy].localeCompare(b[sortBy]);
    });
  }, [songs, searchTerm, sortBy, groupBy]);

  return (
    <div className="music-library">
      {notification && (
        <div className={`notification ${notification.isSuccess ? 'success' : 'error'}`}>
          {notification.message}
        </div>
      )}

      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search songs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-group-container">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="none">No Sorting</option>
            <option value="title">Sort by Title</option>
            <option value="artist">Sort by Artist</option>
            <option value="album">Sort by Album</option>
            <option value="year">Sort by Year</option>
          </select>

          <select value={groupBy || ''} onChange={(e) => setGroupBy(e.target.value || null)}>
            <option value="">No Grouping</option>
            <option value="artist">Group by Artist</option>
            <option value="album">Group by Album</option>
            <option value="year">Group by Year</option>
          </select>
        </div>

        {/* Modified action buttons  */}
        {role === 'admin' && (
          <div className="action-buttons">
            <button 
              onClick={() => setShowAddForm(true)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Add Song
            </button>
            <button 
              onClick={() => setShowDeleteForm(true)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete Song
            </button>
          </div>
        )}
      </div>

      {/* Forms */}
      {showAddForm && (
        <div className="song-form">
          <h3>Add New Song</h3>
          <input
            placeholder="Title *"
            value={newSong.title}
            onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
          />
          <input
            placeholder="Artist *"
            value={newSong.artist}
            onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
          />
          <input
            placeholder="Album *"
            value={newSong.album}
            onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
          />
          <input
            type="number"
            placeholder="Year"
            value={newSong.year}
            onChange={(e) => setNewSong({ ...newSong, year: e.target.value })}
          />
          <div className="form-actions">
            <button onClick={handleAddSong}>Submit</button>
            <button onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showDeleteForm && (
        <div className="song-form">
          <h3>Delete Song</h3>
          <input
            placeholder="Title *"
            value={deleteCriteria.title}
            onChange={(e) => setDeleteCriteria({ ...deleteCriteria, title: e.target.value })}
          />
          <input
            placeholder="Artist *"
            value={deleteCriteria.artist}
            onChange={(e) => setDeleteCriteria({ ...deleteCriteria, artist: e.target.value })}
          />
          <input
            placeholder="Album *"
            value={deleteCriteria.album}
            onChange={(e) => setDeleteCriteria({ ...deleteCriteria, album: e.target.value })}
          />
          <div className="form-actions">
            <button onClick={handleDeleteSong}>Delete</button>
            <button onClick={() => setShowDeleteForm(false)}>Cancel</button>
          </div>
        </div>
      )}

<div className="songs-container">
  {processedSongs.length > 0 ? (
    groupBy ? (
      <div className="group-container">
        {processedSongs.map(group => (
          <div key={`group-${group.name}`} className="group">
            <h3 className="group-header">
              {groupBy === 'artist' && `Artist: ${group.name}`}
              {groupBy === 'album' && `Album: ${group.name}`}
              {groupBy === 'year' && `Year: ${group.name}`}
            </h3>
            <div className="horizontal-group">
              {group.songs.map(song => (
                <SongCard
                  key={`${group.name}-${song.id}`}
                  song={song}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="horizontal-list">
        {processedSongs.map(song => (
          <SongCard
            key={song.id}
            song={song}
          />
        ))}
      </div>
    )
  ) : (
    <div className="no-results">No songs found</div>
  )}
  </div>
</div>
  );
};

export default SongsList;