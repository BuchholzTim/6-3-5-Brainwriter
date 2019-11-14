import React, { Component } from "react";

export class Selection extends Component {

  render() {
    return (
      <div>
        <button value="1" onClick={this.onClick}>
          Schnelle Runde erstellen
        </button>
        <br />
        <button value="2" onClick={this.onClick}>
          Runde beitreten
        </button>
        <br />
        <button value="3" onClick={this.onClick}>
          Dozentenzugang
        </button>
        <br />
      </div>
    );
  }
}

export default Selection;
