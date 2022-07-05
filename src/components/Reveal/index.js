import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import defaultScrolls from "./defaultScrolls";

class Reveal extends Component {
  componentDidMount = () => {
    if (!this.props.scroll || !this.props.id) {
      throw new Error("Scroll props is required");
    } else {
      let scroll = null;
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

      if (this.props.options) {
        for (let option in this.props.options) {
          scroll[option] = this.props.options[option];
        }
      }

      console.log(scroll);

      if (scroll) {
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
