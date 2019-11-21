import React, { Component } from "react";
import TopicConfig from "./TopicConfig";
//import {Button, Grommet} from 'grommet';

export class PlayerView extends Component {
  state = {
    page: ""
  };

  switchPage = event => {
    this.setState({
      page: event.target.value
    });
  };

  renderPage(page) {
    switch (page) {
      case "1":
        return <h1>case1</h1>;
      case "2":
        return <h1>case2</h1>;
      default:
        return <TopicConfig currentPage={page} />;
    }
  }

  render() {
    const page = this.state.page;
    return this.renderPage(page);
  }
}

export default PlayerView;
