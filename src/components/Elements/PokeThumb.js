import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const PokeThumb = (props) => {
    const { id, url } = props;
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data)
            setPoke(res.data);
            setLoaded(true);
        });
    }, [url]);
    const sprites = poke.sprites;
    return (
        <div>
            {loaded && (
                // <div className={"card "+poke.types[0].type.name+" statsquare"}>
                <div className="bg bg-red card">
                    <div className="row">{poke.name}</div>
                    <div className="row align-items-end">
                        <div className="col align-items-end">
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
                        <div className="col">
                            <img
                                src={sprites.front_default}
                                className="img-fluid"
                                alt={poke.name}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokeThumb;
