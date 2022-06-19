import { Link } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo.png";

const Landing = () => (
  <div className="landing-container">
    <Link className="logo" to="/Home">
      <img className="logo-button" src={LogoS} alt="logo" />
    </Link>
  </div>
);
export default Landing;
