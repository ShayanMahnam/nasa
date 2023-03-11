import Logo from "../assets/nl.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="Nasa Logo" />
      <nav id="menu">
        <ul className="list">
          <li className="items">
            <NavLink to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="items">
            <NavLink to={"/moon"} >
              Moon
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
