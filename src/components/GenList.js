import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeList from "./PokeList";
import {
    BrowserRouter as Router,
    useRouteMatch,
    useParams,
    Route,
    Switch,
    NavLink,
    Link
} from "react-router-dom";

const GenList = (props) => {
    const [gens, setGens] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [vis, setVis] = useState("show");
    const { path, url } = useRouteMatch();
    const { name } = useParams();
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/generation/").then((res) => {
            console.log("Gen", res.data.results);
            setGens(res.data.results);
            setLoaded(true);
        });
    }, []);

    const visHandler = (vis) => {
        if (vis === "show") {
            setVis("hide");
        } else {
            setVis("show");
        }
    };
    console.log("path", path);

    return (
        <div className="container-fluid">
            <Router>
                <h2
                    className={"bg bg-default "+vis}
                    onClick={(e) => {
                        e.preventDefault();
                        visHandler(vis);
                    }}
                >
                    Generations
                </h2>
                <div className={"row " + vis}>
                    {gens.map((gen, idx) => {
                        console.log(gen)
                        return (
                            <div className="col-3">
                                <Link
                                    className="card bg bg-red"
                                    to={url + "/" + gen.name}
                                >
                                    {gen.name.slice(0, 1).toUpperCase() +
                                        gen.name.slice(1)}
                                </Link>
                            </div>
                        );
                    })}
                </div>
                    <Route path={path+":name"}>
                        <PokeList type="generation/"/>
                    </Route>
            </Router>
        </div>
    );
};

export default GenList;
