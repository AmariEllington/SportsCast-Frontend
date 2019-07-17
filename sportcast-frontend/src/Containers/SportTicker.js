import Ticker from "react-ticker";

import React, { Component } from "react";

export default class SportTicker extends Component {
  render() {
    return (
      <div>
        {" "}
        <iframe
          src="http://espn.go.com/bottomline/espnewsbottomlinebasic.html"
          height="65"
          frameborder="0"
          scrolling="no"
          allowTransparency="false"
          className="sportsTicker"
        />
      </div>
    );
  }
}
