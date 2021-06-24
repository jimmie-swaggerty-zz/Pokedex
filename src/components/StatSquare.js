import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import "./StatSquare.css";
// import DeleteButton from '../components/DeleteButton'
// import Moment from 'moment'

const StatSquare = (props) => {
    const { id, url } = props;
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // console.log(props.id);
        axios.get(url).then((res) => {
            setPoke(res.data);
            setLoaded(true);
        });
    }, [url]);
    const sprites = poke.sprites;
    return (
        // <div>
        //     {loaded && <div className="statsquare">
        //         <img src={sprites.front_default} alt={poke.name} className="sprite"></img>
        //         <div className="namebar">{poke.id} - {poke.name}</div>
        //     </div>}
        // </div>
        <div>
            {loaded && (
                // <div className={"card "+poke.types[0].type.name+" statsquare"}>
                <div className="card statsquare">
                    <span className="pokeid">{poke.id}</span>
                    <img
                        src={sprites.front_default}
                        className="card-img-top sprite"
                        alt={poke.name}
                    />
                    <div className="card-body">
                        <p className="card-title namebar">
                            {poke.name}
                        </p>
                        <div className="card-text">
                            {loaded &&
                                poke.types.map((type, index) => {
                                    return (
                                        <div
                                            className={
                                                "typetag " + type.type.name
                                            }
                                            key={index}
                                        >
                                            {type.type.name}
                                        </div>
                                    );
                                })}
                        </div>
                        {/* <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/pokemon/" + poke.id);
                            }}
                        >
                            More Info
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatSquare;
