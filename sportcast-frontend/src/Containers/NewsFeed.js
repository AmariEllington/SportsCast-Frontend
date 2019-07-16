import React, { Component } from "react";
import News from "../Components/News";

import "../App.css";

const URL = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;

export default class NewsFeed extends Component {
  state = {
    newsStories: []
  };

  componentDidMount() {
    fetch(URL)
      .then(data => data.json())
      .then(data =>
        this.setState({
          newsStories: data.articles
        })
      );
  }

  render() {
    const { newsStories } = this.state;

    return (
      <div className="newsfeed card">
        {newsStories.map((news, index) => (
          <News key={news.id} news={news} index={index} />
        ))}
      </div>
    );
  }
}
