import React, { Component } from "react";
import TopicConfig from "./subPages/TopicConfig";
import TopicControl from "./subPages/TopicControl";
import TopicWaitingRoom from "./subPages/TopicWaitingRoom";

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

  switchPage = () => {
    const { page } = this.state;
    switch (page) {
      case "WAITING":
        return <TopicWaitingRoom setPage={this.setPage}></TopicWaitingRoom>;
      case "CONTROL":
        return <TopicControl setPage={this.setPage}></TopicControl>;
      default:
        return <TopicConfig setPage={this.setPage}></TopicConfig>;
    }
  };

  render() {
    return this.switchPage();
  }
}

export default Topic;
