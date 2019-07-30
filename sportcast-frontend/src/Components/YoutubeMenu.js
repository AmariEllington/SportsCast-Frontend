import React, { Component } from "react";

export default class YoutubeMenu extends Component {
  render() {
    return (
      <div>
        <div
          id="buttonColour"
          className="ui inline dropdown simple item youtubeMenu ui button "
        >
          <div className="text">
            <i className="youtube icon" />
            Select A Youtube Playlist
          </div>
          <i className="dropdown icon" />
          <div className="menu">
            {this.props.pages.map(page => (
              <option
                value={page.youtube}
                className="item youtubeMenuItem"
                onClick={this.props.updateYoutubeMenu}
                key={page.id}
              >
                {page.name}
              </option>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
