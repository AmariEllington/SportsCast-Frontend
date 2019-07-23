import React, { Component } from "react";
import { Menu, Segment, Button, Image, Modal, Header } from "semantic-ui-react";
import YoutubeMenu from "../Components/YoutubeMenu";
import TwitterMenu from "../Components/TwitterMenu";

export default class MenuExampleInvertedSegment extends Component {
  state = {
    open: false,
    youtube: "",
    twitter: ""
  };

  //////// ----- menu modal ------ ///////
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  ////// ---- updating state ------ //////

  updateYoutubeMenu = event => {
    this.setState({
      youtube: event.target.value
    });
    console.log(event);
  };

  updateTwitterMenu = event => {
    this.setState({
      twitter: event.target.value
    });
    console.log(event);
  };

  render() {
    const { open, dimmer } = this.state;
    return (
      <Segment inverted>
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
    );
  }
}
