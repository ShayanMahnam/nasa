import React from 'react'
import MoonPicture from "../assets/moon.png";
function Moon() {
  return (
    <div className="App">
      <div className="picture-container">
        <img
          data-aos="slide-right"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          className="pic"
          src={MoonPicture}
          alt="astronaut"
          title="astronaut"
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        className="description"
      >
        <h1>Moon</h1>
        <article>
          <p>
            The brightest and largest object in our night sky, the Moon makes
            Earth a more livable planet by moderating our home planet's wobble
            on its axis, leading to a relatively stable climate. It also causes
            tides, creating a rhythm that has guided humans for thousands of
            years.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Moon