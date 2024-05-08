import { Component } from "react";
import "./App.css";
import Home from "./Home";
import About from "./about"
import Contact from "./contact";
import { Route, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    )
  }
}