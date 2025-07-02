
  import React from 'react';

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <div className="song-card-header">
        <h2 className="song-title">
          <span className="detail-label">Title:</span> {song.title}
        </h2>
        <span className="song-year">{song.year}</span>
      </div>

      <div className="song-details">
        <p className="song-artist">
          <span className="detail-label">Artist:</span> {song.artist}
        </p>
        <p className="song-album">
          <span className="detail-label">Album:</span> {song.album}
        </p>
      </div>

      
    </div>
  );
};

export default SongCard;