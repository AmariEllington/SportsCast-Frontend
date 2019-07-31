import React, { Component } from "react";

export default class Preference extends Component {
  render() {
    return (
      <div>
        <Segment inverted className="menuAppBar">
          <Menu inverted>
            <div
              className="ui animated button"
              tabIndex="0"
              onClick={this.props.handleLogOut}
            >
              <div className="visible content">Logout</div>
              <div className="hidden content">
                <i className="hand peace icon" />
              </div>
            </div>

            <Button onClick={this.show("blurring")}>Preference</Button>

            <Modal dimmer={dimmer} open={open} onClose={this.close}>
              <Modal.Header>Preference</Modal.Header>
              <Modal.Content>
                <YoutubeMenu updateYoutubeMenu={this.updateYoutubeMenu} />
                <input />
                <TwitterMenu updateTwitterMenu={this.updateTwitterMenu} />
                <input />
              </Modal.Content>
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
      </div>
    );
  }
}
