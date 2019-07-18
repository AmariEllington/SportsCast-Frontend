import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewsFeed from "../Containers/NewsFeed";
import Twitter from "../Containers/Twitter";
import Youtube from "../Containers/Youtube";
import Spotify from "../Containers/Spotify";
import MenuAppBar from "../Containers/MenuAppBar";
import SportTicker from "../Containers/SportTicker";

export default class ContentPage extends Component {
  render() {
    return (
      <div>
        <div>
          <MenuAppBar handleLogOut={this.props.handleLogOut} />
          <SportTicker />
        </div>
        <div className="appContainer">
          <NewsFeed />
          <Twitter />
          <Youtube />
          <Spotify />
        </div>
      </div>
    );
  }
}
