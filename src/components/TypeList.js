import React, { useState, useEffect } from "react";
import axios from "axios";

const TypeList = (props) => {
    const [types, setTypes] = useState([]);
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type/").then((res) => {
        console.log(res.data.results)
        setTypes(res.data.results);
        setLoaded(true);
    });
},[])

    return (
        <div className="container-fluid">
            <h2 className="bg bg-default">Types</h2>
            {loaded && <div className="row">
                {types.map((type, idx) => {
                    return <div className="col-3">
                        <div className={"card bg "+type.name}>
                        {type.name.slice(0,1).toUpperCase()+type.name.slice(1)}
                        </div>
                    </div>;
                })}
            </div>}
        </div>
    );
};

export default TypeList;
