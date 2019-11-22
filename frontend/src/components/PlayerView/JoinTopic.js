import React, { Component } from "react";
import { Form, FormField, TextInput, Button, Grommet } from "grommet";

export class JoinTopic extends Component {
  state = {
    userName: "",
    joinCode: ""
  };

  setUserName = event => {
    this.setState({
      userName: event
    });
  };

  setJoinCode = event => {
    this.setState({
      joinCode: event
    });
  };

  submitSuck = () => {
    console.log(this.state.userName);
    console.log(this.state.joinCode);
  };

  render() {
    const { userName } = this.state;
    const { joinCode } = this.state;
    return (
      <Grommet>
        <Form onSubmit={this.submitSuck}>
          <FormField
            label="User-Name"
            placeholder="Cockstopfer_69"
            name="userName"
            component={TextInput}
            value={userName}
            onChange={event => this.setUserName(event.target.value)}
            required
          />

          <FormField
            label="Join-Code"
            placeholder="OwO420"
            name="joinCode"
            component={TextInput}
            value={joinCode}
            onChange={event => this.setJoinCode(event.target.value)}
            required
          />

          <Button type="submit" primary label="Runde beitreten" />
        </Form>
      </Grommet>
    );
  }
}

export default JoinTopic;
