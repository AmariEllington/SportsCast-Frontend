import React, { Component } from "react";
import Podcast from "../Components/Podcast";

const URL = `http://localhost:3001/podcast_group/`;
export default class Spotify extends Component {
  state = {
    podcast: "nba",
    allPodcast: []
  };

  componentDidMount() {
    this.getAllPodcast();
  }

  getAllPodcast = () => {
    fetch(URL + `${this.state.podcast}`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          allPodcast: resp
        });
      });
  };

  handleClick = event => {
    this.setState(
      {
        podcast: event.target.name
      },
      () => this.getAllPodcast()
    );
  };

  render() {
    return (
      <div className="spotifyDiv">
        <div className="card-item spotifyInnerDiv">
          <div className="ui buttons ">
            <button
              className="ui button"
              name="football"
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
            <button className="ui button" name="nba" onClick={this.handleClick}>
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
            {this.state.allPodcast.map((podcast, index) => (
              <Podcast podcast={podcast} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
