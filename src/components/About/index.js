import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoB from "../../assets/images/logo-black.png";
import AboutImg from "../../assets/images/about.png";
import Classes from "../../assets/images/classes.png";
import Contact from "../../assets/images/contact.png";
import HomePic from "../../assets/images/home-pic.jpg";

const About = () => {
  return (
    <div className="container-about-page">
      <div className="nav-bar">
        <Link to="/Home">
          <img className="logo-small" src={LogoB} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/"></NavLink>
          <div className="nav-links">
            <NavLink exact="true" activeclassname="active" to="/About">
              <img className="about-icon" src={AboutImg} alt="logo" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/Classes">
              <img className="classes-icon" src={Classes} alt="logo" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/Contact">
              <img className="contact-icon" src={Contact} alt="logo" />
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default About;
