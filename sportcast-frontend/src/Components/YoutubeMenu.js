import React, { Component } from "react";

export default class YoutubeMenu extends Component {
  render() {
    return (
      <div>
        <div className="ui inline dropdown simple item ">
          <div className="text">
            <i className="youtube icon" />
            Select A Youtube Playlist
          </div>
          <i className="dropdown icon" />
          <div className="menu">
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLDSAlkBZMWj6HxQaOIwvWYWmrN-UMal93"
            >
              <i className="futbol icon" />
              AFC Bournemouth
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLvuwbYTkUzHexAhSfsCRzKU0WVut5jE_S"
            >
              <i className="futbol icon" />
              Arsenal FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLiR0-7AEE2HrHpy3MQyPvsWhgjWJc99fC"
            >
              <i className="futbol icon" />
              Aston Villa
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLU4NF13Grb9HXwr0ijDpE1G7gxdbRuOWO"
            >
              <i className="futbol icon" />
              Brighton & Hove Albion
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUhvUXuSDeEFSQZS8GcPMtkg"
            >
              <i className="futbol icon" />
              Burnley FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUU2PacFf99vhb3hNiYDmxww"
            >
              <i className="futbol icon" />
              Chelsea FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PL18wCAmgRhL-HGQcH-DdV9Rfldd3ttvVx"
            >
              <i className="futbol icon" />
              Crystal Palace F.C.
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUtK4QAczAN2mt2ow_jlGinQ"
            >
              <i className="futbol icon" />
              Everton
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUBkRQtxofyXr09mWtgoUUqw"
            >
              <i className="futbol icon" />
              Leicester City
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UU9LQwHZoucFT94I2h6JOcjw"
            >
              <i className="futbol icon" />
              Liverpool FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUkzCjdRMrW2vXLx8mvPVLdQ"
            >
              <i className="futbol icon" />
              Manchester City
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PL5-QUghxmluLMkbbPv2xW8jGkgyXam1nP"
            >
              <i className="futbol icon" />
              Manchester United
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUywGl_BPp9QhD0uAcP2HsJw"
            >
              <i className="futbol icon" />
              Newcastle United FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUzdkZv6--BWsUQ9rKUtQ1TQ"
            >
              <i className="futbol icon" />
              Norwich City FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUVER_UoBt84YUrA6s402Q-g"
            >
              <i className="futbol icon" />
              Sheffield United
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUxvXjfiIHQ2O6saVx_ZFqnw"
            >
              <i className="futbol icon" />
              Southampton FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUptKljTrbdMTgmuekGKhRug"
            >
              <i className="futbol icon" />
              Watford Football Club
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUCNOsmurvpEit9paBOzWtUg"
            >
              <i className="futbol icon" />
              West Ham United
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUQ7Lqg5Czh5djGK6iOG53KQ"
            >
              <i className="futbol icon" />
              Wolves
            </option>
          </div>
        </div>
      </div>
    );
  }
}
