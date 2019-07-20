import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "../Pages/LoginComponent";
import SignUp from "../Pages/SignUp";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div>
          <div className="titleLandingPage">welcome to sportscast.</div>

          <h2 className="subheadingTitlePage">
            - bringing the sports to you -
          </h2>
          <Link to="/login">
            <div className="ui animated fade button loginButton" tabIndex="0">
              <div className="visible content">-- Login --</div>
              <div className="hidden content">Sport Awaits</div>
            </div>
          </Link>
          <Link to="/signup">
            <div className="ui animated fade button loginButton" tabIndex="0">
              <div className="visible content">-- Sign Up --</div>
              <div className="hidden content">Join The Fun</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
