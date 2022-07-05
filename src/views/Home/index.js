import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="home-box">
          <div className="home-box-title">Lorem Ipsum</div>
          <div className="home-box-content">
            <div className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor luctus neque at suscipit. Morbi commodo, elit vitae
              facilisis sollicitudin, tellus ipsum rutrum lorem, quis aliquam
              neque lectus ac nisi.
            </div>
            <div>
              Nam pellentesque pharetra dapibus. In lacinia posuere arcu in
              lobortis. Suspendisse molestie vitae augue ut imperdiet. Etiam
              finibus id tortor vitae rutrum.
            </div>
          </div>
        </div>
        <div className="home-box">
          <div className="home-box-title">Lorem Ipsum</div>
          <div className="home-box-content home-box-text-image">
            <div className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor luctus neque at suscipit. Morbi commodo, elit vitae
              facilisis sollicitudin, tellus ipsum rutrum lorem, quis aliquam
              neque lectus ac nisi.
            </div>
            <div className="home-box-image" />
          </div>
        </div>
        <div className="home-box">
          <div className="home-box-title">Lorem Ipsum</div>
          <div className="home-box-content home-box-list-text">
            <div className="home-box-list">
              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Amet</li>
              </ul>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor luctus neque at suscipit. Morbi commodo, elit vitae
              facilisis sollicitudin, tellus ipsum rutrum lorem, quis aliquam
              neque lectus ac nisi.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
