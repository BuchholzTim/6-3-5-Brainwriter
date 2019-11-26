import React, { Component } from "react";
import { TextArea, Form, TextInput, Button, FormField, Box } from "grommet";
import { connect } from "react-redux";
import { setTopicData } from "../../../redux/actions/topicActions";
import { PREPARATION } from "../pages";

export class TopicConfig extends Component {
  state = {
    topic: "",
    timePerRound: ""
  };

  setQuestion = topic => {
    this.setState({ topic: topic });
  };

  setTime = timePerRound => {
    this.setState({ timePerRound: timePerRound });
  };

  nextPage = () => {
    const { topic, timePerRound } = this.state;
    this.props.setTopicData({
      topic,
      timePerRound
    });
    this.props.setPage(PREPARATION);
  };

  render() {
    return (
      <Box fill align="center" justify="center">
        <Form onSubmit={this.nextPage}>
          <FormField
            label="Thema"
            placeholder="Warum ist die Banane krumm?"
            name="topic"
            component={TextArea}
            onChange={event => this.setQuestion(event.target.value)}
            resize={false}
            required
          />

          <FormField
            label="Timer in Sekunden"
            placeholder="180"
            name="time-per-round"
            component={TextInput}
            onChange={event => this.setTime(event.target.value)}
            required
            validate={{
              regexp: /^\d*$/,
              message: "Wert muss folgendes erfüllen"
            }}
          />
          <Button type="submit" primary label="Runde erstellen" />
        </Form>
      </Box>
    );
  }
}

export default connect(null, { setTopicData })(TopicConfig);
