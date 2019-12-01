import React, { Component } from "react";
import { Button, Box } from "grommet";
import { IdeaTable } from "./ideaComponents/IdeaTable";
import { QuestionBox } from "../../tools/QuestionBox";

import { connect } from "react-redux";

export class PlayerViewSummary extends Component {
  showSummary = () => {};

  render() {
    const { topic } = this.props;

    return (
      <Box direction="column" gap="medium" pad="small">
        <QuestionBox question={topic} />
        <IdeaTable />
        <Box direction="row" gap="xsmall" justify="end">
          <Button
            primary
            label="Übersicht anzeigen"
            onClick={this.showSummary}
          />
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic
});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewSummary);
