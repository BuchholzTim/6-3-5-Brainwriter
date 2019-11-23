import React, { Component } from "react";
import { Grid, Text, Box } from "grommet";
import { IdeaInput } from "./IdeaInput";
import { IdeaTable } from "./IdeaTable";
import { Timer } from "../tools/Timer";

export class enterIdeas extends Component {
  showResults = () => {
    this.props.setPage("2");
  };

  render() {
    const num_ideas = this.props.num_ideas;
    const question = this.props.question;

    const ideaInputs = [];

    // Should be delivered via API-Call
    const data = [
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4:
          "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee"
      },
      {
        idea_1:
          "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3:
          "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      }
    ];

    // Generate Items
    for (let i = 0; i < num_ideas; i++) {
      // Generate Input-Field for each Idea
      ideaInputs.push(<IdeaInput></IdeaInput>);
    }

    return (
      <Box>
        <Box direction="row">
          <Text>{question}</Text>
          <Timer roundTime={15} executeAfter={this.showResults}></Timer>
        </Box>
        <IdeaTable num_ideas={num_ideas} data={data} />
        <Box direction="row">{ideaInputs}</Box>
      </Box>
    );
  }
}

export default enterIdeas;
