import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoB from "../../assets/images/logo-black.png";

const Topbar = () => (
  <div className="nav-bar">
    <Link to="/Home">
      <img className="logo-small" src={LogoB} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/"></NavLink>
    </nav>
  </div>
);
export default Topbar;
