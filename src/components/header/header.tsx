import React from "react";
import SocialBar from "../social_bar/social_bar";
import "./header.css"

function Header () {
    return <div id="header-container">
        <h1>Chartley Designs</h1>
        <SocialBar />
    </div>
};

export default Header