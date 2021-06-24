import React, { useState, useEffect } from "react";
import {navigate} from '@reach/router'
import axios from "axios";
import {Generations} from '../Reference/Generations'


const GenList = (props) => {

    const {setGen} = props;

    // const updateGen = (url)=>{
    //     setGen(url)
    // }
    return (
        <div className="container">
            <div className="row-flex">
                {Generations.map((gen, idx) => {
                    return <div type="button" className="genbutton" key={idx} onClick={(e)=>{e.preventDefault(); setGen(gen);console.log(gen.url)}}>Generation {idx+1}</div>;
                })}
            </div>
        </div>
    );
};

export default GenList;
