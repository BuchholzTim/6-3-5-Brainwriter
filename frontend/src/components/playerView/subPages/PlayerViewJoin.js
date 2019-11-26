import React, { Component } from "react";
import { Form, FormField, TextInput, Button, Box } from "grommet";

import { ROUND } from "../pages";

import { connect } from "react-redux";
import { setUserData } from "../../../redux/actions/playerActions";

export class PlayerViewJoin extends Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.fetchPosts();
  }

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

  nextPage = () => {
    const { userName, joinCode } = this.state;
    this.props.setUserData({
      joinCode,
      userName
    });
    this.props.setPage(ROUND);
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

export default connect(null, { setUserData })(PlayerViewJoin);
