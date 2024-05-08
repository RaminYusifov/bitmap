import React, { Component } from "react";
import "./burger-block.css";
import Logo from "./photo/logo.png.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class Burger extends Component {
    clickBurger = () => {
        window.location.reload()
    }

    render() {
        let { title } = this.props;

        return (
            <>
                <div className="burger-menu-block">
                    <div className="burger-menu-button">
                        <Link to={"/"}><img src={Logo} className="logo" /></Link>
                        <FontAwesomeIcon icon={faXmark} onClick={this.clickBurger} className="burgen-menu-xmark" />
                    </div>
                    <div className="bm">
                        <Link to={"/"} className="burger-menu-nav" style={{ color: "#fcdc00" }}>HOME</Link>
                        <Link className="burger-menu-nav">GALLERY</Link>
                        <Link className="burger-menu-nav">SERVICES</Link>
                        <Link to={"/about"} className="burger-menu-nav" style={{ color: title === "About" ? "#fcdc00" : "white" }}>ABOUT</Link>
                        <Link className="burger-menu-nav">ELEMENTS</Link>
                        <Link className="burger-menu-nav">BLOG</Link>
                        <Link to={"/contact"} className="burger-menu-nav" style={{ color: title === "Contact" ? "#fcdc00" : "white" }}>CONTACT</Link>
                        <p className="search"><FontAwesomeIcon icon={faSearch} className="lupa" /></p>
                    </div>
                </div>
            </>
        )
    }
}