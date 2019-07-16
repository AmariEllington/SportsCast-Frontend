import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Twitter extends Component {
  render() {
    return (
      <div className="twitter card">
        <TwitterTimelineEmbed sourceType="profile" screenName="skysports" />
      </div>
    );
  }
}
