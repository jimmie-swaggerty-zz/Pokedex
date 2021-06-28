import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeThumb from "./Elements/PokeThumb";
import { useParams, useRouteMatch } from "react-router-dom";

const PokeList = (props) => {
    const [pokes, setPokes] = useState([]);
    const [navs, setNavs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {type} = props
    const {name} = useParams()
    const { path, url } = useRouteMatch()
    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/"+type+name);
    console.log("currentURL"+currentUrl)

    useEffect(() => {
        axios.get(currentUrl).then((res) => {
            console.log(res.data.pokemon_species)
            setPokes(res.data.pokemon_species);
            setNavs(res.data);
            setLoaded(true);
        });
    }, []);

    const backClickHandler = (e) => {
        e.preventDefault();
        setCurrentUrl(navs.previous);
    };
    const frontClickHandler = (e) => {
        e.preventDefault();
        if (navs.next !== null) {
            setCurrentUrl(navs.next);
        }
    };

    return (
        <div>
            <h2 className="bg bg-default">

                {name.slice(0, 1).toUpperCase() + name.slice(1)}
            </h2>
            <div className="row">
                {loaded &&
                    pokes.map((poke, index) => {
                        return (
                            <div className="col-3">
                                <PokeThumb url={"https://pokeapi.co/api/v2/pokemon/"+poke.name} />
                            </div>
                        );
                    })}
                <button onClick={backClickHandler} id="prevButton">
                    Previous
                </button>
                <button onClick={frontClickHandler} id="nextButton">
                    Next
                </button>
            </div>
        </div>
    );
};

export default PokeList;
