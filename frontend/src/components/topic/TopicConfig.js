import React, { Component } from "react";
import { TextArea, Form, TextInput, Button, FormField } from "grommet";
//import CreateRoundModerator2 from "./CreateRoundModerator2";

export class CreateRoundModerator1 extends Component {
  state = {
    page:""
  };

  createRound = () => {
    const { question } = this.state;
    console.log(question);
    const { time } = this.state;
    console.log(time);
  };

  setQuestion = event => {
    this.setState({
      question: event
    });
  };

  setTime = event => {
    this.setState({
      time: event
    });
  };

  render() {
    const { question } = this.state;
    const { time } = this.state;
    return (
      <Form onSubmit={this.createRound}>
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
          validate={{ regexp: /^\d*(s)$/, message: "Wert muss mit s enden und zwischen X und Y liegen" }}
        />

        
        <Button type="submit" primary label="Runde erstellen" />
      </Form>
    );
  }
}

//<TextInput placeholder="type here" value={value} onChange={event => setValue(event.target.value)}/>
export default CreateRoundModerator1;
