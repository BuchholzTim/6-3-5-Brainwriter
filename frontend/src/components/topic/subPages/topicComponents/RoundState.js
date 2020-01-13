import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Text } from "grommet";

import { withTranslation } from "react-i18next";

export class RoundState extends Component {
  render() {
    const { currentRound, maxRounds, t } = this.props;
    return (
      <Box direction="column" gap="xsmall">
        <Text weight="bold" textAlign="center">{t("status")}</Text>
        <Text textAlign="center">
          {t("roundCurrentlyRunning", {
            currentRound: currentRound,
            maxRounds: maxRounds
          })}
        </Text>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  currentRound: state.configReducer.currentRound,
  maxRounds: state.configReducer.maxRounds
});
const mapDispatchToProps = {};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(RoundState)
);
