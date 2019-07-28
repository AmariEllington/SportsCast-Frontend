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
        return <div>SportsTalkShow</div>;
      case "Football":
        return <div>Football</div>;
      case "CollegeBasketball":
        return <div>CollegeBasketball</div>;
      case "CollegeFootball":
        return <div>CollegeFootball</div>;
      case "MLB":
        return <div>MLB</div>;
      case "NBA":
        return <div>NBA</div>;
      case "NFL":
        return <div>NFL</div>;
      case "Rugby":
        return <div>Rugby</div>;
      case "Boxing":
        return <div>Boxing</div>;
      case "Golf":
        return <div>Golf</div>;
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

          <div>{this.renderPodcast()}</div>
        </div>
      </div>
    );
  }
}
