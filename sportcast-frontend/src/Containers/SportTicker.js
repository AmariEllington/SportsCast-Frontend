import Ticker from "react-ticker";

import React, { Component } from "react";

export default class SportTicker extends Component {
  render() {
    return (
      <div className="sportsTickerDiv">
        {" "}
        <iframe
          src="http://espn.go.com/bottomline/espnewsbottomlinebasic.html"
          height="65"
          frameBorder="0"
          scrolling="no"
          allowtransparency="false"
          className="sportsTicker"
        />
      </div>
    );
  }
}
