import React, { Component } from "react";
import { Router, BrowserRouter, Switch } from "react-router-dom";
import { ProtectedRoute } from "./routes";
import { Login } from "./layouts/login";

import BaseLayout from "./layouts/base";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <ProtectedRoute path='/login' exact component={Login} />
            <ProtectedRoute path='/' component={BaseLayout} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
