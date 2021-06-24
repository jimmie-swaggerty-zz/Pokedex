import React from "react";
import { Generations } from "../Reference/Generations";
import { navigate } from "@reach/router";

const NavBar = (props) => {
    const { setGen } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li class="navitem dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                id="navbarScrollingDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                By Generation
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarScrollingDropdown"
                            >
                                {Generations.map((gen, idx) => {
                                    return (
                                        <li className="navitem">
                                            <div
                                                type="button"
                                                key={idx}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setGen(gen);
                                                    console.log(gen.url);
                                                }}
                                            >
                                                {gen.name}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
