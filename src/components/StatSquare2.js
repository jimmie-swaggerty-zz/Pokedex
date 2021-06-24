import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";
import "./StatSquare.css";
// import DeleteButton from '../components/DeleteButton'
// import Moment from 'moment'

const StatSquare = (props) => {
    const { url, setCurrentId, currentId} = props;
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
    var status = ""
    if (poke.id === currentId){
        status="active"
    }
    return (
        <div>
            {loaded && (
                <div className={"card hoverable text-white "+status}onClick={e=> {e.preventDefault();setCurrentId(poke.id)}}>
                    {poke.id}
                    <img
                        src={sprites.front_default}
                        class="card-img"
                        alt={poke.name}
                    />
                    {/* <div class="card-img-overlay hoverit">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div> */}
                    {poke.name}
                </div>
            )}
        </div>
    );
};

export default StatSquare;
