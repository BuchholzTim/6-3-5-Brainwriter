import React, { Component } from "react";
import { connect } from "react-redux";
import { Meter, Stack, Box, Text } from "grommet";

export class Timer extends Component {
  state = {
    meterValue: 0,
    executeAfter: this.props.executeAfter,
    timeInSeconds: this.props.timeInSeconds,
    remainingTime: this.props.timeInSeconds
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { maxRounds, currentRound, timerInterval } = this.props;
    if (prevProps.timeInSeconds !== this.props.timeInSeconds) {
      if (currentRound <= maxRounds) {
        this.interval = setInterval(() => this.refreshTimer(), 1000);
        this.setState({
          timeInSeconds: this.props.timeInSeconds,
          remainingTime: this.props.timeInSeconds,
          executeAfter: this.props.executeAfter
        });
      }
    }
  };

  convertSecondsToTime = timeInSeconds => {
    const seconds = timeInSeconds % 60;
    const minutes = Math.floor(timeInSeconds / 60);

    return ("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
  };

  refreshTimer = () => {
    let { remainingTime, timeInSeconds, executeAfter } = this.state;
    const { timeIsStopped } = this.props;
    if (!timeIsStopped) {
      remainingTime -= 1;
      const timeAsText = this.convertSecondsToTime(remainingTime);

      const meterValue = (1 - remainingTime / timeInSeconds) * 100;

      this.setState({
        remainingTime: remainingTime,
        timeAsText: timeAsText,
        meterValue: meterValue
      });
    }

    if (remainingTime === 0) {
      clearInterval(this.interval);

      if (executeAfter != null) {
        executeAfter();
      }
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.refreshTimer(), 1000);
  }

  render() {
    const { meterValue, timeAsText } = this.state;
    return (
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="light-2"
            values={[{ value: meterValue }]}
            size="xsmall"
            thickness="small"
          />
          <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
            <Text size="xlarge" weight="bold">
              {timeAsText}
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  timeIsStopped: state.controlReducer.timeIsStopped,
  maxRounds: state.configReducer.maxRounds,
  currentRound: state.configReducer.currentRound,
  timerInterval: state.controlReducer.timerInterval
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
