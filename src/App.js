import React, {useState} from 'react'
import {Router} from '@reach/router'
import PokeList from './components/PokeList'
import PokePage from './components/PokePage'
import './App.css';
import {Generations} from './Reference/Generations'
import NavBar from './components/NavBar'

function App() {
  const [gen, setGen] = useState(Generations[0])
  const [currentId, setCurrentId] = useState(1)
  return (
    <div className="App">
      <NavBar setGen={setGen}/>
      <PokePage id={currentId}/>
      <Router>
        <PokeList path="/home" gen={gen} setCurrentId={setCurrentId} currentId={currentId} default/>
        {/* <PokePage path="/pokemon/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
