import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Text } from "grommet";

export class RoundState extends Component {
  render() {
    const { currentRound, maxRounds } = this.props;
    return (
      <Box direction="column" gap="xsmall">
        <Text weight="bold">Status:</Text>
        <Text>
          Runde {currentRound}/{maxRounds} läuft gerade
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

export default connect(mapStateToProps, mapDispatchToProps)(RoundState);
