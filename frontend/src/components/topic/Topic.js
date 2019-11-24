import React, { Component } from "react";
import TopicConfig from "./TopicConfig";
import TopicControl from "./TopicControl";
import TopicWaitingRoom from "./TopicWaitingRoom";
import { Switch, Route } from "react-router-dom";

export class Topic extends Component {
  state = {
    question: "",
    time: ""
  };

  setPage = page => {
    this.setState({ page: page });
  };

  setQuestion = question => {
    this.setState({ question: question });
  };

  setTime = time => {
    this.setState({ time: time });
  };

  render() {
    const { question } = this.state;
    const { time } = this.state;

    return (
      <Switch>
        <Route path="/topic/controls">
          <TopicControl></TopicControl>
        </Route>
        <Route path="/topic/waiting">
          <TopicWaitingRoom></TopicWaitingRoom>
        </Route>
        <Route path="/topic">
          <TopicConfig></TopicConfig>
        </Route>
      </Switch>
    );
  }
}

export default Topic;
