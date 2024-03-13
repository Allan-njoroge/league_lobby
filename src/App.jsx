import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateRoom from './pages/CreateRoom';
import RoomOwner from './pages/RoomOwner';

const App = () => {
  return (
    <Router>
      <div  className="w-full h-[100vh] items-center flex justify-center bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/room-owner/:roomId" element={<RoomOwner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;