import React, { Component } from "react";
import Header from "./header";
import Main from "./main";
import Main2 from "./main2";
import Main3 from "./main3";
import Main4 from "./main4";
import Footer from "./footer";

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Main2 />
                <Main3 />
                <Main4 />
                <Footer />
            </>
        )
    }
}