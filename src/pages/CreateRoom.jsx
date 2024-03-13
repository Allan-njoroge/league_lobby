import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateRoom = () => {
  const [fullName, setFullName] = useState('');
  const [roomId, setRoomId] = useState('');


  const generateRoomId = () => {
    // Logic to generate a unique room ID
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    //LETTERS array
    const letters = []
    for(let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }

    if(!fullName.trim()) {
        then(!newRoomId);
        return;
    }
    //function to generate ID
    function newRoomId() {
        let roomId = '';
        const characters = [...numbers, ...letters];

        for(let i = 0; i< 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            roomId += characters[randomIndex];
        }
        return roomId;
    }
    const generatedRoomId = newRoomId();
    setRoomId(generatedRoomId);
  };

  return (
    <div>
      <h2>Create a League</h2>
      <label htmlFor="fullName">Full Name:</label>
      <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
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
