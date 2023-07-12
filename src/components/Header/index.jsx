import logo from "../../assets/imgs/wizzi-logo.png";
import "./index.css";

export const Header = () => (
  <nav className="navbar">
    <a className="navbar-brand ms-2" href="#">
      <img src={logo} alt="Bootstrap" className="logo" />
    </a>
  </nav>
);
