import {Router} from '@reach/router'
import PokeList from './components/PokeList'
import PokePage from './components/PokePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>PokeDex</h1>
      <Router>
        <PokeList path="home" default/>
        <PokePage path="/pokemon/:id"/>
      </Router>
    </div>
  );
}

export default App;
