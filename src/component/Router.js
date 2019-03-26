import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import LoggIn from "./LoggIn";
import PageNotFound from "./PageNotFound";
import CreateAccount from "./CreateAccount";

export default class Router extends Component{

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/loggIn" component={LoggIn} />
          <Route to="/createAccount" component={CreateAccount} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}