import React, { Component } from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import YoutubeMenu from "../Components/YoutubeMenu";

export default class Youtube3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.userYoutube
    };
  }

  updateYoutubeMenu = event => {
    this.setState({
      url: event.target.value
    });
  };

  render() {
    return (
      <div className="youtubeInnerDiv">
        <YoutubeMenu />
        <ReactPlayer
          url={this.props.userYoutube}
          className="youtubeReactPlayer"
          height="40vh"
          width="60vw"
        />
      </div>
    );
  }
}
