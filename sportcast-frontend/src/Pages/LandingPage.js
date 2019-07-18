import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "../Pages/LoginComponent";
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
          <Link to="/login">
            <div className="ui animated fade button" tabIndex="0">
              <div className="visible content">-- Login --</div>
              <div className="hidden content">Sport Awaits</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
