import React, { Component } from "react";

export default class TwitterMenu extends Component {
  render() {
    return (
      <div>
        <div class="ui inline dropdown simple item ">
          <div class="text">
            <img class="ui avatar image" src="/images/avatar/small/jenny.jpg" />
            Jenny Hess
          </div>
          <i class="dropdown icon" />
          <ul class="menu">
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="afcbournemouth"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/jenny.jpg"
              />
              AFC Bournemouth
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Arsenal"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/elliot.jpg"
              />
              Arsenal FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="AVFCOfficial"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/stevie.jpg"
              />
              Aston Villa
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="OfficialBHAFC"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/christian.jpg"
              />
              Brighton & Hove Albion
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="BurnleyOfficial"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/matt.jpg"
              />
              Burnley FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="ChelseaFC"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/justen.jpg"
              />
              Chelsea FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="CPFC"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/justen.jpg"
              />
              Crystal Palace F.C.
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Everton
"
            >
              <img
                class="ui avatar image"
                src="/images/avatar/small/justen.jpg"
              />
              Everton
            </option>
          </ul>
        </div>
      </div>
    );
  }
}
