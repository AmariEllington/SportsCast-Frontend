import React, { Component } from "react";

export default class YoutubeMenu extends Component {
  render() {
    return (
      <div>
        <div class="ui inline dropdown simple item ">
          <div class="text">
            <i class="youtube icon" />
            Select A Youtube Playlist
          </div>
          <i class="dropdown icon" />
          <div class="menu">
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLDSAlkBZMWj6HxQaOIwvWYWmrN-UMal93"
            >
              <i class="futbol icon" />
              AFC Bournemouth
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLvuwbYTkUzHexAhSfsCRzKU0WVut5jE_S"
            >
              <i class="futbol icon" />
              Arsenal FC
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLiR0-7AEE2HrHpy3MQyPvsWhgjWJc99fC"
            >
              <i class="futbol icon" />
              Aston Villa
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PLU4NF13Grb9HXwr0ijDpE1G7gxdbRuOWO"
            >
              <i class="futbol icon" />
              Brighton & Hove Albion
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUhvUXuSDeEFSQZS8GcPMtkg"
            >
              <i class="futbol icon" />
              Burnley FC
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUU2PacFf99vhb3hNiYDmxww"
            >
              <i class="futbol icon" />
              Chelsea FC
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PL18wCAmgRhL-HGQcH-DdV9Rfldd3ttvVx"
            >
              <i class="futbol icon" />
              Crystal Palace F.C.
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUtK4QAczAN2mt2ow_jlGinQ"
            >
              <i class="futbol icon" />
              Everton
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUBkRQtxofyXr09mWtgoUUqw"
            >
              <i class="futbol icon" />
              Leicester City
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UU9LQwHZoucFT94I2h6JOcjw"
            >
              <i class="futbol icon" />
              Liverpool FC
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUkzCjdRMrW2vXLx8mvPVLdQ"
            >
              <i class="futbol icon" />
              Manchester City
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=PL5-QUghxmluLMkbbPv2xW8jGkgyXam1nP"
            >
              <i class="futbol icon" />
              Manchester United
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUywGl_BPp9QhD0uAcP2HsJw"
            >
              <i class="futbol icon" />
              Newcastle United FC
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUzdkZv6--BWsUQ9rKUtQ1TQ"
            >
              <i class="futbol icon" />
              Norwich City FC
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUVER_UoBt84YUrA6s402Q-g"
            >
              <i class="futbol icon" />
              Sheffield United
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUxvXjfiIHQ2O6saVx_ZFqnw"
            >
              <i class="futbol icon" />
              Southampton FC
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUptKljTrbdMTgmuekGKhRug"
            >
              <i class="futbol icon" />
              Watford Football Club
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUCNOsmurvpEit9paBOzWtUg"
            >
              <i class="futbol icon" />
              West Ham United
            </option>
            <option
              class="item youtubeMenuItem"
              onClick={this.props.updateYoutubeMenu}
              value="https://www.youtube.com/playlist?list=UUQ7Lqg5Czh5djGK6iOG53KQ"
            >
              <i class="futbol icon" />
              Wolves
            </option>
          </div>
        </div>
      </div>
    );
  }
}
