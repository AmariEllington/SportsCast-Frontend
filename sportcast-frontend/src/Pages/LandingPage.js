import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div>
          <Link to="/content" className="titleLandingPage">
            welcome to sportscast.
          </Link>
          <h2 className="subheadingTitlePage">
            - bringing the sports to you -
          </h2>
        </div>
      </div>
    );
  }
}
