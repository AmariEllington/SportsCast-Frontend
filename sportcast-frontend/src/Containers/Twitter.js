import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import TwitterMenu from "../Components/TwitterMenu";

export default class Twitter extends Component {
  componentDidMount() {}

  handleClick = e => {
    this.props.updateTwitter(e.target.value);
  };

  // handleClick = e => {
  //   this.props.updateYoutubeMenu(e.target.value);
  // };

  updateTwitterMenu = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };
  render() {
    const { userTwitter } = this.props;
    return (
      <div className="card-item">
        <div className="twitterMenuDiv">
          <TwitterMenu
            updateTwitterMenu={this.updateTwitterMenu}
            pages={this.props.pages}
          />

          <form
            onSubmit={this.handleClick}
            className="ui button"
            id="buttonColour"
          >
            <input type="text" name="formInput" />
            <input type="submit" value="submit" />
          </form>
          <TwitterTimelineEmbed
            key={userTwitter}
            sourceType="profile"
            screenName={userTwitter}
            className="twitterTimeline"
          />
        </div>
      </div>
    );
  }
}

// update state and twitter
