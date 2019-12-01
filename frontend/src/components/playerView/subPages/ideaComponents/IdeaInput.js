import React, { Component } from "react";
import { TextArea } from "grommet";

export class IdeaInput extends Component {
  state = {
    currentMessage: ""
  };

  setCurrentMessage = message => {
    this.props.setCurrentMessage(message, this.props.index);
  };

  render() {
    return (
      <TextArea
        resize={false}
        placeholder="Your best Idea!"
        background="white"
        onChange={event => this.setCurrentMessage(event.target.value)}
      ></TextArea>
    );
  }
}

export default IdeaInput;
