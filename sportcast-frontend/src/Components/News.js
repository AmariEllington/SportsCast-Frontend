import React, { Component } from "react";

import "../App.css";

export default class News extends Component {
  render() {
    const { urlToImage, title, url, content } = this.props.news;
    return (
      <div className="newsCard">
        <img src={urlToImage} alt={title} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
      </div>
    );
  }
}
