import React from "react";

class Param extends React.Component {
  render() {
    const id = this.props.id;

    return (
      <h3>
        You're on a page with an ID of {id}
      </h3>
    );
  }
}

export default Param;
