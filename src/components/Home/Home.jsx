import React from "react";
import "./home.css";
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
            <div className="social-media-icons">
              <Facebook />
              <Twitter />
              <YouTube />
              <GitHub />
            </div>
          </div>
        </div>
        <div className="intro-img">
          <img src={Mansvg} alt="" />
        </div>
      </div>

      <div className="info-area">
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
      <div className="service-area">
        <div className="service-heading">
          <p className="topHeading">Service</p>
          <h1 className="middleHeading">What I Do</h1>
          <p className="bottomHeading">
            I’m Specializes in Web Development, video Editing, Content Creation.
          </p>
        </div>
        <div className="boxes">
          <box-1>
            <Computer />
            <h2>Web Development</h2>
          </box-1>
          <box-2>
            <Compare />
            <h2>Video Editing</h2>
          </box-2>
          <box-3>
            <MovieFilter />
            <h2>Content Creation</h2>
          </box-3>
        </div>
      </div>
      <div className="Skills-Area">
        <div className="skillHeading">
          <p className="SkillsTopHeading">Skills</p>
          <h2 className="SkillsMiddleHeading">Why Choose me</h2>
          <p className="Skills Des">
            I’ve dedicated time and unwavering commitment to mastering my
            skills, ensuring exceptional results. With a strong foundation and a
            constant drive for improvement, I’m your expert of choice.
          </p>
        </div>
        <div className="percentage">
          <div className="leftsideper">
            <div className="text">Html 100%</div>
            <div className="text">CSS 95%</div>
            <div className="text">JavaScript 45%</div>
          </div>
          <div className="Middlesideper">
            <div className="text">Wordpress 100%</div>
            <div className="text">Elementor 98%</div>
            <div className="text">WooCommerce 45%</div>
          </div>
          <div className="Rightsideper">
            <div className="text">Adobe Premiere 95%</div>
            <div className="text">Content Writing 75%</div>
            <div className="text">Fliming 70%</div>
          </div>
        </div>
      </div>
      <div className="Footer">
        <p>Copyright 2023 Mishan Raj Shah</p>
      </div>
    </div>
  );
}
