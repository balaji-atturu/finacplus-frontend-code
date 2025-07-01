


// import { useState, useMemo } from 'react';
// import { songs } from '../mockSongs';
// import SongCard from './SongCard';

// const SongsList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('none');
//   const [groupBy, setGroupBy] = useState(null);

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
//         return acc;
//       }, {});

//       return Object.values(grouped).map(group => ({
//         ...group,
//         songs: [...group.songs].sort((a, b) => {
//           if (sortBy === 'none') return 0;
//           if (sortBy === 'year') return a.year - b.year;
//           return a[sortBy].localeCompare(b[sortBy]);
//         })
//       }));
//     }

//     // No grouping - flat sorting
//     return result.sort((a, b) => {
//       if (sortBy === 'none') return 0;
//       if (sortBy === 'year') return a.year - b.year;
//       return a[sortBy].localeCompare(b[sortBy]);
//     });
//   }, [searchTerm, sortBy, groupBy]);

//   return (
//     <div className="music-library">
//       <div className="controls">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search or Filter songs by title or album or artist..."
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
//             <option value="title">Group by Title</option>
//               <option value="artist">Group by Artist</option>
//               <option value="album">Group by Album</option>
//               <option value="year">Group by Year</option>
//             </select>
//           </div>
//         </div>

//         <div className="songs-container">
//           {processedSongs.length > 0 ? (
//             groupBy ? (
//               <div className="group-container">
//                 {processedSongs.map(group => (
//                   <div key={`group-${group.name}`} className="group">
//                     <h3 className="group-header">
//                       {groupBy === 'title' && `Title: ${group.name}`}
//                       {groupBy === 'artist' && `Artist: ${group.name}`}
//                       {groupBy === 'album' && `Album: ${group.name}`}
//                       {groupBy === 'year' && `Year: ${group.name}`}
//                     </h3>
//                     <div className="horizontal-group">
//                       {group.songs.map(song => (
//                         <SongCard
//                           key={`${group.name}-${song.id}`}
//                           song={song}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="horizontal-list">
//                 {processedSongs.map(song => (
//                   <SongCard
//                     key={song.id}
//                     song={song}
//                   />
//                 ))}
//               </div>
//             )
//           ) : (
//             <div className="no-results">No songs found matching your criteria</div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   export default SongsList;






// import { useState, useMemo } from 'react';
// import { songs as initialSongs } from '../mockSongs';
// import SongCard from './SongCard';

// const SongsList = () => {
//   const [songs] = useState(initialSongs);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('none');
//   const [groupBy, setGroupBy] = useState(null);

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
//         return acc;
//       }, {});

//       return Object.values(grouped).map(group => ({
//         ...group,
//         songs: [...group.songs].sort((a, b) => {
//           if (sortBy === 'none') return 0;
//           if (sortBy === 'year') return a.year - b.year;
//           return a[sortBy].localeCompare(b[sortBy]);
//         })
//       }));
//     }

//     // No grouping - flat sorting
//     return result.sort((a, b) => {
//       if (sortBy === 'none') return 0;
//       if (sortBy === 'year') return a.year - b.year;
//       return a[sortBy].localeCompare(b[sortBy]);
//     });
//   }, [songs, searchTerm, sortBy, groupBy]);

//   return (
//     <div className="music-library">
//       <div className="controls">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search or Filter songs by title or album or artist..."
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
//             <option value="title">Group by Title</option>
//             <option value="artist">Group by Artist</option>
//             <option value="album">Group by Album</option>
//             <option value="year">Group by Year</option>
//           </select>
//         </div>
//       </div>

//       <div className="songs-container">
//         {processedSongs.length > 0 ? (
//           groupBy ? (
//             <div className="group-container">
//               {processedSongs.map(group => (
//                 <div key={`group-${group.name}`} className="group">
//                   <h3 className="group-header">
//                     {groupBy === 'title' && `Title: ${group.name}`}
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
//           <div className="no-results">No songs found matching your criteria</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SongsList;




// import { useState, useEffect, useMemo } from 'react';
// import { songs } from '../mockSongs';
// import SongCard from './SongCard';

// const SongsList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('none');
//   const [groupBy, setGroupBy] = useState(null);
//   const [role, setRole] = useState(null); // ⬅️ Read from localStorage

//   const [allSongs, setAllSongs] = useState(songs);
//   const [newSong, setNewSong] = useState({ title: '', artist: '', album: '', year: '' });

//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');
//     setRole(storedRole);
//     console.log("🎯 Role fetched from localStorage:", storedRole);
//   }, []);

//   const handleAddSong = () => {
//     const id = Date.now();
//     setAllSongs([...allSongs, { ...newSong, id }]);
//     setNewSong({ title: '', artist: '', album: '', year: '' });
//   };

//   const handleDelete = (id) => {
//     setAllSongs(allSongs.filter((song) => song.id !== id));
//   };

//   const processedSongs = useMemo(() => {
//     let result = [...allSongs];

//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       result = result.filter(song =>
//         song.title.toLowerCase().includes(term) ||
//         song.artist.toLowerCase().includes(term) ||
//         song.album.toLowerCase().includes(term)
//       );
//     }

//     if (groupBy) {
//       const grouped = result.reduce((acc, song) => {
//         const key = song[groupBy] || 'Unknown';
//         if (!acc[key]) {
//           acc[key] = {
//             name: key,
//             songs: [],
//             sortValue:
//               sortBy === 'year' ? song.year :
//               ['title', 'album', 'artist'].includes(sortBy) ? song[sortBy].toLowerCase() : 0
//           };
//         }
//         acc[key].songs.push(song);
//         return acc;
//       }, {});

//       return Object.values(grouped).map(group => ({
//         ...group,
//         songs: [...group.songs].sort((a, b) =>
//           sortBy === 'year' ? a.year - b.year : a[sortBy]?.localeCompare(b[sortBy])
//         )
//       }));
//     }

//     return result.sort((a, b) =>
//       sortBy === 'year' ? a.year - b.year : a[sortBy]?.localeCompare(b[sortBy])
//     );
//   }, [searchTerm, sortBy, groupBy, allSongs]);

//   return (
//     <div className="music-library">
//       <div className="controls">
//         <input
//           type="text"
//           placeholder="Search songs..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="none">No Sorting</option>
//           <option value="title">Title</option>
//           <option value="artist">Artist</option>
//           <option value="album">Album</option>
//           <option value="year">Year</option>
//         </select>

//         <select value={groupBy || ''} onChange={(e) => setGroupBy(e.target.value || null)}>
//           <option value="">No Grouping</option>
//           <option value="title">Title</option>
//           <option value="artist">Artist</option>
//           <option value="album">Album</option>
//           <option value="year">Year</option>
//         </select>
//       </div>

//       {role === 'admin' && (
//         <div className="add-song-form">
//           <h3>Add Song</h3>
//           <input
//             type="text"
//             placeholder="Title"
//             value={newSong.title}
//             onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Artist"
//             value={newSong.artist}
//             onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Album"
//             value={newSong.album}
//             onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Year"
//             value={newSong.year}
//             onChange={(e) => setNewSong({ ...newSong, year: Number(e.target.value) })}
//           />
//           <button onClick={handleAddSong}>Add Song</button>
//         </div>
//       )}

//       <div className="songs-container">
//         {processedSongs.length > 0 ? (
//           groupBy ? (
//             processedSongs.map(group => (
//               <div key={group.name}>
//                 <h3>{group.name}</h3>
//                 {group.songs.map(song => (
//                   <SongCard
//                     key={song.id}
//                     song={song}
//                     onDelete={role === 'admin' ? () => handleDelete(song.id) : null}
//                   />
//                 ))}
//               </div>
//             ))
//           ) : (
//             processedSongs.map(song => (
//               <SongCard
//                 key={song.id}
//                 song={song}
//                 onDelete={role === 'admin' ? () => handleDelete(song.id) : null}
//               />
//             ))
//           )
//         ) : (
//           <p>No songs found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SongsList;












import { useState, useMemo } from 'react';
import { songs as initialSongs } from '../mockSongs';
import SongCard from './SongCard';
//import './Styles1.css';
import '../App.css';

const SongsList = ({ role }) => {
  const [songs, setSongs] = useState(initialSongs);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('none');
  const [groupBy, setGroupBy] = useState(null);
  const [newSong, setNewSong] = useState({ title: '', artist: '', album: '', year: '' });

  const handleAddSong = () => {
    if (!newSong.title || !newSong.artist || !newSong.album || !newSong.year) {
      alert('Please fill all fields');
      return;
    }

    const newSongWithId = {
      id: songs.length + 1,
      title: newSong.title,
      artist: newSong.artist,
      album: newSong.album,
      year: parseInt(newSong.year),
    };

    setSongs([...songs, newSongWithId]);
    setNewSong({ title: '', artist: '', album: '', year: '' });
  };

  const handleDelete = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  const processedSongs = useMemo(() => {
    let result = [...songs];

    // Filtering
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(song =>
        song.title.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term) ||
        song.album.toLowerCase().includes(term)
      );
    }

    // Grouping
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

        // Update group sortValue
        if (sortBy === 'year') {
          acc[key].sortValue = Math.min(acc[key].sortValue, song.year);
        } else if (['title', 'album', 'artist'].includes(sortBy)) {
          if (song[sortBy].toLowerCase() < acc[key].sortValue) {
            acc[key].sortValue = song[sortBy].toLowerCase();
          }
        }

        return acc;
      }, {});

      // Convert to array and sort groups
      const sortedGroups = Object.values(grouped).sort((a, b) => {
        if (sortBy === 'none') return 0;
        if (sortBy === 'year') return a.sortValue - b.sortValue;
        return a.sortValue.localeCompare(b.sortValue);
      });

      // Sort songs inside each group
      return sortedGroups.map(group => ({
        ...group,
        songs: [...group.songs].sort((a, b) => {
          if (sortBy === 'none') return 0;
          if (sortBy === 'year') return a.year - b.year;
          return a[sortBy].localeCompare(b[sortBy]);
        })
      }));
    }

    // No grouping — flat sorting
    return result.sort((a, b) => {
      if (sortBy === 'none') return 0;
      if (sortBy === 'year') return a.year - b.year;
      return a[sortBy].localeCompare(b[sortBy]);
    });
  }, [songs, searchTerm, sortBy, groupBy]);

  return (
    <div className="music-library">
      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search or Filter songs by title or album or artist..."
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
            <option value="title">Group by Title</option>
            <option value="artist">Group by Artist</option>
            <option value="album">Group by Album</option>
            <option value="year">Group by Year</option>
          </select>
        </div>
      </div>

      {role === 'admin' && (
        <div className="add-song-form">
          <input
            placeholder="Title"
            value={newSong.title}
            onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
          />
          <input
            placeholder="Artist"
            value={newSong.artist}
            onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
          />
          <input
            placeholder="Album"
            value={newSong.album}
            onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
          />
          <input
            type="number"
            placeholder="Year"
            value={newSong.year}
            onChange={(e) => setNewSong({ ...newSong, year: e.target.value })}
          />
          <button onClick={handleAddSong}>Add Song</button>
        </div>
      )}

      <div className="songs-container">
        {processedSongs.length > 0 ? (
          groupBy ? (
            <div className="group-container">
              {processedSongs.map(group => (
                <div key={`group-${group.name}`} className="group">
                  <h3 className="group-header">
                    {groupBy === 'title' && `Title: ${group.name}`}
                    {groupBy === 'artist' && `Artist: ${group.name}`}
                    {groupBy === 'album' && `Album: ${group.name}`}
                    {groupBy === 'year' && `Year: ${group.name}`}
                  </h3>
                  <div className="horizontal-group">
                    {group.songs.map(song => (
                      <SongCard
                        key={`${group.name}-${song.id}`}
                        song={song}
                        onDelete={role === 'admin' ? () => handleDelete(song.id) : null}
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
                  onDelete={role === 'admin' ? () => handleDelete(song.id) : null}
                />
              ))}
            </div>
          )
        ) : (
          <div className="no-results">No songs found matching your criteria</div>
        )}
      </div>
    </div>
  );
};

export default SongsList;