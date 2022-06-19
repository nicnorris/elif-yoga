//import { Link } from "react-router-dom";
//import { Topbar } from "../Topbar";
import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoB from "../../assets/images/logo-black.png";
import About from "../../assets/images/about.png";
import Classes from "../../assets/images/classes.png";
import Contact from "../../assets/images/contact.png";
import HomePic from "../../assets/images/home-pic.jpg";

const Home = () => {
  return (
    <div className="container-home-page">
      <div className="nav-bar">
        <Link to="/Home">
          <img className="logo-small" src={LogoB} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/"></NavLink>
          <div className="nav-links">
            <NavLink exact="true" activeclassname="active" to="/About">
              <img className="about-icon" src={About} alt="logo" />
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
      <div className="home-content">
        <div className="text-zone">
          <h1>
            Elif is a Jivamukti Yoga teacher based in Los Angeles. Her classes
            are carefully curated to make the most of your time while creating a
            world of sweat, music, joy and new perspectives.
          </h1>
        </div>
        <div>{/* <img className="home-pic" src={HomePic} alt="logo" /> */}</div>
      </div>
    </div>
  );
};

export default Home;
