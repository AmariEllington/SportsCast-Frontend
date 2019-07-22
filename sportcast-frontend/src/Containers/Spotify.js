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
      <div className="card-item">
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fguardianfootballweekly%2F"
          frameBorder="0"
        />
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Ffoxsportsfootballshow%2F"
          frameBorder="0"
        />
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FESPNFantasyFocusFootball%2F"
          frameBorder="0"
        />
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Ffoxcricketpodcast-foxsportsaus%2F"
          frameBorder="0"
        />
        <iframe
          width="100%"
          height="60"
          src="https://open.spotify.com/show/1RDjh3ix2iXvatREVd4VLR"
          frameBorder="0"
        />
      </div>
    );
  }
}
