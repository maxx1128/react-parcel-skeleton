/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { css, jsx } from "@emotion/core";

import { Router, Link } from "@reach/router";
import Home from "./Home";
import Static from "./Static";
import Param from "./Param";
import colors from "./styles/colors";

const headerStyles = css`
  padding: 1rem;

  background-color: ${colors.primary.dark};

  a {
    color: ${colors.action.light};
  }
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header css={headerStyles}>
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
