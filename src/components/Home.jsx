import React from 'react'
import AsPicture from "../assets/nl.png";
function Home() {
  return (
    <div className="App">
      <div className="picture-container">
        <img
          data-aos="fade"
          data-aos-delay="150"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className="pic"
          src={AsPicture}
          alt="astronaut"
          title="astronaut"
        />
      </div>
      </div>
  )
}

export default Home