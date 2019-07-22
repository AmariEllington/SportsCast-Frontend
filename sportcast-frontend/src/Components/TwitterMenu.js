import React, { Component } from "react";

export default class TwitterMenu extends Component {
  render() {
    return (
      <div>
        <div className="ui inline dropdown simple item ">
          <div className="text">
            <i className="twitter squarefoot icon" />
            Select A Twitter Page
          </div>
          <i className="dropdown icon" />
          <div className="menu">
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="afcbournemouth"
            >
              <i className="futbol icon" />
              AFC Bournemouth
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Arsenal"
            >
              <i className="futbol icon" />
              Arsenal FC
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="AVFCOfficial"
            >
              <i className="futbol icon" />
              Aston Villa
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="OfficialBHAFC"
            >
              <i className="futbol icon" />
              Brighton & Hove Albion
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="BurnleyOfficial"
            >
              <i className="futbol icon" />
              Burnley FC
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="ChelseaFC"
            >
              <i className="futbol icon" />
              Chelsea FC
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="CPFC"
            >
              <i className="futbol icon" />
              Crystal Palace F.C.
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Everton"
            >
              <i className="futbol icon" />
              Everton
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="LCFC"
            >
              <i className="futbol icon" />
              Leicester City
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="LFC"
            >
              <i className="futbol icon" />
              Liverpool FC
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="ManCity"
            >
              <i className="futbol icon" />
              Manchester City
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="ManUtd"
            >
              <i className="futbol icon" />
              Manchester United
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="NUFC"
            >
              <i className="futbol icon" />
              Newcastle United FC
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="NorwichCityFC"
            >
              <i className="futbol icon" />
              Norwich City FC
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="SheffieldUnited"
            >
              <i className="futbol icon" />
              Sheffield United
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="SouthamptonFC"
            >
              <i className="futbol icon" />
              Southampton FC
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="WatfordFC"
            >
              <i className="futbol icon" />
              Watford Football Club
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="WestHamUtd"
            >
              <i className="futbol icon" />
              West Ham United
            </option>
            <option
              className="item twitterMenuItem"
              onClick={this.props.updateTwitterMenu}
              value="Wolves"
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
