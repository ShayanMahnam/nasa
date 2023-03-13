import Logo from "../assets/nl.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <img className="logo" src={Logo} alt="Nasa Logo" />
      <button className="burger-menu" onClick={toggleMenu}>
        <span className="burger-menu__line"></span>
        <span className="burger-menu__line"></span>
        <span className="burger-menu__line"></span>
      </button>
      <nav id="menu" className={showMenu ? "menu--open" : ""}>
        <ul className="list">
          <li className="items">
            <NavLink to={"/"} onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="items">
            <NavLink to={"/astronaut"} onClick={toggleMenu}>
              Astronaut
            </NavLink>
          </li>
          <li className="items">
            <NavLink to={"/moon"} onClick={toggleMenu}>
              Moon
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
