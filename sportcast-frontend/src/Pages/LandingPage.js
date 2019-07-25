import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "../Pages/LoginComponent";
import SignUp from "../Pages/SignUp";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <div className="landingPageInnerDiv">
          <h1 className="titleLandingPage">Welcome To Sportscast.</h1>

          <h2 className="subheadingTitlePage">
            - people chasing after a ball....exciting!! -
          </h2>
          <div className="landingPageButtonDiv">
            <Link to="/login">
              <div
                className="ui animated fade button landingPageButton"
                tabIndex="0"
              >
                <div className="visible content"> Login </div>
                <div className="hidden content">Sport Awaits</div>
              </div>
            </Link>
            <Link to="/signup">
              <div
                className="ui animated fade button landingPageButton"
                tabIndex="0"
              >
                <div className="visible content"> Sign Up </div>
                <div className="hidden content">Join The Fun</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
