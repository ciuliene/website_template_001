import React, { Component } from "react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Menu />
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                element={
                  <div
                    style={{
                      minHeight: "77vh",
                      position: "relative",
                    }}
                  >
                    <route.component />
                  </div>
                }
                path={route.path}
              />
            );
          })}
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
