import React, { Component } from "react";
import { Form, FormField, TextInput, Button, Box } from "grommet";
import { ROUND } from "../pages";
import { connect } from "react-redux";
import { setTopicData } from "../../../redux/actions/topicActions";
import { setPlayerPage } from "../../../redux/actions/pageActions";

import { joinTopic, getMessages } from "../../../axios/apiCalls";

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

  onSubmit = () => {
    const { userName, joinCode } = this.state;

    joinTopic(userName, joinCode)
      .then(data => {
        const topic = data.topic;
        const author = data.author;
        this.props.setTopicData({
          joinCode: topic.joinCode,
          timePerRound: topic.timePerRound,
          topic: topic.topic,
          userName: author.userName
        });
        return;
      })
      .then(() => {
        return getMessages(joinCode);
      })
      .then(messages => {
        this.props.setMessages(messages);
        this.nextPage(ROUND);
      });
  };

  nextPage = () => {
    this.props.setPage(ROUND);
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

const mapStateToProps = state => ({
  stateUserName: state.topicReducer.userName,
  stateJoinCode: state.topicReducer.joinCode
});

const mapDispatchToProps = {
  setPage: setPlayerPage,
  setTopicData: setTopicData,
  setMessages: setMessages
  // join: join
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewJoin);
