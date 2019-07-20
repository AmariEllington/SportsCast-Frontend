import React, { Component } from "react";

export default class TwitterMenu extends Component {
  render() {
    return (
      <div>
        <div class="ui inline dropdown simple item ">
          <div class="text">
            <i class="twitter squarefoot icon" />
            Select A Twitter Page
          </div>
          <i class="dropdown icon" />
          <div class="menu">
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="afcbournemouth"
            >
              <i class="futbol icon" />
              AFC Bournemouth
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Arsenal"
            >
              <i class="futbol icon" />
              Arsenal FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="AVFCOfficial"
            >
              <i class="futbol icon" />
              Aston Villa
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="OfficialBHAFC"
            >
              <i class="futbol icon" />
              Brighton & Hove Albion
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="BurnleyOfficial"
            >
              <i class="futbol icon" />
              Burnley FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="ChelseaFC"
            >
              <i class="futbol icon" />
              Chelsea FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="CPFC"
            >
              <i class="futbol icon" />
              Crystal Palace F.C.
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Everton"
            >
              <i class="futbol icon" />
              Everton
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="LCFC"
            >
              <i class="futbol icon" />
              Leicester City
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="LFC"
            >
              <i class="futbol icon" />
              Liverpool FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="ManCity"
            >
              <i class="futbol icon" />
              Manchester City
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="ManUtd"
            >
              <i class="futbol icon" />
              Manchester United
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="NUFC"
            >
              <i class="futbol icon" />
              Newcastle United FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="NorwichCityFC"
            >
              <i class="futbol icon" />
              Norwich City FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="SheffieldUnited"
            >
              <i class="futbol icon" />
              Sheffield United
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="SouthamptonFC"
            >
              <i class="futbol icon" />
              Southampton FC
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="WatfordFC"
            >
              <i class="futbol icon" />
              Watford Football Club
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="WestHamUtd"
            >
              <i class="futbol icon" />
              West Ham United
            </option>
            <option
              class="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Wolves"
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
