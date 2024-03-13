import React from 'react';
import { useParams } from 'react-router-dom';

const RoomOwner = () => {
  const { roomId } = useParams();

  return (
    <div>
      <h2>Room Owner</h2>
      <p>You are the owner of room: {roomId}</p>
    </div>
  );
};

export default RoomOwner;