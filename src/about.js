import React, { Component } from "react";
import "./about.css"
import Find1 from "./photo/find-1.jpg.webp"
import Header2 from "./header2";
import Main2 from "./main2";
import Main3 from "./main3";
import Main4 from "./main4";
import Footer from "./footer";


export default class About extends Component {
    render() {
        return (
            <>
                <Header2 title={"About"} desc={"About Us"} />
                <div className="about2">
                    <div className="about3">
                        <img src={Find1} />
                        <div className="find_text">
                            <div className="find_text_inner">
                                <h4>Did not find your Package Feel free to<br />ask us. We'll make it for you</h4>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,”<br />women face higher conduct standards especially in the workplace.<br />That's why it's crucial that, as women, our behavior on the job is<br />beyond reproach. inappropriate behavior is often laughed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Main2 />
                <Main3 />
                <Main4 />
                <Footer />
            </>
        )
    }
}