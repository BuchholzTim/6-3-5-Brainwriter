import React, { Component } from "react";
import { TopicConfig } from "./subPages/TopicConfig";
import { TopicControls } from "./subPages/TopicControls";
import { TopicPreparation } from "./subPages/TopicPreparation";
import { CONTROLS, PREPARATION } from "./pages";

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
      case PREPARATION:
        return <TopicPreparation setPage={this.setPage}></TopicPreparation>;
      case CONTROLS:
        return <TopicControls setPage={this.setPage}></TopicControls>;
      default:
        return <TopicConfig setPage={this.setPage}></TopicConfig>;
    }
  };

  render() {
    return this.switchPage();
  }
}

export default Topic;
