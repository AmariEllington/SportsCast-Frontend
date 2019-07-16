import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Twitter extends Component {
  state = {
    input: ""
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      input: event.target.formInput.value
    });
    console.log(event.target.formInput.value);
  };
  render() {
    return (
      <div className="twitter card">
        <form onSubmit={this.handleClick}>
          <input type="text" name="formInput" />
          <input type="submit" value="submit" />
        </form>
        <TwitterTimelineEmbed sourceType="profile" screenName="espn" />
      </div>
    );
  }
}

// update state and twitter
