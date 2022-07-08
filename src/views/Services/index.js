import React, { Component } from "react";
import Reveal, { BasicReveal } from "../../components/Reveal";
import constants from "../../config/constants";
import "./style.css";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        { name: "Lorem Ipsum", logo: constants.ICON_LOGO },
        { name: "Dolor Sit", logo: constants.ICON_LOGO },
        { name: "Amet", logo: constants.ICON_LOGO },
        { name: "Consectetur", logo: constants.ICON_LOGO },
        { name: "Adipiscing Elit", logo: constants.ICON_LOGO },
        { name: "Maecenas Auctor", logo: constants.ICON_LOGO },
      ],
    };
  }

  componentDidMount = () => {
    this.state.services.forEach((_, i) => {
      BasicReveal.reveal(`#service-box-${i}`, {
        easing: "ease",
        delay: 100 * (i + 1),
        duration: 1000,
        scale: 0.7,
        cleanup: true,
        viewOffset: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      });
    });
  };

  render() {
    return (
      <div className="services">
        <div className="services-head">
          <Reveal id="services-head-title" scroll="top">
            <div className="services-head-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              auctor luctus neque at suscipit. Morbi commodo, elit vitae
              facilisis sollicitudin, tellus ipsum rutrum lorem, quis aliquam
              neque lectus ac nisi.
            </div>
          </Reveal>
          <Reveal id="services-box" scroll="bottom" options={{ reset: false }}>
            <div className="services-box">
              <div className="services-box-title">Lorem Ipsum</div>
              <div className="services-box-container">
                {this.state.services.map((service, i) => {
                  return (
                    <div key={i} id={`service-box-${i}`} className="h3">
                      <span className="services-item-logo">{service.logo}</span>
                      <span>{service.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }
}

export default Services;
