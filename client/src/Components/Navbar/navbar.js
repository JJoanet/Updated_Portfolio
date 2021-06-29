import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar static-top">
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
                            //This onClick was added because the site wasn't reflecting the class change from inactive -> active
                            onClick={() => {window.location.href="/"}}
                        >
                            Home
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Projects"
                            className={window.location.pathname === "/Projects" ? "active" : "inactive"}
                            //This onClick was added because the site wasn't reflecting the class change from inactive -> active
                            onClick={() => {window.location.href="/Projects"}}
                        >
                            Projects
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Resume"
                            className={window.location.pathname === "/Resume" ? "active" : "inactive"}
                            //This onClick was added because the site wasn't reflecting the class change from inactive -> active
                            onClick={() => {window.location.href="/Resume"}}
                        >
                            Resume
            </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={window.location.pathname === "/Contact" ? "active" : "inactive"}
                            //This onClick was added because the site wasn't reflecting the class change from inactive -> active
                            onClick={() => {window.location.href="/Contact"}}
                        >
                            Contact
            </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;