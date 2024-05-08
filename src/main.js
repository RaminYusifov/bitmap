import React, { Component } from "react";
import "./main.css";
import Gallery1 from "./photo/gallery-1.jpg.webp"
import Gallery2 from "./photo/gallery-2.jpg.webp"
import Gallery3 from "./photo/gallery-3.jpg.webp"
import Gallery4 from "./photo/gallery-4.jpg.webp"
import Gallery5 from "./photo/gallery-5.jpg.webp"
import Gallery6 from "./photo/gallery-6.jpg.webp"
import Gallery7 from "./photo/gallery-7.jpg.webp"
import Gallery8 from "./photo/gallery-8.jpg.webp"
import Gallery9 from "./photo/gallery-9.jpg.webp"
import Gallery10 from "./photo/gallery-10.jpg.webp"
import Gallery11 from "./photo/gallery-11.jpg.webp"
import Gallery12 from "./photo/gallery-12.jpg.webp"


export default class Main extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <div className="container">
                        <div className="isotope_fillter">
                            <ul className="gallery_filter">
                                <li className="first"><a href="#">All</a></li>
                                <li><a href="#">Approved</a></li>
                                <li><a href="#">Unapproved</a></li>
                                <li><a href="#">Unviewed</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="all-images">
                        <div className="images">
                            <img src={Gallery1} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery2} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery3} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery4} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery5} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery6} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery7} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery8} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery9} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery10} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery11} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                        <div className="images">
                            <img src={Gallery12} />
                            <a href=""><h4>Spreading Peace to world</h4></a>
                        </div>
                    </div>
                    <div>
                        <button className="lmi">Load More Images</button>
                    </div>
                </div>
            </>
        )
    }
}