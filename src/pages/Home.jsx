import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2>Welcome to Leage Lobby</h2>
        <div>
            <Link to='./create-room'>Create Room</Link>
        </div>
    </div>
  )
}

export default Home