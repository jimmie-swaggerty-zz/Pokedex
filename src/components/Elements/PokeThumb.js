import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const PokeThumb = (props) => {
    const { id, url } = props;
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const apiURL = url || "https://pokeapi.co/api/v2/pokemon/" + id;
    const {myPoke, updateMyPoke} = props;
    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data);
            setPoke(res.data);
            setLoaded(true);
        });
    }, [url]);

    const clickHandler = () => {
        axios.put('http://localhost:8000/api/user/poke-update',{"id":poke.id}, {
            withCredentials: true
          })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
            //   if (err.response.status===401){
            //       setAuthError("Please sign in to continue")
            //   }
            //   else if (err.response.status===403) {
            //       setAuthError(err.response.data.message)
            //     }
            //   else{
            //       setErrors(err.response.data.errors);
            //   }
            console.log("err",err)
            })
        }


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
                    <button onClick={e=>{e.preventDefault; clickHandler()}}>Add</button>
                </div>
            )}
        </div>
    );
};

export default PokeThumb;
