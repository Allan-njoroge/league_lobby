import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateRoom from './pages/CreateRoom';
import RoomOwner from './pages/RoomOwner';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-room" component={CreateRoom} />
        <Route path="/room-owner/:roomId" component={RoomOwner} />
      </Switch>
    </Router>
  )
}

export default App;