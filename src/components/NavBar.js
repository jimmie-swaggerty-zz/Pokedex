import React from "react";
import { Generations } from "../Reference/Generations";
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    const { setGen } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-red">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    PokeDex
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pokemon">All Pokemon</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/generation">By Generation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/type">By Type</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
