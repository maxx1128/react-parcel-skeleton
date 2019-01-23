import React from "react";
import { Link } from "@reach/router";

class Static extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Homepage!</p>

        <Link to="/static">Static Page</Link>
        <br />
        <Link to="/param/17">Page with a Parameter</Link>
      </React.Fragment>
    );
  }
}

export default Static;
