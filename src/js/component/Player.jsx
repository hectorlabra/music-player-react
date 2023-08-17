import React, { useState, useEffect, useRef } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaStepBackward, FaPlay, FaPause, FaStepForward } from 'react-icons/fa';

const Player = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    fetch('https://playground.4geeks.com/apis/fake/sound/songs')
      .then(response => response.json())
      .then(data => {
        setSongs(data);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  const playSong = (songUrl, index) => {
    if (audioRef.current) {
      audioRef.current.src = `https://playground.4geeks.com/apis/fake/sound/${songUrl}`;
      audioRef.current.play();
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextSong = () => {
    let nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(songs[nextIndex].url, nextIndex);
  };

  const playPreviousSong = () => {
    let previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(songs[previousIndex].url, previousIndex);
  };

  return (
    <div className="player-container">
      <div className="songs-list text-center">
        <h2>Lista de Canciones</h2>
        <ListGroup>
          {songs.map((song, index) => (
            <ListGroup.Item
              key={index}
              className={`border-0 text-white ${currentSongIndex === index ? 'bg-secondary' : 'bg-dark'}`}
              onClick={() => playSong(song.url, index)}
            >
              {song.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <audio ref={audioRef} />

      <div className="controls text-center bg-black p-4 fixed-bottom">
        <Button variant="light" className="control-button mx-2" onClick={playPreviousSong}>
          <FaStepBackward />
        </Button>
        <Button variant="light" className="control-button mx-2" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button variant="light" className="control-button mx-2" onClick={playNextSong}>
          <FaStepForward />
        </Button>
      </div>
    </div>
  );
};

export default Player;
