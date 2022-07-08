import React, { Component } from "react";
import routes from "../../routes";
import { Link } from "react-router-dom";
import constants from "../../config/constants";
import "./style.css";
import MenuIcon from "../MenuIcon";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: window.location.pathname,
      showMenu: false,
    };

    let nRoutes = routes.filter((x) => x.menu).length;

    this.setDocumentProperty("--n-routes", nRoutes);

    let linkWidth = (6 - nRoutes) * 100;

    this.setDocumentProperty("--link-width", linkWidth + "px");
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const { scrollY, innerWidth } = window;
      if (innerWidth > 1100) {
        const maxHeight = 100;
        const minHeight = 35;
        const maxScroll = 100;
        let menuHeight =
          maxHeight + (scrollY * (minHeight - maxHeight)) / maxScroll;
        if (menuHeight < minHeight) menuHeight = minHeight;

        // Menu height
        this.setDocumentProperty("--menu-height", menuHeight + "px");
      }
    });
  };

  setDocumentProperty = (property, value) => {
    let r = document.querySelector(":root");
    r.style.setProperty(property, value);
  };

  setActivePage = (i) => {
    const route = routes[i];
    this.setState({ currentLocation: route.path });
  };

  render() {
    const { currentLocation } = this.state;

    return (
      <div className="menu">
        <div className="menu-top" />
        <div
          className={`menu-icon-toggle`}
          onClick={() => {
            this.setState({ showMenu: !this.state.showMenu });
          }}
        >
          <MenuIcon menu-state={this.state.showMenu} />
        </div>
        <div className="menu-container" show={this.state.showMenu.toString()}>
          <Link to="/" className="menu-logo">
            <span>{constants.ICON_LOGO}</span>
          </Link>
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                to={route.path}
                className="menu-link"
                onClick={() => {
                  this.setActivePage(i);
                  this.setState({ showMenu: false });
                }}
                active={(currentLocation === route.path).toString()}
              >
                <span> {route.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
