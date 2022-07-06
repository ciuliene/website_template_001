import React, { Component } from "react";
import "./style.css";

class MenuIcon extends Component {
  render() {
    return (
      <div
        className="menu-icon"
        menu-state={(this.props["menu-state"] || false).toString()}
      >
        <div className="bar-top" />
        <div className="bar-center" />
        <div className="bar-bottom" />
      </div>
    );
  }
}

export default MenuIcon;
