import React, { useState, useEffect } from "react";
import axios from "axios";
import StatSquare from "./StatSquare";
// import { navigate, Link } from '@reach/router';
// import DeleteButton from '../components/DeleteButton'
// import Moment from 'moment'

const PokeList = (props) => {
    const [pokes, setPokes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [param, setParam] = useState("limit=150");
    const gens = [{ name: "1st Generation", param: "limit=150" },
{name: "2nd Generation", param: "limit=100&offset=151"}];

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?"+param)
        // axios.get("https://pokeapi.co/api/v2/pokemon?offset=151&limit=100")
            .then((res) => {
                setPokes(res.data.results);
                console.log(res.data.results)
                setLoaded(true);
        }, [param]);
    });

    return (
        <div className="container">
            <div className="row-flex">
                {gens.map((gen, idx) => {
                    return <button type="button" className="btn btn-primary" onClick={(e)=>{e.preventDefault(); setParam(gen.param)}}>{gen.name}</button>;
                })}
            </div>
            <div className="row-flex">
                {loaded &&
                    pokes.map((poke, index) => {
                        return (
                            <div className="pokedex" key={index}>
                                <StatSquare id={poke.id} url={poke.url} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default PokeList;
