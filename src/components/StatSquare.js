import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
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
            console.log(res.data);
            setLoaded(true);
        });
    }, []);
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
                <div class="card statsquare">
                    <img
                        src={sprites.front_default}
                        className="card-img-top sprite"
                        alt={poke.name}
                    />
                    <div class="card-body">
                        <h5 class="card-title namebar">
                            {poke.id} - {poke.name}
                        </h5>
                        <p class="card-text">
                            {loaded &&
                                poke.types.map((type, index) => {
                                    return (
                                        <div className="typetag">
                                            {type.type.name}
                                        </div>
                                    );
                                })}
                        </p>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/pokemon/" + poke.id);
                            }}
                        >
                            More Info
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatSquare;
