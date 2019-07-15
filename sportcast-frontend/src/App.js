import React, { Component } from "react";
import "./App.css";
import "./index.css";
import NewsFeed from "./Containers/NewsFeed";
import Twitter from "./Containers/Twitter";
import Youtube from "./Containers/Youtube";
import Spotify from "./Containers/Spotify";
import { DragDropContext } from "react-beautiful-dnd";

export default class App extends Component {
  render() {
    return (
      <div>
        <Spotify />
        <Youtube />
        <Twitter />
        <NewsFeed />
      </div>
    );
  }
}
