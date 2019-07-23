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
              id="AFC Bournemouth"
            >
              <i className="futbol icon" />
              AFC Bournemouth
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLvuwbYTkUzHexAhSfsCRzKU0WVut5jE_S"
              id="Arsenal FC"
            >
              <i className="futbol icon" />
              Arsenal FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLiR0-7AEE2HrHpy3MQyPvsWhgjWJc99fC"
              id="Aston Villa"
            >
              <i className="futbol icon" />
              Aston Villa
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLU4NF13Grb9HXwr0ijDpE1G7gxdbRuOWO"
              id="Brighton & Hove Albion"
            >
              <i className="futbol icon" />
              Brighton & Hove Albion
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUhvUXuSDeEFSQZS8GcPMtkg"
              id="Burnley FC"
            >
              <i className="futbol icon" />
              Burnley FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUU2PacFf99vhb3hNiYDmxww"
              id="Chelsea FC"
            >
              <i className="futbol icon" />
              Chelsea FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PL18wCAmgRhL-HGQcH-DdV9Rfldd3ttvVx"
              id="Crystal Palace F.C."
            >
              <i className="futbol icon" />
              Crystal Palace F.C.
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUtK4QAczAN2mt2ow_jlGinQ"
              id="Everton"
            >
              <i className="futbol icon" />
              Everton
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUBkRQtxofyXr09mWtgoUUqw"
              id="Leicester City"
            >
              <i className="futbol icon" />
              Leicester City
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UU9LQwHZoucFT94I2h6JOcjw"
              id="Liverpool FC"
            >
              <i className="futbol icon" />
              Liverpool FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUkzCjdRMrW2vXLx8mvPVLdQ"
              id="Manchester City"
            >
              <i className="futbol icon" />
              Manchester City
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PL5-QUghxmluLMkbbPv2xW8jGkgyXam1nP"
              id="Manchester United"
            >
              <i className="futbol icon" />
              Manchester United
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUywGl_BPp9QhD0uAcP2HsJw"
              id="Newcastle United FC"
            >
              <i className="futbol icon" />
              Newcastle United FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUzdkZv6--BWsUQ9rKUtQ1TQ"
              id="Norwich City FC"
            >
              <i className="futbol icon" />
              Norwich City FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUVER_UoBt84YUrA6s402Q-g"
              id="Sheffield United"
            >
              <i className="futbol icon" />
              Sheffield United
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUxvXjfiIHQ2O6saVx_ZFqnw"
              id="Southampton FC"
            >
              <i className="futbol icon" />
              Southampton FC
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUptKljTrbdMTgmuekGKhRug"
              id="Watford Football Club"
            >
              <i className="futbol icon" />
              Watford Football Club
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUCNOsmurvpEit9paBOzWtUg"
              id="West Ham United"
            >
              <i className="futbol icon" />
              West Ham United
            </option>
            <option
              className="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUQ7Lqg5Czh5djGK6iOG53KQ"
              id="Wolves"
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
