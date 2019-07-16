import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./App.css";

import LandingPage from "./Pages/LandingPage";
import ContentPage from "./Pages/ContentPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/content" component={ContentPage} />
        </div>
      </Router>
    );
  }
}
