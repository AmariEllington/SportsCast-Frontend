import React, { Component } from "react";
import SpotifyPlayer from "react-spotify-player";

export default class Spotify extends Component {
  render() {
    // const size = {
    //   width: "100%",
    //   height: 300
    // };
    // const view = "list"; // or 'coverart'
    // const theme = "white"; // or 'white'

    // return (
    //   <div className="spotify">
    //     <SpotifyPlayer
    //       uri="spotify:show:2NqEBd6EJNfs6A3527xwVD"
    //       view={view}
    //       theme={theme}
    //     />
    //   </div>
    // );

    return (
      <div>
        <iframe
          width="100%"
          height="400"
          src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Fguardianfootballweekly%2F"
          frameborder="0"
        />
      </div>
    );
  }
}
