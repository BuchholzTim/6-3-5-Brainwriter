import React, { Component } from "react";
import { Form, FormField, TextInput, Button, Box } from "grommet";

export class JoinTopic extends Component {
  setUserName = event => {
    this.setState({
      userName: event
    });
    console.log(event);
  };

  setJoinCode = event => {
    this.setState({
      joinCode: event
    });
    console.log(event);
  };

  nextPage = () => {
    console.log("Getting calleed");
    this.props.setPage("ENTER");
  };

  render() {
    return (
      <Box fill align="center" justify="center">
        <Form onSubmit={this.nextPage}>
          <FormField
            label="User-Name"
            placeholder="Guter Username"
            name="userName"
            component={TextInput}
            onChange={event => this.setUserName(event.target.value)}
            required
          />
          <FormField
            label="Join-Code"
            placeholder="Guter JoinCode"
            name="joinCode"
            component={TextInput}
            onChange={event => this.setJoinCode(event.target.value)}
            required
          />
          <Button type="submit" label="Runde beitreten" primary />
        </Form>
      </Box>
    );
  }
}

export default JoinTopic;
