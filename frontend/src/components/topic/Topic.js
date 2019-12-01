import React, { Component } from "react";
import TopicConfig from "./subPages/TopicConfig";
import TopicControls from "./subPages/TopicControls";
import TopicPreparation from "./subPages/TopicPreparation";

import { CONTROLS, PREPARATION } from "./pages";

import { connect } from "react-redux";

export class Topic extends Component {
  render() {
    const { topicPage } = this.props;
    switch (topicPage) {
      case PREPARATION:
        return <TopicPreparation></TopicPreparation>;
      case CONTROLS:
        return <TopicControls></TopicControls>;
      default:
        return <TopicConfig></TopicConfig>;
    }
  }
}

const mapStateToProps = state => ({
  topicPage: state.pageReducer.topicPage
});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
