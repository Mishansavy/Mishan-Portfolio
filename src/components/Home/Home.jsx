import React from "react";
import "./home.css";
import Mansvg from "../../assets/man.svg";
export default function Home() {
  return (
    <div id="main">
      <div className="hero-section">
        <div className="intro">
          <p>Hello,I’m</p>
          <h1>Mishan Raj Shah</h1>
          <p>Web Developer</p>
          <div className="btn">
            <button className="hire">Hire Me</button>
            <button className="downloadcv">Download CV</button>
          </div>
        </div>
        <div className="intro-img">
          <img src={Mansvg} alt="" />
        </div>
      </div>
    </div>
  );
}