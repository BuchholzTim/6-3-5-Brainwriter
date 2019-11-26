import React, { Component } from "react";
import { Form, FormField, TextInput, Button, Box } from "grommet";

import { ROUND } from "../pages";

import { connect } from "react-redux";
import { setUserData, getTopicData } from "../../../redux/actions/topicActions";
import { setPlayerPage } from "../../../redux/actions/pageActions";

export class PlayerViewJoin extends Component {
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

    this.props.getTopicData(joinCode);

    this.props.setUserData({
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

const mapStateToProps = null;
const mapDispatchToProps = {
  setUserData: setUserData,
  setPage: setPlayerPage,
  getTopicData: getTopicData
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewJoin);
