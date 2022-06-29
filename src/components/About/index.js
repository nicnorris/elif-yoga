import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoB from "../../assets/images/logo-black.png";
import AboutImg from "../../assets/images/about.png";
import Classes from "../../assets/images/classes.png";
import Contact from "../../assets/images/contact.png";
import HomePic from "../../assets/images/home-pic.jpg";
import AboutPic from "../../assets/images/about-pic.png";
import Topbar from "../Topbar";

const About = () => {
  return (
    <div className="container-about-page">
      <Topbar />
      {/* <div className="nav-bar">
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
      </div> */}
      <div className="about-content">
        <div className="text-zone-about">
          <h1>
            Elif started teaching yoga at the Jivamukti Yoga School NYC in 2019
            and has since taught at several locations and studios, including the
            Urban Sadhu Yoga School and the online platform Bhavana. She is
            passionate about the precious vehicle that each of our bodies are
            and the ways in which we can connect these to a deeper understanding
            of the Self. Her classes include yoga asana, meditation, relaxation,
            as well as kirtan.
            <br></br>
            <br></br>
            300 hr Jivamukti Yoga Certificate in Nosara, Costa Rica in 2019 with
            mentors Emma Henry & Moritz Ulrich
            <br></br>
            <br></br>
            800+ hr Jivamukti Yoga Certificate in New York City, NY in 2020 with
            her mentor Jessica Stickler
            <br></br>
            <br></br>
            Learn more about Elif and Jivamukti Yoga{" "}
            <a
              className="jiva-link"
              href="https://jivamuktiyoga.com/teachers-global/elif-norris/"
              target="blank"
            >
              here{" "}
            </a>
          </h1>
        </div>
        {/* <div className="about-img-container"> */}
        {/* <img className="about-img" src={AboutPic} alt="about-img" /> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
