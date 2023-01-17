import React from "react";
import "./nav_menu.css"
import { Link } from "react-router-dom";

function NavMenu () {
    return <div id="nav-menu">
        <ul>
            <li><Link to={'..'}>Home</Link></li>
            <li><Link to={'blog'}>Blog</Link></li>
            <li><Link to={'about-me'}>About Me</Link></li>
        </ul>
    </div>
};

export default NavMenu