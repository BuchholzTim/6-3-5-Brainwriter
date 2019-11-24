import React, { Component } from "react";
import { Form, FormField, TextInput, Button, Grommet } from "grommet";

export class JoinTopic extends Component {
  state = {
    userName: this.props.userName,
    joinCode: this.props.joinCode
  };

  setUserName = event => {
    // this.props.setUserName(event);
    this.setState({
      userName: event
    });
  };

  setJoinCode = event => {
    // this.props.setJoinCode(event);
    this.setState({
      joinCode: event
    });
  };

  submit = () => {
    console.log(this.state.userName);
    console.log(this.state.joinCode);
    this.props.setPage("1");
  };

  render() {
    const { userName } = this.state;
    const { joinCode } = this.state;
    return (
      <Grommet>
        <Form onSubmit={this.submit}>
          <FormField
            label="User-Name"
            placeholder="Guter Username"
            name="userName"
            component={TextInput}
            value={userName}
            onChange={event => this.setUserName(event.target.value)}
            required
          />

          <FormField
            label="Join-Code"
            placeholder="Guter JoinCode"
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
