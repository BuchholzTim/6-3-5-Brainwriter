import React, { Component } from "react";
import TopicConfig from "./subPages/TopicConfig";
import TopicControls from "./subPages/TopicControls";
import TopicPreparation from "./subPages/TopicPreparation";
import { CONTROLS, PREPARATION } from "./pages";

import { connect } from "react-redux";

export class Topic extends Component {
  switchPage = () => {
    const { page } = this.props.page;
    switch (page) {
      case PREPARATION:
        return <TopicPreparation></TopicPreparation>;
      case CONTROLS:
        return <TopicControls></TopicControls>;
      default:
        return <TopicConfig></TopicConfig>;
    }
  };

  render() {
    const { topicPage } = this.props.topicPage;
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
