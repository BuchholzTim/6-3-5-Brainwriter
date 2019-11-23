import React, { Component } from "react";
import { Grid, Text, Box } from "grommet";
import { IdeaInput } from "./IdeaInput";
import { IdeaTable } from "./IdeaTable";
import { Timer } from "../tools/Timer";

export class enterIdeas extends Component {
  render() {
    const num_ideas = this.props.num_ideas;
    const question = this.props.question;

    const ideaInputs = [];
    const columns = [];
    const area_configs = [
      { name: "question", start: [0, 0], end: [num_ideas - 2, 0] },
      { name: "timer", start: [num_ideas - 1, 0], end: [num_ideas - 1, 0] },
      { name: "table", start: [0, 1], end: [num_ideas - 1, 1] }
    ];

    // Should be delivered via API-Call
    const data = [
      {
        round: "1",
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4:
          "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee"
      },
      {
        round: "2",
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        round: "3",
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        round: "4",
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      }
    ];

    // Generate Items
    for (let i = 0; i < num_ideas; i++) {
      // Create a Small-Column for every Idea needed
      columns.push("small");

      const config = {
        name: `idea_${i}`,
        start: [i, 2],
        end: [i, 2]
      };
      area_configs.push(config);

      // Generate Input-Field for each Idea
      ideaInputs.push(<IdeaInput gridArea={config.name}></IdeaInput>);
    }

    return (
      <Grid
        rows={["small", "medium", "small"]}
        columns={columns}
        gap="small"
        areas={area_configs}
      >
        <Box gridArea={area_configs[0].name} align="center">
          <Text>{question}</Text>
        </Box>

        <Timer roundTime={180} gridArea={area_configs[1].name}></Timer>

        <IdeaTable
          gridArea={area_configs[2].name}
          num_ideas={num_ideas}
          data={data}
        />

        {ideaInputs}
      </Grid>
    );
  }
}

export default enterIdeas;
