import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"


const Home = () => {
  return (
    <div className="flex justify-center w-full h-full items-center">
        <div className=" items-center rounded-xl">
            <h2 className="text-2xl md:text-4xl text-white">Welcome to <span className="text-blue-300">League</span> Lobby</h2>
            <div className="grid gap-5 mt-10">
                {/* Create Room Button */}
                <Button className="text-xl rounded-full bg-blue-300 text-black hover:bg-transparent hover:text-blue-300 hover:border-2 hover:border-blue-300">
                    <Link to='./create-room' className="w-full">Create Room</Link>
                </Button>
                {/* Join Room Button */}
                <Button className="text-xl rounded-full bg-transparent text-blue-300 border-2 border-blue-300 hover:bg-blue-300 hover:text-black">
                    <Link to='./create-room' className="w-full">Join Room</Link>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Home