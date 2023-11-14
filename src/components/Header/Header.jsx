import Home from "../Home/Home";
import headinglogo from "../../assets/faviconmishan.png";
import "./header.css";
export default function Header() {
  return (
    <div className="headermain">
      <div className="heading">
        <img src={headinglogo} className="headingimg" alt="" />
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <Home />
    </div>
  );
}
