import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/content">Welcome To SportsCast.</Link>
          </li>
        </ul>
      </div>
    );
  }
}
