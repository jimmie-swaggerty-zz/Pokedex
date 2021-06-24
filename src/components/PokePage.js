import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
// import DeleteButton from '../components/DeleteButton'
// import Moment from 'moment'

const PokePage = (props) => {
    const { id } = props;
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // console.log(props.id);
        axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then((res) => {
            setPoke(res.data);
            console.log(res.data);
            setLoaded(true);
        });
    }, [id]);
    const sprites = poke.sprites;
    const abilities = poke.abilities;
    const moves = poke.moves;
    console.log(abilities);
    return (
        // <div>
        //     {loaded && <div className="statsquare">
        //         <img src={sprites.front_default} alt={poke.name} className="sprite"></img>
        //         <div className="namebar">{poke.id} - {poke.name}</div>
        //     </div>}
        // </div>
        <div>
            {loaded && (
                <div className="container-fluid pokepage">
                    <div className="row">
                        <div className="col">
                            <img src={sprites.front_default} width="100%" alt={poke.name} />
                            {poke.id} - {poke.name}
                            <p>
                                {poke.types.map((type, index) => {
                                    return (
                                        <div
                                            className={
                                                "typetag " + type.type.name
                                            }
                                        >
                                            {type.type.name}
                                        </div>
                                    );
                                })}
                            </p>
                        </div>
                        <div className="col-8">
                            <p className="stats">
                                <span className="label">Abilities: </span>
                                {abilities.map((ability, index) => {
                                    return (
                                        <span className="ability">
                                            {ability.ability.name}{" "}
                                        </span>
                                    );
                                })}
                            </p>
                            <p className="stats">
                                <span className="label">Moves: </span>
                                {moves.map((move, index) => {
                                    return (
                                        <span className="move">
                                            {move.move.name}{" "}
                                        </span>
                                    );
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokePage;
