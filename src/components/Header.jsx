import Logo from "../assets/nl.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import AnimationController from "../module/squareTransition";

function SquareTransition({showCanvas, controls}){
  const [screenSizes, setScreenSizes] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  })
  let isMobile = window.matchMedia("(max-width: 489px)");
  const canvasRef = useRef(null);

  useEffect(()=>{
    const myCanvas = canvasRef.current;
    myCanvas.width = screenSizes.x;
    myCanvas.height = screenSizes.y;

    const newController = new AnimationController(
      canvasRef.current, isMobile ? 100 : 150
    )
    controls.current = newController;
  }, [screenSizes])

  useEffect(()=>{
    function handleResize(e){
      const {target} = e;
      setScreenSizes({x: target.innerWidth, y: target.innerHeight})
    }

    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{display: showCanvas? "block" : "none"}}>
      <canvas className="squaresCanvas" ref={canvasRef}></canvas>
    </div>
  )
}

// HEADER;
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [showCanvas, setShowCanvas] = useState(false);
  const gridControlsRef = useRef(null);

  function transitionPage(url){
    setShowCanvas(true);
    gridControlsRef.current.drawGrid(()=> {
      navigate(url);
      gridControlsRef.current.clearGrid(()=> setShowCanvas(false))
    });
  }

  // const toggleMenu = (e) => {
  //   e.preventDefault()
  //   transitionPage(url)
  //   setShowMenu(!showMenu);
  // };

  const toggleHandler = (url)=>{
    return (e) => {
      e.preventDefault()
      transitionPage(url)
      setShowMenu(!showMenu);
    }
  }
  
  return (
    <>
      <SquareTransition showCanvas={showCanvas} controls={gridControlsRef}/>
      <header>
        <img className="logo" src={Logo} alt="Nasa Logo" />
        <button className="burger-menu" onClick={()=> setShowMenu(!showMenu)}>
          <span className="burger-menu__line"></span>
          <span className="burger-menu__line"></span>
          <span className="burger-menu__line"></span>
        </button>
        <nav id="menu" className={showMenu ? "menu--open" : ""}>
          <ul className="list">
            <li className="items">
              <NavLink to={"/"} onClick={toggleHandler('/')}>
                Home
              </NavLink>
            </li>
            <li className="items">
              <NavLink to={"/astronaut"} onClick={toggleHandler('/astronaut')}>
                Astronaut
              </NavLink>
            </li>
            <li className="items">
              <NavLink to={"/moon"} onClick={toggleHandler('/moon')}>
                Moon
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
