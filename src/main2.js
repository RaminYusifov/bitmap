import React, { Component } from "react";
import "./main2.css"
import Test from "./photo/test-1.png.webp"


export default class Main2 extends Component {
    render() {
        return (
            <>
                <div className="main2">
                    <div className="block1">
                        <h4>Client's Feedback</h4>
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br />commodo consequat. Duis aute irure dolor in reprehenderit in<br />voluptate velit esse.</p>
                    </div>
                    <div className="block2">
                        <div>
                            <img src={Test} className="girl" />
                        </div>
                        <div className=" block3">
                            <p>Accessories Here you can find the best computer<br />accessory for your laptop, monitor, printer, scanner,<br />speaker, projector, hardware.</p>
                            <h4>Mark Alviro Wiens</h4>
                            <h6>CEO at Google</h6>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}