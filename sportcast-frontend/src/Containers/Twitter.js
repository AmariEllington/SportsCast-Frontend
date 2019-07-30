import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import TwitterMenu from "../Components/TwitterMenu";

export default class Twitter extends Component {
  state = {
    input: this.props.user.page.twitter
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      input: event.target.formInput.value
    });
  };

  updateTwitterMenu = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };
  render() {
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
            key={this.state.input}
            sourceType="profile"
            screenName={this.state.input}
            className="twitterTimeline"
          />
        </div>
      </div>
    );
  }
}

// update state and twitter
