import React from "react";
import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";

const LogReg = (props) => {
    return (
        <div className="container justify-content-center">
            <div className="headerbody">
                <p className="welcome">
                </p>
            </div>
            <div className="col-md-4 offset-md-4">
                <div className="col">
                    <Login />
                </div>
                <div className="col">
                    <RegisterUser />
                </div>
            </div>
        </div>
    );
};

export default LogReg;
