import React from 'react'
import AsPicture from "../assets/as1.png";
function Home() {
  return (
    <div className="App">
      <div className="picture-container">
        <img
          data-aos="slide-right"
          data-aos-delay="150"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          className="pic"
          src={AsPicture}
          alt="astronaut"
          title="astronaut"
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        className="description"
      >
        <h1>Astronaut</h1>
        <article>
          <p>
            A member of the crew of a spaceship or other spacecraft that travels
            beyond Earth's atmosphere, or someone trained to serve that purpose.
          </p>
        </article>
      </div>
      </div>
  )
}

export default Home