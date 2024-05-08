import React, { Component } from "react";
import "./header2.css"
import Logo from "./photo/logo.png.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Burger from "./burger-block";


export default class Header2 extends Component {
    state = {
        showBurger: false
    }

    burgerFunc = () => {
        let { showBurger } = this.state
        this.setState({ showBurger: !showBurger })
    }

    render() {
        let { showBurger } = this.state
        let { title, desc } = this.props;

        return (
            <>
                <div className="bgi2">
                    <div className="bgc">
                        <Link to={"/"}><img src={Logo} className="logo" /></Link>
                        <div className="info">
                            <Link to={"/"}>HOME</Link>
                            <p>GALLERY</p>
                            <p>SERVICES</p>
                            <Link to={"/about"} style={{ color: title === "About" ? "#fcdc00" : "white" }}>ABOUT</Link>
                            <p>ELEMENTS</p>
                            <p>BLOG</p>
                            <Link to={"/contact"} style={{ color: title === "Contact" ? "#fcdc00" : "white" }}>CONTACT</Link>
                        </div>
                        <FontAwesomeIcon icon={faSearch} className="lupa" />
                        <FontAwesomeIcon icon={faBars} onClick={this.burgerFunc} className="bars" />
                    </div>
                    <div className="text2">
                        <h2>{title} Us</h2>
                        <div>
                            <Link to={"/"}>Home <FontAwesomeIcon icon={faArrowRightLong} style={{ color: "white" }} /></Link>
                            <Link to={title === "About" ? "/about" : title === "Contact" ? "/contact" : "/"}>{desc}</Link>
                        </div>
                    </div>
                </div>
                {showBurger && <Burger />}
            </>
        )
    }
}