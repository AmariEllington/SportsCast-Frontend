import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <div
            class="ui animated button"
            tabindex="0"
            onClick={this.props.handleLogOut}
          >
            <div class="visible content">Logout</div>
            <div class="hidden content">
              <i class="hand peace icon" />
            </div>
          </div>
        </Menu>
      </Segment>
    );
  }
}
