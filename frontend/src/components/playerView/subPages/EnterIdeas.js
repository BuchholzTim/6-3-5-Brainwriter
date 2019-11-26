import React, { Component } from "react";
import { Box } from "grommet";
import { IdeaInput } from "./idea_components/IdeaInput";
import { IdeaTable } from "./idea_components/IdeaTable";
import { Timer } from "../../tools/Timer";
import { QuestionBox } from "../../tools/QuestionBox";

export class enterIdeas extends Component {
  state = {
    data: this.props.data,
    question: this.props.question,
    num_ideas: this.props.num_ideas,
    timePerRound: this.props.timePerRound
  };

  showResults = () => {
    this.props.setPage("SUMMARY");
  };

  render() {
    const { data } = this.state;
    const { question } = this.state;
    const { num_ideas } = this.state;
    const { timePerRound } = this.state;

    const ideaInputs = [];

    // Generate Items
    for (let i = 0; i < num_ideas; i++) {
      // Generate Input-Field for each Idea
      ideaInputs.push(<IdeaInput></IdeaInput>);
    }
    return (
      <Box direction="column" gap="small">
        <Box direction="row" align="center" justify="center">
          <QuestionBox question={question} />
          <Timer roundTime={timePerRound} executeAfter={this.showResults} />
        </Box>
        <IdeaTable num_ideas={num_ideas} data={data} />
        <Box direction="row">{ideaInputs}</Box>
      </Box>
    );
  }
}

export default enterIdeas;
