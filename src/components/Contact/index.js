import "./index.scss";
import React, { useRef } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoB from "../../assets/images/logo-black.png";
import AboutImg from "../../assets/images/about.png";
import Classes from "../../assets/images/classes.png";
import ContactPic from "../../assets/images/contact.png";
import HomePic from "../../assets/images/home-pic.jpg";
import AboutPic from "../../assets/images/about-pic.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xpv8o8c",
        "template_g75cewp",
        form.current,
        "7O9oM7bh1UF5M1CUO"
      )
      .then(
        () => {
          alert("Message successuflly sent!");
          window.location.reload(false);
        },
        () => {
          alert("failed to send the message, please try again");
        }
      );
    //  .then(
    //    (result) => {
    //      console.log(result.text);
    //    },
    //    (error) => {
    //      console.log(error.text);
    //    }
    //  );
  };

  return (
    <>
      <div className="container-contact-page">
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
                <img className="contact-icon" src={ContactPic} alt="logo" />
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="contact-content">
          <div className="text-zone-contact">
            <h1>
              Say hi.
              <br></br>
              <br></br>
              Slip into my dms on{" "}
              <a
                className="insta-link"
                target="blank"
                href="https://instagram.com/elifnorris"
              >
                instagram
              </a>{" "}
              or use the contact form below.
            </h1>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
