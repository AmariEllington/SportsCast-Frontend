import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class HomeButton extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div
            className="ui animated fade button backToHomeButton"
            tabIndex="0"
            id="buttonColour"
          >
            <div className="visible content"> Home </div>
            <div className="hidden content">
              <i className="home icon" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
