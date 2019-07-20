import React, { Component } from "react";
import ReactPlayer from "react-player";
import YoutubeMenu from "../Components/YoutubeMenu";

export default class Youtube3 extends Component {
  state = {
    url:
      "https://www.youtube.com/playlist?list=PLISuFiQTdKDWkD5rGCcc8r3E-AMT-XgBV"
  };

  updateYoutubeMenu = event => {
    this.setState({
      url: event.target.value
    });
  };
  render() {
    return (
      <div>
        <YoutubeMenu updateYoutubeMenu={this.updateYoutubeMenu} />
        <ReactPlayer url={this.state.url} />
      </div>
    );
  }
}
