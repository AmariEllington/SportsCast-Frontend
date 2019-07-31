import React, { Component } from "react";
import ReactPlayer from "react-player";
import YoutubeMenu from "../Components/YoutubeMenu";

export default class Youtube3 extends Component {
  state = {
    url: `https://www.youtube.com/playlist?list=UUtK4QAczAN2mt2ow_jlGinQ`
  };

  updateYoutubeMenu = event => {
    this.setState({
      url: event.target.value
    });
  };
  render() {
    return (
      <div className="youtubeDiv card-item">
        <div className="youtubeMenuDiv">
          <YoutubeMenu
            updateYoutubeMenu={this.updateYoutubeMenu}
            pages={this.props.pages}
          />
        </div>

        <div className="youtubeInnerDiv">
          <ReactPlayer
            url={this.state.url}
            className="youtubeReactPlayer"
            height="40vh"
            width="60vw"
          />
        </div>
      </div>
    );
  }
}
