import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Reference/types.css";
import { Generations } from "./Reference/Generations";
import NavBar from "./components/NavBar";
import GenList from "./components/GenList";
import TypeList from "./components/TypeList";
import AllPoke from "./views/AllPoke";
import Main from "./views/Main";
function App() {
    const [gen, setGen] = useState(Generations[0]);
    const [currentId, setCurrentId] = useState(1);
    return (
        <Router>
            <div className="App">
                <NavBar setGen={setGen} />
                <Route path="/home" default>
                    <Main />
                </Route>
                <Route path="/generation/">
                    <GenList />
                </Route>
                <Route path="/type">
                    <TypeList />
                </Route>
                <Route path="/pokemon">
                        <AllPoke />
                    </Route>
            </div>
        </Router>
    );
}

export default App;
