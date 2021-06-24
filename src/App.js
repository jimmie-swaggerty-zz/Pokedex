import {useState} from 'react'
import {Router} from '@reach/router'
import PokeList from './components/PokeList'
import PokePage from './components/PokePage'
import './App.css';
import {Generations} from './Reference/Generations'
import NavBar from './components/NavBar'

function App() {
  const [gen, setGen] = useState(Generations[0])
  return (
    <div className="App">
      <NavBar setGen={setGen}/>
      <Router>
        <PokeList path="/home" gen={gen} default/>
        <PokePage path="/pokemon/:id"/>
      </Router>
    </div>
  );
}

export default App;
