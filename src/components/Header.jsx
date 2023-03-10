import Logo from "../assets/nl.png";


const Header = () => {
    return (
      <header>
        <img className="logo" src={Logo} alt="Nasa Logo" />
        <nav>
          <ul className="list">
            <li className="items">
              <a href="/#">Home</a>
            </li>
            <li className="items">
              <a href="/#">Moon</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header