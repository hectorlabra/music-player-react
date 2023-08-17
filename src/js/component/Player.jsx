import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaStepBackward, FaPlay, FaStepForward } from 'react-icons/fa';

const Player = () => {
  return (
    <div className="player-container bg-dark text-white p-3">
      <div className="songs-list text-center mb-4">
        <h2 className="mb-5">Lista de Canciones</h2>
        <ListGroup>
          <ListGroup.Item className="bg-dark border-0 text-white">Nombre canción 1</ListGroup.Item>
          <div className="divider bg-secondary my-2"></div>
          <ListGroup.Item className="bg-dark border-0 text-white">Nombre canción 2</ListGroup.Item>
          <div className="divider bg-secondary my-2"></div>
          {/* Agregar más elementos de la lista aquí */}
        </ListGroup>
      </div>
      <div className="divider bg-secondary mb-4"></div>
      <div className="controls fixed-bottom d-flex justify-content-center p-3 bg-dark">
        <Button variant="light" className="control-button">
          <FaStepBackward /> {/* Icono de retroceder */}
        </Button>
        <Button variant="light" className="control-button mx-3">
          <FaPlay /> {/* Icono de play */}
        </Button>
        <Button variant="light" className="control-button">
          <FaStepForward /> {/* Icono de avanzar */}
        </Button>
      </div>
    </div>
  );
};

export default Player;