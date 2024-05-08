import React, { Component } from "react";
import "./main4.css"
import Ins1 from "./photo/ins-1.jpg.webp"
import Ins2 from "./photo/ins-2.jpg.webp"
import Ins3 from "./photo/ins-3.jpg.webp"
import Ins4 from "./photo/ins-4.jpg.webp"
import Ins5 from "./photo/ins-5.jpg.webp"
import Ins6 from "./photo/ins-6.jpg.webp"


export default class Main4 extends Component {
    render() {
        return (
            <>
                <div className="main4">
                    <button className="fuoi">Follow us on instagram</button>
                </div>
                <div className="cont3">
                    <div className="ins-all">
                        <img src={Ins1} />
                    </div>
                    <div className="ins-all">
                        <img src={Ins2} />
                    </div>
                    <div className="ins-all">
                        <img src={Ins3} />
                    </div>
                    <div className="ins-all">
                        <img src={Ins4} />
                    </div>
                    <div className="ins-all">
                        <img src={Ins5} />
                    </div>
                    <div className="ins-all">
                        <img src={Ins6} />
                    </div>
                </div>
            </>
        )
    }
}