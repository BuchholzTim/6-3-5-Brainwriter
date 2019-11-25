import React, { Component } from "react";
import { Box, Text } from "grommet";
export class QuestionBox extends Component {
  render() {
    return (
      <Box direction="row" gap="small" justify="center">
        <Text weight="bold">Fragestellung: </Text>
        <Text>{this.props.question}</Text>
      </Box>
    );
  }
}

export default QuestionBox;
