import React, { useState, useEffect, useRef } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/bootstrap.min.css';

const Player = () => {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    fetch('http://assets.breatheco.de/apis/sound/songs')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const playSong = (index) => {
    if (audioRef.current) {
      audioRef.current.src = songs[index].url;
      audioRef.current.play();
      setCurrentSongIndex(index);
    }
  };

  const playNextSong = () => {
    let nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  };

  const playPreviousSong = () => {
    let previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(previousIndex);
  };

  return (
    <div className="player-container">
      <div className="songs-list">
        <ListGroup>
          {songs.map((song, index) => (
            <ListGroup.Item key={index} action onClick={() => playSong(index)}>
              {song.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <audio ref={audioRef} controls />
      <div className="controls">
        <Button variant="secondary" onClick={playPreviousSong}>Anterior</Button>
        <Button variant="primary" onClick={() => audioRef.current?.pause()}>Pausa</Button>
        <Button variant="primary" onClick={() => audioRef.current?.play()}>Reproducir</Button>
        <Button variant="secondary" onClick={playNextSong}>Siguiente</Button>
      </div>
    </div>
  );
};

export default Player;
