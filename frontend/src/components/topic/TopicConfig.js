import React, { Component } from "react";
import { TextArea, Form, TextInput, Button, FormField, Box } from "grommet";
import { Link } from "react-router-dom";

export class CreateRoundModerator1 extends Component {
  state = {
    question: "",
    time: ""
  };

  createRound = () => {
    // const { question } = this.state;
    // const { time } = this.state;
    // this.props.setQuestion(question);
    // this.props.setTime(time);
    // this.setPage("1");
  };

  setQuestion = question => {
    this.setState({ question: question });
  };

  setTime = time => {
    this.setState({ time: time });
  };

  render() {
    const { question } = this.state;
    const { time } = this.state;
    return (
      <Box fill align="center" justify="center">
        <Form>
          <FormField
            label="Thema"
            placeholder="Warum ist die Banane krumm?"
            name="topic"
            component={TextArea}
            value={question}
            onChange={event => this.setQuestion(event.target.value)}
            resize={false}
            required
          />

          <FormField
            label="Timer in Sekunden"
            placeholder="180s"
            name="time-per-round"
            component={TextInput}
            value={time}
            onChange={event => this.setTime(event.target.value)}
            required
            validate={{
              regexp: /^\d*(s)$/,
              message: "Wert muss folgendes erfüllen"
            }}
          />
          <Link to="/topic/controls">
            <Button type="submit" primary label="Runde erstellen" />
          </Link>
        </Form>
      </Box>
    );
  }
}

export default CreateRoundModerator1;
