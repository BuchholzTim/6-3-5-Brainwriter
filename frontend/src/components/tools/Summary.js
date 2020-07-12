import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Button } from "grommet";
import IdeaTable from "../playerView/subPages/ideaComponents/IdeaTable";
import QuestionBox from "./QuestionBox";
import { FormUpload } from 'grommet-icons'
import { PDFExport } from '@progress/kendo-react-pdf';

export class PlayerViewSummary extends Component {

  pdfExportComponent;

  state = {
    shownTable: 0
  };

  showSummary = () => { };

  showNextTable = () => {
    const { players } = this.props;
    const { shownTable } = this.state;
    this.setState({
      shownTable: (shownTable + 1) % players.length
    });
  };

  exportPDFWithComponent = () => {
    this.pdfExportComponent.save();
  }

  render() {
    const { topic, players } = this.props;
    const { shownTable } = this.state;

    const tables = [];

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const table = (
        <Box pad={{ vertical: "large", horizontal: "medium" }}>
          <IdeaTable authorID={player.id} />
        </Box>
      );
      tables.push(table);
    }

    return (
      <div>
        <PDFExport 
          ref={(component) => this.pdfExportComponent = component} 
          paperSize="A4"
          fileName={ `${ topic }` }
          >
          <div>
            <Box
              style={{ wordWrap: "break-word" }}
              direction="column"
              gap="medium"
              pad="small"
              overflow={{ horizontal: "auto" }}
            >
              <QuestionBox question={topic} />
              {tables[shownTable]}
            </Box>
          </div>
        </PDFExport>
          <Box
           direction="column"
           align="center"
           gap="medium"
           pad="small"
           overflow={{
             horizontal: "auto" 
            }}
          >
          <Button
                primary
                hoverIndicator="true"
                style={{ width: "100%" }}
                onClick={this.showNextTable}
                label="Next"
              />
          <Button
            primary
            icon={<FormUpload color="white" />}
            style={
              {
                width: "30%",
                background: "red"
              }
            }
            onClick={this.exportPDFWithComponent}
            label="Export PDF"
          />
          </Box>
          
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  players: state.topicReducer.players
});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewSummary);
