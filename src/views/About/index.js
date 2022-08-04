import React, { Component } from "react";
import people from "./people.json";
import { BasicReveal } from "../../components/Reveal";
import "./style.css";
class About extends Component {
  componentDidMount = () => {
    people.forEach((p, i) => {
      BasicReveal.reveal(`#p-${i}-0`, {
        origin: "left",
        distance: "120px",
        easing: "ease",
        delay: 100 * (i + 1),
        duration: 1000,
        scale: 1,
        cleanup: true,
        viewOffset: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      });

      BasicReveal.reveal(`#p-${i}-1`, {
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
      <div className="about">
        {people.map((p, i) => {
          return (
            <div key={i} className="about-box">
              <div id={"p-" + i + "-0"}>
                <img className="about-img" alt="" src={p.img} />
              </div>
              <div id={"p-" + i + "-1"} className="about-data">
                <div className="h2 font-weight-bold">
                  {p.firstName + " " + p.lastName}
                </div>
                <div>
                  <span className="me-2">Date:</span>
                  <span className="font-weight-600">
                    {new Date(p.date).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="m-5 mb-3">{p.description}</div>
                <span className="me-2">Email:</span>
                <span className="font-weight-600">{p.email}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default About;
