import React, { Component } from "react";
import "./header.css";
import Logo from "./photo/logo.png.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Burger from "./burger-block";


export default class Header extends Component {
    state = {
        showBurger: false
    }

    burgerFunc = () => {
        let { showBurger } = this.state
        this.setState({ showBurger: !showBurger })
    }

    render() {
        let { showBurger } = this.state

        return (
            <>
                <div className="bgi">
                    <div className="bgc">
                        <Link><img src={Logo} className="logo" /></Link>
                        <div className="info">
                            <Link to={"/"} style={{ color: "#fcdc00" }}>HOME</Link>
                            <p>GALLERY</p>
                            <p>SERVICES</p>
                            <Link to={"/about"}>ABOUT</Link>
                            <p>ELEMENTS</p>
                            <p>BLOG</p>
                            <Link to={"/contact"}>CONTACT</Link>
                        </div>
                        <FontAwesomeIcon icon={faSearch} className="lupa" />
                        <FontAwesomeIcon icon={faBars} onClick={this.burgerFunc} className="bars" />
                    </div>
                    <div className="text">
                        <h2>Bitmap Photography</h2>
                        <p>If you are looking at blank cassettes on the web, you may be<br />very confused at the difference in price.</p>
                        <button className="eg">EXPLORE GALLERY</button>
                    </div>
                </div>
                {showBurger && <Burger />}
            </>
        )
    }
}