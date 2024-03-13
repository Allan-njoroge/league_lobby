import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateRoom = () => {
  const [fullName, setFullName] = useState('');
  const [roomId, setRoomId] = useState('');

  const generateRoomId = () => {
    // Logic to generate a unique room ID
    const generatedRoomId = 34564;
    setRoomId(generatedRoomId);
  };

  return (
    <div>
      <h2>Create a League</h2>
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <button onClick={generateRoomId}>Generate Room ID</button>
      {roomId && (
        <div>
          <p>Room ID: {roomId}</p>
          <Link to={`/room-owner/${roomId}`}><button>Confirm Create Room</button></Link>
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
