import React, { Component } from "react";

export default class Podcast extends Component {
  render() {
    const { podcast } = this.props;

    return (
      <div>
        <iframe
          title="podcast"
          src={podcast.url}
          scrolling="no"
          frameBorder="no"
          className="podcast"
        />
      </div>
    );
  }
}
