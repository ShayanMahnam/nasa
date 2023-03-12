import React from "react";
import AsPicture from "../assets/as2.png";
function NoMatch() {
  return (
    <div className="App">
      <div className="picture-container">
        <img
          data-aos="fade"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="pic"
          src={AsPicture}
          alt="astronaut"
          title="astronaut"
        />
      </div>

      <div
        data-aos="fade"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="description"
      >
        <h1>404</h1>
        <article>
          <p>
            Page not found!
          </p>
        </article>
      </div>
    </div>
  );
}

export default NoMatch;
