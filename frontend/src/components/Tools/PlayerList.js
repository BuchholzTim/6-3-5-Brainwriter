import React, { Component } from "react";
import { List } from "grommet";

export class PlayerList extends Component {
  render() {
    return (
      <List
        title="Test"
        primaryKey="name"
        secondaryKey="percent"
        data={[
          { name: "Alan" },
          { name: "Bryan" },
          { name: "Chris" },
          { name: "Eric" }
        ]}
      />
    );
  }
}

export default PlayerList;
