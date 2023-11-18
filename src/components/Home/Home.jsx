// import React, { useRef, props } from "react";
import "./home.css";
import ProgressBar from "../ProgressBar/ProgressBar";
// Images and svg
import Mansvg from "../../assets/man.svg";
import Mishan from "../../assets/mishan.jpg";
// Icons
import {
  Facebook,
  GitHub,
  Twitter,
  YouTube,
  Compare,
  Computer,
  MovieFilter,
} from "@mui/icons-material";
export default function Home({ homeRef, infoRef, serviceRef, skillsRef }) {
  return (
    <div id="main">
      <div className="hero-section" ref={homeRef}>
        <div className="intro">
          <span className="phello">
            <p>Hello,I’m</p>
          </span>
          <h1>Mishan Raj Shah</h1>
          <span className="pweb">
            <p>Web Developer</p>
          </span>
          <div className="btn">
            <but ton className="hire">
              Hire Me
            </but>
            <button className="downloadcv">Download CV</button>
          </div>
            <div className="social-media-icons">
              <Facebook />
              <Twitter />
              <YouTube />
              <GitHub />
            </div>
        </div>
        <div className="intro-img">
          <img src={Mansvg} alt="" />
        </div>
      </div>

      <div className="info-area" ref={infoRef}>
        <div className="info-image">
          <img src={Mishan} alt="" />
        </div>
        <div className="info-content">
          <div className="info-heading">
            <h1>Mishan Raj Shah</h1>
            <p>Web Developer</p>
            <div className="info-des">
              <p>
                I possess a wide range of skills that make me a versatile and
                proficient web developer and content creator. With a mastery of
                HTML, I can effortlessly craft engaging web pages, while my
                expertise in WordPress allows me to efficiently manage and
                design dynamic website.
              </p>
              <p>
                Additionally, my strong grasp of CSS enables me to create
                visually stunning and responsive layouts, providing an
                exceptional user experience. I also excel in Adobe Premiere Pro,
                producing captivating videos that combine creativity and
                professionalism. While I continue to enhance my abilities in
                JavaScript and Laravel, my dedication to continuous learning
                ensures that I deliver innovative and top-notch solutions to
                every project.
              </p>
            </div>
            <div className="info-btn">
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area" ref={serviceRef}>
        <div className="service-heading">
          <p className="ServicetopHeading">Service</p>
          <h1 className="ServicemiddleHeading">What I Do</h1>
          <p className="ServicebottomHeading">
            I’m Specializes in Web Development, video Editing, Content Creation.
          </p>
        </div>
        <div className="boxes">
          <div className="box-1">
            <Computer className="service-icon1" />
            <h2>Web Development</h2>
          </div>
          <div className="box-2">
            <Compare className="service-icon2" />
            <h2>Video Editing</h2>
          </div>
          <div className="box-3">
            <MovieFilter className="service-icon3" />
            <h2>Content Creation</h2>
          </div>
        </div>
      </div>
      <div className="Skills-Area" ref={skillsRef}>
        <div className="skillHeading">
          <p className="SkillsTopHeading">Skills</p>
          <h2 className="SkillsMiddleHeading">Why Choose me</h2>
          <div className="Skills-Des">
            <p>
              I’ve dedicated time and unwavering commitment to mastering my
              skills, ensuring exceptional results. With a strong foundation and
              a constant drive for improvement, I’m your expert of choice.
            </p>
          </div>
        </div>
        <ProgressBar />
      </div>
      <div className="Footer">
        <p>Copyright 2023 Mishan Raj Shah</p>
      </div>
    </div>
  );
}
