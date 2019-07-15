import React, { Component } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

export default class Twitter extends Component {
  render() {
    return (
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BBCSport"
          options={{ height: 400 }}
        />
      </div>
    );
  }
}
