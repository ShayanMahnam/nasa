import React from 'react'
import NasaLogo from "../assets/nl.png";
function Home() {
  return (
    <div className="App">
      <div className="picture-container">
        <img
          data-aos="fade"
          data-aos-delay="150"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className="piclogo"
          src={NasaLogo}
          alt="nasa logo"
          title="nasa"
        />
      </div>
      </div>
  )
}

export default Home