import React from "react";
import "./nav_menu.css"
import { Link } from "react-router-dom";

function NavMenu () {
    return <div id="nav-menu">
        <ul>
            <li><Link to={'chartley-website/home'}>Home</Link></li>
            <li><Link to={'chartley-website/blog'}>Blog</Link></li>
            <li><Link to={'chartley-website/about-me'}>About Me</Link></li>
        </ul>
    </div>
};

export default NavMenu