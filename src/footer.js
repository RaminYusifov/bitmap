import React, { Component } from "react";
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="foot">
                    <div className="cnt">
                        <h3 className="zagolovok">About Me</h3>
                        <p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />sed do eiusmod tempor incididunt ut labore dolore</p>
                        <p className="txt">Copyright ©2024 All rights reserved | This template is<br />made with <FontAwesomeIcon icon={faHeart} /> by <span className="cl">Colorlib</span></p>
                    </div>
                    <div className="cnt">
                        <h3 className="zagolovok">Newsletter</h3>
                        <p className="txt">Stay updated with our latest trends</p>
                        <form className="form1">
                            <input type="email" placeholder="Enter email eddress" className="input1" />
                            <button className="rightArrow"><FontAwesomeIcon icon={faArrowRightLong} /></button>
                        </form>
                    </div>
                    <div className="cnt">
                        <h3 className="zagolovok">Follow Me</h3>
                        <p className="txt">Let us be social</p>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="logotip">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="logotip">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer" className="logotip">
                            <FontAwesomeIcon icon={faDribbble} />
                        </a>
                        <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="logotip">
                            <FontAwesomeIcon icon={faBehance} />
                        </a>
                    </div>
                </div>
            </>
        )
    }
}