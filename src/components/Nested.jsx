import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Products from "./Products";

class Nested extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <NavLink to='/nested/products/1'>Product 1</NavLink>
          </li>
          <li>
            <NavLink to='/nested/products/2'>Product 2</NavLink>
          </li>
          <li>
            <NavLink to='/nested/products/3'>Product 3</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        </ul>
        <Route exact path='/nested/' component={Products} />
        <Route path={"/nested/products/:id"} component={Products} />
      </React.Fragment>
    );
  }
}

export default Nested;
