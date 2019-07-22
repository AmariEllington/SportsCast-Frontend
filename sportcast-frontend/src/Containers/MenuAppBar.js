import React, { Component } from "react";
import { Menu, Segment, Button, Image, Modal, Header } from "semantic-ui-react";

export default class MenuExampleInvertedSegment extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    return (
      <Segment inverted>
        <Menu inverted secondary>
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

          <Button onClick={this.show("blurring")}>Blurring</Button>

          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Preference</Modal.Header>
            <Modal.Content />
            <Modal.Actions>
              <Button color="black" onClick={this.close}>
                Close
              </Button>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Set"
                onClick={this.close}
              />
            </Modal.Actions>
          </Modal>
        </Menu>
      </Segment>
    );
  }
}
