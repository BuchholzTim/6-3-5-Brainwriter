import React, { Component } from "react";
import { Meter, Grommet, Stack, Box, Text } from "grommet";

export class Timer extends Component {
  state = {
    meterValue: 100,
    timeAsText: "",
    roundTime: this.props.roundTime,
    remainingTime: this.props.roundTime,
    executeAfter: this.props.executeAfter
  };

  convertSecondsToTime = timeInSeconds => {
    const seconds = timeInSeconds % 60;
    const minutes = Math.floor(timeInSeconds / 60);

    return ("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
  };

  refreshTimer = () => {
    const { roundTime } = this.state;
    const remainingTime = this.state.remainingTime - 1;
    const timeAsText = this.convertSecondsToTime(remainingTime);
    const meterValue = (remainingTime / roundTime) * 100;
    const { executeAfter } = this.state;

    this.setState({
      remainingTime: remainingTime,
      timeAsText: timeAsText,
      meterValue: meterValue
    });

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
    const gridArea = this.props.gridArea;
    return (
      <Grommet>
        <Box gridArea={gridArea} align="center" pad="large">
          <Stack anchor="center">
            <Meter
              type="circle"
              background="light-2"
              values={[{ value: this.state.meterValue }]}
              size="xsmall"
              thickness="small"
            />
            <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
              <Text size="xlarge" weight="bold">
                {this.state.timeAsText}
              </Text>
            </Box>
          </Stack>
        </Box>
      </Grommet>
    );
  }
}

export default Timer;
