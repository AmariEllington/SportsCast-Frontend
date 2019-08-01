import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import TwitterMenu from "../Components/TwitterMenu";

export default class Twitter extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.updateTwitterMenu(e);
  };

  render() {
    const { userTwitter } = this.props;
    console.log(userTwitter);
    return (
      <div className="card-item">
        <div className="twitterMenuDiv">
          <TwitterMenu
            updateTwitterMenu={this.props.updateTwitterMenu}
            pages={this.props.pages}
          />

          <form
            onSubmit={this.props.updateTwitterSearch}
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
