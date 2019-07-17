import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Twitter extends Component {
  state = {
    input: "espn"
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="twitter card">
        <form>
          <input type="text" name="formInput" onChange={this.handleClick} />
          <input type="submit" value="submit" />
        </form>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={this.state.input}
        />
      </div>
    );
  }
}

// update state and twitter
