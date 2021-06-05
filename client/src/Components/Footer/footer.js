import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className = "fixed-bottom footer mt-auto py-1">
            <div id="footerdiv" className = "text-center">
                <span id="footertext">
                    Created by Jeremy Joanet, 2021
                </span>
            </div>
        </footer>
    )
}

export default Footer;