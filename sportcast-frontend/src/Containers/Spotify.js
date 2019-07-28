import React, { Component } from "react";

export default class Spotify extends Component {
  state = {
    podcast: "SportsTalkShow"
  };

  handleClick = event => {
    this.setState({
      podcast: event.target.name
    });
  };

  renderPodcast = () => {
    let state = this.state.podcast;

    switch (state) {
      case "SportsTalkShow":
        return "https://tunein.com/embed/player/p857/";
      case "Football":
        return "https://tunein.com/embed/player/p1854/";
      case "CollegeBasketball":
        return "https://tunein.com/embed/player/p307305/";
      case "CollegeFootball":
        return "https://tunein.com/embed/player/p796870/";
      case "MLB":
        return "https://tunein.com/embed/player/p779237/";
      case "NBA":
        return "https://tunein.com/embed/player/p393714/";
      case "NFL":
        return "https://tunein.com/embed/player/p532683/";
      case "Rugby":
        return "https://tunein.com/embed/player/p1162744/";
      case "Boxing":
        return "https://tunein.com/embed/player/p966710/";
      case "Golf":
        return "https://tunein.com/embed/player/p1156777/";
    }
  };

  render() {
    return (
      <div className="spotifyDiv">
        <div className="card-item spotifyInnerDiv">
          <div className="ui buttons ">
            <button
              className="ui button"
              name="SportsTalkShow"
              onClick={this.handleClick}
            >
              Sports Talk Shows
            </button>
            <button
              className="ui button"
              name="Football"
              onClick={this.handleClick}
            >
              Football
            </button>
            <button
              className="ui button"
              name="CollegeBasketball"
              onClick={this.handleClick}
            >
              College Basketball
            </button>
            <button
              className="ui button"
              name="CollegeFootball"
              onClick={this.handleClick}
            >
              College Football
            </button>
            <button className="ui button" name="MLB" onClick={this.handleClick}>
              MLB
            </button>
            <button className="ui button" name="NBA" onClick={this.handleClick}>
              NBA
            </button>
            <button className="ui button" name="NFL" onClick={this.handleClick}>
              NFL
            </button>
            <button
              className="ui button"
              name="Rugby"
              onClick={this.handleClick}
            >
              Rugby
            </button>
            <button
              className="ui button"
              name="Boxing"
              onClick={this.handleClick}
            >
              Boxing
            </button>
            <button
              className="ui button"
              name="Golf"
              onClick={this.handleClick}
            >
              Golf
            </button>
          </div>

          <div>
            <iframe
              src={this.renderPodcast()}
              scrolling="no"
              frameborder="no"
              className="podcast"
            />
          </div>
        </div>
      </div>
    );
  }
}
