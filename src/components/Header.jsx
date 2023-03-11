import Logo from "../assets/nl.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="Nasa Logo" />
      <nav>
        <ul className="list">
          <li className="items">
            <Link to={"/"}>home</Link>
          </li>
          <li className="items">
            <Link to={"/moon"}>Moon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
