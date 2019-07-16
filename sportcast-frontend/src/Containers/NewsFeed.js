import React, { Component } from "react";
import News from "../Components/News";

import { Button } from "semantic-ui-react";

import "../App.css";

const UKURL = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const USAURL = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const BRAZILURL = `https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const FRANCEURL = `https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;

export default class NewsFeed extends Component {
  state = {
    newsStories: []
  };

  componentDidMount() {
    fetch(UKURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  }

  handleClickUSA = () => {
    fetch(UKURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  };

  handleClickUSA = () => {
    fetch(USAURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  };

  handleClickBrazil = () => {
    fetch(BRAZILURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  };

  handleClickFrance = () => {
    fetch(FRANCEURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  };

  render() {
    const { newsStories } = this.state;

    return (
      <div className="newsfeed card">
        <div class="ui buttons">
          <button class="ui button" onClick={this.handleClickUK}>
            UK
          </button>
          <button class="ui button" onClick={this.handleClickUSA}>
            USA
          </button>
          <button class="ui button" onClick={this.handleClickBrazil}>
            Brazil
          </button>
          <button class="ui button" onClick={this.handleClickFrance}>
            France
          </button>
        </div>
        {newsStories.map((news, index) => (
          <News key={news.id} news={news} index={index} />
        ))}
      </div>
    );
  }
}