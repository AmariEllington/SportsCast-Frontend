import React, { Component } from "react";

export default class TwitterMenu extends Component {
  render() {
    return (
      <div>
        <div className="ui inline dropdown simple item twitterMenu ">
          <div className="text">
            <i className="twitter squarefoot icon" />
            Select A Twitter Page
          </div>
          <i className="dropdown icon" />
          <div className="menu">
            {this.props.pages.map(page => (
              <option
                value={page.twitter}
                className="item twitterMenuItem"
                onClick={this.props.updateTwitterMenu}
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
