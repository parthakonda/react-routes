import React, { Component } from "react";

class Products extends Component {
  state = {};
  render() {
    console.log(this.props);
    if (this.props.match.params.id) {
      return (
        <React.Fragment>
          <h1>Products Detail Page - {this.props.match.params.id}</h1>
        </React.Fragment>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

export default Products;
