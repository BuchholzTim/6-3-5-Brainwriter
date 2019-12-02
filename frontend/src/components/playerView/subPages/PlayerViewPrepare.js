import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Heading, Text, Button } from "grommet";
import { ROUND } from "../pages";
import { setPlayerPage } from "../../../redux/actions/pageActions";
import QuestionBox from "../../tools/QuestionBox";

export class PlayerViewPrepare extends Component {
  nextPage = () => {
    this.props.setPage(ROUND);
  };

  render() {
    const { topic } = this.props;
    return (
      <Box direction="column" gap="small" align="center">
        <Heading size="small">Gleich gehts los</Heading>
        <QuestionBox question={topic} />
        <Text>x Spieler sind beigetreten</Text>
        <Button primary onClick={this.nextPage}>
          Dummy Button
        </Button>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic
});

const mapDispatchToProps = {
  setPage: setPlayerPage
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewPrepare);
