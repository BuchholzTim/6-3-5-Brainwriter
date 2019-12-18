import React, { Component } from "react";
import { Box, Text } from "grommet";

import { withTranslation } from "react-i18next";
export class QuestionBox extends Component {
  render() {
    const { t, question } = this.props;
    return (
      <Box direction="row" gap="small" justify="center">
        <Text weight="bold">{t("topic")}</Text>
        <Text>{question}</Text>
      </Box>
    );
  }
}

export default withTranslation()(QuestionBox);
