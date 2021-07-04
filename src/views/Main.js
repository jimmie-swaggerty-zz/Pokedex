import React from "react";
import { NavLink } from "react-router-dom";
import MyPoke from "../components/MyPoke";
const Main = (props) => {

    const {myPoke, updateMyPoke} = props
    return (
        <div className="container-fluid">
            <MyPoke myPoke={myPoke} updateMyPoke={updateMyPoke}/>
            <h2 className="bg bg-default">Search by...</h2>
            <div className="row">
                <div className="col-4">
                    <NavLink className="bg bg-red card" to="/pokemon">
                        All Pokemon
                    </NavLink>
                </div>
                <div className="col-4">
                    <NavLink className="bg bg-red card" to="/Generation">
                        by Generation
                    </NavLink>
                </div>
                <div className="col-4">
                    <NavLink className="bg bg-red card" to="/Type">
                        by Type
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Main;
