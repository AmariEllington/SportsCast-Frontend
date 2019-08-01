import React, { Component } from "react";
import Podcast from "../Components/Podcast";

const URL = `http://localhost:3001/podcast_group/`;
export default class PodcastContainer extends Component {
  state = {
    podcast: "football",
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
          <div className="ui buttons podcastMenu">
            <button
              className="ui button"
              name="football"
              id="buttonColour"
              onClick={this.handleClick}
            >
              Football
            </button>
            <button
              className="ui button"
              name="nba"
              id="buttonColour"
              onClick={this.handleClick}
            >
              NBA
            </button>
            <button
              className="ui button"
              name="nfl"
              id="buttonColour"
              onClick={this.handleClick}
            >
              NFL
            </button>
            <button
              className="ui button"
              name="rugby"
              id="buttonColour"
              onClick={this.handleClick}
            >
              Rugby
            </button>
            <button
              className="ui button"
              name="college_basketball"
              id="buttonColour"
              onClick={this.handleClick}
            >
              College Basketball
            </button>
            <button
              className="ui button"
              name="college_football"
              id="buttonColour"
              onClick={this.handleClick}
            >
              College Football
            </button>
            <button
              className="ui button"
              name="mlb"
              id="buttonColour"
              onClick={this.handleClick}
            >
              MLB
            </button>

            <button
              className="ui button"
              name="boxing"
              id="buttonColour"
              onClick={this.handleClick}
            >
              Boxing
            </button>
            <button
              className="ui button"
              name="golf"
              id="buttonColour"
              onClick={this.handleClick}
            >
              Golf
            </button>
          </div>

          <div>
            {this.state.allPodcast.map((podcast, index) => (
              <Podcast podcast={podcast} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
