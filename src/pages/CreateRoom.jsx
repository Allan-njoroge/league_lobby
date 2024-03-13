import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CreateRoom = () => {
  const [leagueName, setLeagueName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false); // New state variable

  const generateRoomId = () => {
    // Logic to generate a unique room ID
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    const letters = []
    for(let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }

    if(!leagueName.trim()) {
        setButtonClicked(true); // Set buttonClicked to true
        return;
    }

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
    <div className="h-full w-full flex justify-center items-center">
        <div className="w-full mx-auto items-center text-center grid">
            <h1 className="text-2xl md:text-4xl text-blue-300">Create a League</h1>
            
            <input type="text" placeholder="League Name" id="leagueName" value={leagueName} onChange={(e) => setLeagueName(e.target.value)} required className="w-3/4 md:w-1/2 mx-auto h-8 bg-transparent border-b-2 border-blue-300 outline-none focus:outline-none px-6 my-6 text-center"/>
            {buttonClicked && !leagueName.trim() && <p className="text-red-300">* Please enter the league name</p>}
            <div>
                <Button onClick={generateRoomId} className="text-xl rounded-full bg-blue-300 text-black hover:bg-transparent hover:text-blue-300 hover:border-2 hover:border-blue-300 my-6">
                    Generate Room ID
                </Button>
            </div>
            {roomId && (
                <div>
                <p>Room ID: {roomId}</p>
                <Link to={`/room-owner/${roomId}`}><Button>Confirm Create Room</Button></Link>
                </div>
            )}
        </div>
    </div>
  );
};

export default CreateRoom;
