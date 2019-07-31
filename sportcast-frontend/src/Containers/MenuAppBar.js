import React, { Component } from "react";
import Logo from "../Components/Logo.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class MenuExampleInvertedSegment extends Component {
  state = {
    open: false,
    youtube: "",
    twitter: ""
  };

  //////// ----- menu modal ------ ///////
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  ////// ---- updating state ------ //////

  updateYoutubeMenu = event => {
    this.setState({
      youtube: event.target.value
    });
  };

  updateTwitterMenu = event => {
    this.setState({
      twitter: event.target.value
    });
  };

  render() {
    return (
      <div className="navbar">
        <div>
          <Link to="/">
            <div
              className="ui animated button navbarLogout"
              tabIndex="0"
              onClick={this.props.handleLogOut}
              id="navbarLogoutId"
            >
              <div className="visible content navbarLogoutText ">Logout</div>
              <div className="hidden content">
                <i className="hand peace icon" />
              </div>
            </div>
          </Link>

          <img src={Logo} alt="logo" />
        </div>
      </div>
    );
  }
}
