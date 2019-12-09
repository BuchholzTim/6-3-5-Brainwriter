import React, { Component } from "react";
import { connect } from "react-redux";
import { emitJoin } from "../../../socket/socket";
import { Form, FormField, TextInput, Button, Box } from "grommet";
import { PREPARE } from "../pages";
import { setTopicData } from "../../../redux/actions/topicActions";
import { setAuthorData } from "../../../redux/actions/authorActions";
import { setPlayerPage } from "../../../redux/actions/pageActions";
import { joinTopic } from "../../../axios/apiCalls";

export class PlayerViewJoin extends Component {
  state = {
    userName: "",
    joinCode: ""
  };

  setUserName = userName => {
    this.setState({
      userName: userName
    });
  };

  setJoinCode = joinCode => {
    this.setState({
      joinCode: joinCode
    });
  };

  onSubmit = () => {
    const { userName, joinCode } = this.state;

    joinTopic({ userName, joinCode })
      .then(response => {
        const topic = response.topic;
        const author = response.author;
        this.props.setTopicData(topic);
        this.props.setAuthorData(author);
        return;
      })
      .then(() => {
        emitJoin(joinCode);
        return;
      })
      .then(() => {
        this.nextPage();
      });
  };

  nextPage = () => {
    this.props.setPage(PREPARE);
  };

  render() {
    return (
      <Box fill align="center" justify="center">
        <Form onSubmit={this.onSubmit}>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setPage: setPlayerPage,
  setTopicData: setTopicData,
  setAuthorData: setAuthorData
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewJoin);
