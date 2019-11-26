import React, { Component } from "react";
import { Button, Box } from "grommet";
import { IdeaTable } from "./ideaComponents/IdeaTable";
import { QuestionBox } from "../../tools/QuestionBox";

import { connect } from "react-redux";

export class PlayerViewSummary extends Component {
  state = {
    data: this.props.data,
    question: this.props.question,
    num_ideas: this.props.num_ideas
  };

  showSummary = () => {};

  render() {
    const { data, question, num_ideas } = this.state;

    return (
      <Box direction="column" gap="medium" pad="small">
        <QuestionBox question={question} />
        <IdeaTable num_ideas={num_ideas} data={data} />
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

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewSummary);
