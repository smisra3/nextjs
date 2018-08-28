import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../containers/Home";

class AppRouting extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default AppRouting;
