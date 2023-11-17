import React from "react";
import headinglogo from "../../assets/faviconmishan.png";
import "./header.css";

export default function Header({ homeRef, infoRef, serviceRef, skillsRef }) {
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="headermain">
      <div className="heading">
        <img src={headinglogo} className="headingimg" alt="" />
      </div>
      <div className="menu">
        <a href="#home" onClick={() => handleClick(homeRef)}>
          Home
        </a>
        <a href="#about" onClick={() => handleClick(infoRef)}>
          About
        </a>
        <a href="#service" onClick={() => handleClick(serviceRef)}>
          Service
        </a>
        <a href="#portfolio" onClick={() => handleClick(skillsRef)}>
          Portfolio
        </a>
      </div>
    </div>
  );
}
