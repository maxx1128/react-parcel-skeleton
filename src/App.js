import React from "react";
import ReactDOM from "react-dom";

import { Router, Link } from "@reach/router";
import Home from "./Home";
import Static from "./Static";
import Param from "./Param";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Link to="/">Homepage</Link>
        </header>

        <Router>
          <Home path="/" />
          <Static path="/static" />
          <Param path="/param/:id" />
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
