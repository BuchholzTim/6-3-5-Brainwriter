import React, {Component} from "react";
import {connect} from "react-redux";
import {CONTROLS, PREPARATION, SUMMARY} from "./pages";
import TopicConfig from "./subPages/TopicConfig";
import TopicControls from "./subPages/TopicControls";
import TopicPreparation from "./subPages/TopicPreparation";
import Summary from "../tools/Summary";

export class Topic extends Component {
    render() {
        const {topicPage} = this.props;
        switch (topicPage) {
            case PREPARATION:
                return <TopicPreparation/>;
            case CONTROLS:
                return <TopicControls/>;
            case SUMMARY:
                return <Summary/>;
            default:
                return <TopicConfig/>;
        }
    }
}

const mapStateToProps = state => ({
    topicPage: state.pageReducer.topicPage
});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
