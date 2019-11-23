import React, { Component } from "react";
import { TextArea, TextInput } from "grommet";

export class IdeaInput extends Component {
  render() {
    return (
      <TextArea
        resize={false}
        placeholder="Your best Idea!"
        background="white"
      ></TextArea>
    );
  }
}

export default IdeaInput;
