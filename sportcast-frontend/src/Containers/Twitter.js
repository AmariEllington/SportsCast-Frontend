import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Twitter extends Component {
  state = {
    input: "espn"
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      input: event.target.formInput.value
    });
  };
  render() {
    return (
      <div className="twitter card grid-item">
        <form onSubmit={this.handleClick}>
          <input type="text" name="formInput" />
          <input type="submit" value="submit" />
        </form>
        <TwitterTimelineEmbed
          key={this.state.input}
          sourceType="profile"
          screenName={this.state.input}
        />
      </div>
    );
  }
}

// update state and twitter
