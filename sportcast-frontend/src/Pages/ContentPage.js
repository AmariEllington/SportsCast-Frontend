import React, { Component } from "react";
import ReactDOM from "react-dom";
import NewsFeed from "../Containers/NewsFeed";
import Twitter from "../Containers/Twitter";
import Youtube2 from "../Containers/Youtube2";
import Youtube from "../Containers/Youtube";
import Youtube3 from "../Containers/Youtube3";
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
        <div class="ui grid">
          <div class="eight wide column card">
            <NewsFeed />
          </div>

          <div class="eight wide column card">
            <Twitter />
          </div>

          <div class="eight wide column card">
            <Youtube3 />
          </div>

          <div class="eight wide column card">
            <Spotify />
          </div>
        </div>
      </div>
    );
  }
}
