import React, { Component } from "react";
import SpotifyPlayer from "react-spotify-player";

export default class Spotify extends Component {
  render() {
    // const size = {
    //   width: "100%",
    //   height: 300
    // };
    const view = "list"; // or 'coverart'
    const theme = "white"; // or 'white'

    return (
      <div className="spotify">
        <SpotifyPlayer
          uri="spotify:show:2NqEBd6EJNfs6A3527xwVD"
          view={view}
          theme={theme}
        />
      </div>
    );
  }
}
