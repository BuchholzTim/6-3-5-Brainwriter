import React, { Component } from "react";
import { Button, Text, Box } from "grommet";
import { IdeaTable } from "./IdeaTable";

export class IdeaResults extends Component {
  render() {
    const num_ideas = this.props.num_ideas;
    const question = this.props.question;

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
    return (
      <Box>
        <Box direction="row">
          <Text>{question}</Text>
        </Box>
        <IdeaTable num_ideas={num_ideas} data={data} />
        <Button>Drück Mich</Button>
      </Box>
    );
  }
}

export default IdeaResults;
