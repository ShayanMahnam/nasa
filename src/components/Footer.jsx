import React, { useState } from 'react';
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

function Footer() {
  const [footerBtn, setFooterBtn] = useState(false);

  const handleClick = () => {
    setFooterBtn(!footerBtn);
  };

  return (
    <>
      <div className="footer-wrapper">
        <footer className={footerBtn ? "show" : ""}>Design by Shayan</footer>
      </div>
      <div className="arrow-up" onClick={handleClick}>
        {footerBtn ? <FaArrowCircleDown /> : <FaArrowCircleUp />}
      </div>
    </>
  );
}

export default Footer;