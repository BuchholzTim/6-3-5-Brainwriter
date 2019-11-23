import React, { Component } from "react";
import { TextArea, TextInput } from "grommet";

export class IdeaInput extends Component {
  render() {
    const gridArea = this.props.gridArea;

    return (
      <TextInput
        gridArea={gridArea}
        resize={false}
        placeholder="Your best Idea!"
        background="white"
      ></TextInput>
    );
  }
}

export default IdeaInput;
