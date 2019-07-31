import React, { Component } from "react";
import ReactPlayer from "react-player";
import YoutubeMenu from "../Components/YoutubeMenu";

export default class Youtube3 extends Component {
  handleClick = e => {
    this.props.updateYoutubeMenu(e.target.value);
  };

  render() {
    const { userYoutube } = this.props;
    return (
      <div className="youtubeDiv card-item">
        <div className="youtubeMenuDiv">
          <YoutubeMenu
            updateYoutubeMenu={this.handleClick}
            pages={this.props.pages}
          />
        </div>

        <div className="youtubeInnerDiv">
          <ReactPlayer
            url={userYoutube}
            className="youtubeReactPlayer"
            height="40vh"
            width="60vw"
          />
        </div>
      </div>
    );
  }
}
