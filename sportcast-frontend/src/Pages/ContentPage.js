import React, { Component } from "react";
import ReactDOM from "react-dom";

import NewsFeed from "../Containers/NewsFeed";
import Twitter from "../Containers/Twitter";

import Youtube from "../Containers/Youtube";

import Podcast from "../Containers/PodcastContainer";
import MenuAppBar from "../Containers/MenuAppBar";
import SportTicker from "../Containers/SportTicker";

const URL = `http://localhost:3001/pages`;
export default class ContentPage extends Component {
  state = {
    pages: []
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          pages: resp
        })
      );
  }

  render() {
    return (
      <div className="contentDiv">
        <div className="menuAppBar">
          <MenuAppBar handleLogOut={this.props.handleLogOut} />
          {/* <SportTicker /> */}
        </div>

        <div className="ui grid contentOuterDiv ">
          <div className="ten wide column row card contentInnerCard">
            <Youtube pages={this.state.pages} user={this.props.user} />
          </div>

          <div className="six wide column row card contentInnerCard">
            <Twitter pages={this.state.pages} user={this.props.user} />
          </div>

          <div className="six wide column row card contentInnerCard">
            <Podcast />
          </div>
          <div className="ten wide column row card contentInnerCard">
            <NewsFeed />
          </div>
        </div>
      </div>
    );
  }
}
