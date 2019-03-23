import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Authentication } from "../services";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  if (Authentication.isAuthenticated()) {
    if (rest.path === "/login") {
      return <Redirect to='/' />;
    }
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} />;
        }}
      />
    );
  } else {
    if (rest.path === "/login") {
      return (
        <Route
          {...rest}
          render={props => {
            return <Component {...props} />;
          }}
        />
      );
    }
    return <Redirect to='/login' />;
  }
};

export { ProtectedRoute };
