import React, { Component } from "react";
import { connect } from "react-redux";
import { Meter, Stack, Box, Text } from "grommet";

import { setTimerInterval } from "../../redux/actions/controlActions";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meterValue: 0,
      executeAfter: this.props.executeAfter,
      timeInSeconds: this.props.timeInSeconds,
      remainingTime: this.props.timeInSeconds
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.timeInSeconds !== this.props.timeInSeconds) {
      this.startTimer();
      this.setState({
        timeInSeconds: this.props.timeInSeconds,
        remainingTime: this.props.timeInSeconds,
        executeAfter: this.props.executeAfter
      });
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

      if (remainingTime === 0) {
        this.clearTimer();
        if (executeAfter != null) {
          executeAfter();
        }
      }
    }
  };

  startTimer = () => {
    const interval = setInterval(() => this.refreshTimer(), 1000);
    this.props.setTimerInterval(interval);
  };

  clearTimer = () => {
    const { timerInterval } = this.props;
    clearInterval(timerInterval);
    this.props.setTimerInterval(-1);
  };

  componentDidMount = () => {
    this.startTimer();
  };

  render() {
    const { meterValue, timeAsText } = this.state;
    return (
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            background="accent-1"
            values={[{ value: meterValue, color: "light-2" }]}
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

const mapDispatchToProps = { setTimerInterval: setTimerInterval };

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
