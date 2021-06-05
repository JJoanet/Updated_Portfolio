import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar fixed-top">
            <div id="title" className="align-items-center">
                <img id="logo" src="./LogoImg.png" alt="JJ" />
                <p id="name">Jeremy Joanet</p>
            </div>
            <div className="nav flex-row-reverse text-center">
                <ul className="nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/Home"
                                    ? "active"
                                    : "inactive"
                            }
                        >
                            Home
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Projects"
                            className={window.location.pathname === "/Projects" ? "active" : "inactive"}
                        >
                            Projects
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Resume"
                            className={window.location.pathname === "/Resume" ? "active" : "inactive"}
                        >
                            Resume
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={window.location.pathname === "/Contact" ? "active" : "inactive"}
                        >
                            Contact
            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;