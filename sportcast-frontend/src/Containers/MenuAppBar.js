import React, { Component } from "react";
import { Menu, Segment, Button, Image, Modal, Header } from "semantic-ui-react";
import YoutubeMenu from "../Components/YoutubeMenu";
import TwitterMenu from "../Components/TwitterMenu";
import MenuAppbar from "../Containers/SportTicker";
import Logo from "../Components/Logo.png";

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

  render() {
    const { open, dimmer } = this.state;
    return (
      <div className="navbar">
        <div>
          {/* className="ui labeled icon menu inverted navbar" */}
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
          <img src={Logo} alt="logo" />
        </div>
      </div>
    );
  }
}
