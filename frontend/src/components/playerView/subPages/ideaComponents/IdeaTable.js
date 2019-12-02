import React, { Component } from "react";
import { DataTable, Text } from "grommet";
import { connect } from "react-redux";

export class IdeaTable extends Component {
  stringToDom = str => {
    return <Text truncate={false}>{str}</Text>;
  };

  jsonToDom = jsonObj => {
    for (let key in jsonObj) {
      jsonObj[key] = this.stringToDom(jsonObj[key]);
    }
    return jsonObj;
  };

  render() {
    const { numIdeas, priorMessages } = this.props;

    // for (let i = 0; i < data.length; i++) {
    //   data[i] = this.jsonToDom(data[i]);
    // }

    //const column_configs = [{ property: "round", header: "Runde" }];
    const column_configs = [];

    for (let i = 0; i < numIdeas; i++) {
      const config = {
        property: `idea_${i + 1}`,
        header: `Idee ${i + 1}`
      };

      column_configs.push(config);
    }
    return (
      <DataTable
        size="medium"
        columns={column_configs}
        data={priorMessages}
      ></DataTable>
    );
  }
}

const mapStateToProps = state => ({
  numIdeas: state.configReducer.numIdeas,
  priorMessages: state.messageReducer.priorMessages
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaTable);
