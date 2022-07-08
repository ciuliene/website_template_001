import React, { Component } from "react";
import Reveal, { BasicReveal } from "../../components/Reveal";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import constants from "../../config/constants";
import servicesData from "./services_data.json";
import "./style.css";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: servicesData,
      showModal: false,
      modalItem: 0,
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
                      <span
                        className="services-item-logo"
                        onClick={() => {
                          this.setState({ showModal: true, modalItem: i });
                        }}
                      >
                        {constants[service.logo]}
                      </span>
                      <span>{service.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
        <Modal
          isOpen={this.state.showModal}
          toggle={() => this.setState({ showModal: false })}
          centered
        >
          <ModalHeader
            close={
              <div
                className="services-close-modal-btn"
                onClick={() => this.setState({ showModal: false })}
              >
                X
              </div>
            }
          >
            <div className="h3">
              {this.state.services[this.state.modalItem].name}
            </div>
          </ModalHeader>
          <ModalBody className="p-5">
            <div>{this.state.services[this.state.modalItem].content}</div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Services;
