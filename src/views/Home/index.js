import React, { Component } from "react";
import Reveal, { BasicReveal } from "../../components/Reveal";
import "./style.css";

class Home extends Component {
  componentDidMount = () => {
    const width = window.innerWidth;
    BasicReveal.reveal("#image", {
      origin: "right",
      duration: 1000,
      distance: width / 4 + "px",
      scale: 1,
      easing: "ease",
      reset: true,
      cleanup: true,
      viewOffset: {
        top: 0,
        right: 0,
        bottom: "100",
        left: 0,
      },
    });
  };
  render() {
    return (
      <div className="home">
        <div className="home-box">
          <div className="home-box-title">Lorem Ipsum</div>
          <div className="home-box-content">
            <Reveal id="home-main-0" scroll="left">
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas auctor luctus neque at suscipit. Morbi commodo, elit
                vitae facilisis sollicitudin, tellus ipsum rutrum lorem, quis
                aliquam neque lectus ac nisi.
              </div>
            </Reveal>
            <Reveal id="home-main-1" scroll="right">
              <div>
                Nam pellentesque pharetra dapibus. In lacinia posuere arcu in
                lobortis. Suspendisse molestie vitae augue ut imperdiet. Etiam
                finibus id tortor vitae rutrum.
              </div>
            </Reveal>
          </div>
        </div>
        <div className="home-box">
          <div className="home-box-title">Lorem Ipsum</div>
          <div className="home-box-content home-box-text-image">
            <Reveal
              id="home-text-0"
              scroll="left"
              options={{
                viewOffset: {
                  top: 0,
                  right: 0,
                  bottom: "100",
                  left: 0,
                },
              }}
            >
              <div className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas auctor luctus neque at suscipit. Morbi commodo, elit
                vitae facilisis sollicitudin, tellus ipsum rutrum lorem, quis
                aliquam neque lectus ac nisi.
              </div>
            </Reveal>
            <div className="home-box-image" id="image" />
          </div>
        </div>
        <div className="home-box">
          <div className="home-box-title">Lorem Ipsum</div>
          <div className="home-box-content home-box-list-text">
            <div className="home-box-list">
              <Reveal id="home-list" scroll="left">
                <ul>
                  <li>Lorem</li>
                  <li>Ipsum</li>
                  <li>Dolor</li>
                  <li>Amet</li>
                </ul>
              </Reveal>
            </div>
            <Reveal
              id="home-text-1"
              scroll="right"
              options={{ origin: "bottom" }}
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas auctor luctus neque at suscipit. Morbi commodo, elit
                vitae facilisis sollicitudin, tellus ipsum rutrum lorem, quis
                aliquam neque lectus ac nisi.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
