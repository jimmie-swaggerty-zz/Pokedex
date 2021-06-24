import React, { useState, useEffect } from "react";
import axios from "axios";
import StatSquare from "./StatSquare2";
// import { navigate, Link } from '@reach/router';
// import DeleteButton from '../components/DeleteButton'
// import Moment from 'moment'

const PokeList = (props) => {
    const [pokes, setPokes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { gen, setCurrentId, currentId } = props;

    useEffect(() => {
        axios
            .get(gen.url)
            .then((res) => {
                setPokes(res.data.results);
                setLoaded(true);
            });
    }, [gen]);

    return (
        <div className="container">
            <div className="row-flex">
                {loaded &&
                    pokes.map((poke, index) => {
                        return (
                            <div className="pokedex" key={index}>
                                <StatSquare setCurrentId={setCurrentId} currentId={currentId} url={poke.url}/>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default PokeList;
