import "./index.scss";
import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoB from "../../assets/images/logo-black.png";
import AboutImg from "../../assets/images/about.png";
import ClassesPic from "../../assets/images/classes.png";
import Contact from "../../assets/images/contact.png";
import HomePic from "../../assets/images/home-pic.jpg";
import AboutPic from "../../assets/images/about-pic.png";

const Classes = () => {
  return (
    <>
      <div className="container-classes-page">
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
                <img className="classes-icon" src={ClassesPic} alt="logo" />
              </NavLink>
              <NavLink exact="true" activeclassname="active" to="/Contact">
                <img className="contact-icon" src={Contact} alt="logo" />
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="classes-content">
          <div className="text-zone-classes">
            <h1>
              Elif is currently offering private Jivamukti Yoga classes in the
              greater Los Angeles Area.
              <br></br>
              <br></br>
              Private sessions will be carefully tailored to you and your needs,
              creating trust and space to explore modifications for individual
              levels and goals, almost always resulting in big little
              revelations within each student’s practice. Yoga newbies, injured,
              pregnant and postpartum bodies welcome!
              <br></br>
              <br></br>
              Some things to think about include: What are your goals? Are they
              centered around physicality/ a specific asana / that
              instagrammable inversion? Or are you looking to find some zen and
              deepen your sadhana (spiritual journey) / meditation practice?
              What is your experience with yoga?
              <br></br>
              <br></br>
              Let’s chat, get in touch for info on trial sessions and pricing.
            </h1>
          </div>
          <div className="about-img-container">
            {/* <img className="about-img" src={AboutPic} alt="about-img" /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Classes;
