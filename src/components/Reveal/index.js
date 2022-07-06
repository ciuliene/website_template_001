import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import defaultScrolls from "./defaultScrolls";

class Reveal extends Component {
  componentDidMount = () => {
    if (this.props.disabled) return;
    if (!this.props.scroll || !this.props.id) {
      throw new Error("Scroll props is required");
    } else {
      let scroll = {};
      switch (this.props.scroll) {
        case "left":
        case "right":
        case "bottom":
        case "top":
          scroll = defaultScrolls["sideToPos"];
          scroll.origin = this.props.scroll;
          break;
        default:
          break;
      }

      const { innerWidth } = window;

      scroll.distance = innerWidth / 3 + "px";

      if (this.props.options) {
        for (let option in this.props.options) {
          scroll[option] = this.props.options[option];
        }
      }

      if (scroll && Object.keys(scroll).length > 0) {
        ScrollReveal().reveal("#" + this.props.id, scroll);
      }
    }
  };

  render() {
    return <div id={this.props.id}>{this.props.children}</div>;
  }
}

export default Reveal;

export const BasicReveal = ScrollReveal();
