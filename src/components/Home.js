import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";


export default function Home() {
  return (
    <div className="header-wrapper overflow-hidden overflow-x-hidden overflow-y-hidden no-scrollbar ">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <div className="main-info reggae overflow-x-hidden overflow-y-hidden overflow-hidden  ">
        <h1>Web Development and Promotions</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Mobile Application development",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="Contact" className="btn-contact-me">
          Contact me
        </a>
      </div>
    </div>
  );
}
