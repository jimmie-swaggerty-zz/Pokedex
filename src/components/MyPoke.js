import React, { useState, useEffect } from "react";
import PokeThumb from "./Elements/PokeThumb";
import axios from "axios";

const MyPoke = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [pokes, setPokes] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/currentUser", {withCredentials:true}).then((res) => {
            setPokes(res.data[0].Pokemon);
            console.log("user",res.data[0].Pokemon);
            setLoaded(true);
        });
    }, []);
    return (
        <div>
            <h2 className="bg bg-default">My Poke</h2>
            <div className="container-fluid">
                <div className="row">
                    {loaded &&
                        pokes.map((poke, index) => {
                            return (
                                <div className="col-3">
                                    <PokeThumb
                                        url={
                                            "https://pokeapi.co/api/v2/pokemon/" + poke.id
                                        }
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
export default MyPoke;
