import React, { Component } from "react";
import News from "../Components/News";

import { Button } from "semantic-ui-react";

import "../App.css";

const UKURL = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const USAURL = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const BRAZILURL = `https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const FRANCEURL = `https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const CANADAURL = `https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const PORTUGALURL = `https://newsapi.org/v2/top-headlines?country=pt&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const GERMANYURL = `https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
const IRELANDURL = `https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
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

  handleClickUK = () => {
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

  handleClickCanada = () => {
    fetch(CANADAURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  };

  handleClickPortugal = () => {
    fetch(PORTUGALURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  };

  handleClickChinese = () => {
    fetch(GERMANYURL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  };

  handleClickIreland = () => {
    fetch(IRELANDURL)
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
      <div className="card-item">
        <div className="ui buttons ">
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickUK}
          >
            UK
          </button>
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickUSA}
          >
            USA
          </button>
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickCanada}
          >
            Canada
          </button>
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickBrazil}
          >
            Brazil
          </button>
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickFrance}
          >
            France
          </button>
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickPortugal}
          >
            Portugal
          </button>
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickChinese}
          >
            Germany
          </button>
          <button
            className="ui button"
            id="buttonColour"
            onClick={this.handleClickIreland}
          >
            Ireland
          </button>
        </div>
        {newsStories.map((news, index) => (
          <News key={index} news={news} index={index} />
        ))}
      </div>
    );
  }
}
