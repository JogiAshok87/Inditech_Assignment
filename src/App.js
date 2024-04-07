import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Campaign from './Components/Campaign'
import Multiplayer from './Components/Multiplayer'
import Soldier from './Components/Soldier'
import Store from './Components/Store'
import More from './Components/More'
import './App.css';

function App() {
  return (
    
    
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Multiplayer" element={<Multiplayer />}/>
        <Route path="/Campaign" element={<Campaign />}/>
        <Route path="/Soldier" element={<Soldier />}/>
        <Route path="/Store" element={<Store />}/>
        <Route path="/More" element={<More />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
