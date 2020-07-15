import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Button, Heading, ResponsiveContext } from "grommet";
import IdeaTable from "../playerView/subPages/ideaComponents/IdeaTable";
import QuestionBox from "./QuestionBox";
import { DocumentPdf } from 'grommet-icons'
import { PDFExport } from '@progress/kendo-react-pdf';

export class PlayerViewSummary extends Component {

  pdfExportComponent;
  pdfExportAllComponent;

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

  exportALLWithComponent = () => {
    this.pdfExportAllComponent.save();
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
        <div>
          <QuestionBox question={topic} />
          {tables[shownTable]}
        </div>

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
          style={{
            width: "100%"
          }}
          label="Next"
        />
        <Box
          direction="column"
          gap="small"
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            primary
            icon={<DocumentPdf color="white" />}
            style={{
              width: "100%",
              backgroundColor: "red"
            }}
            label="Export PDF"
          />

          <Button
            primary
            icon={<DocumentPdf color="white" />}
            style={{
              width: "100%",
              backgroundColor: "red"
            }}
            label="Export all"
          />
        </Box>
      </Box>

        {/* 
        This is a hacky solution: 
        In order to export a custom pdf file 
        which has content the user should not see on screen 
        we have to do it that way 
        */}
        <div style={{ position: "absolute", left: "-1000px", top: 0, width: "500px" }}>
          <PDFExport
            ref={(component) => this.pdfExportComponent = component}
            paperSize="A4"
            fileName={`${topic}`}
          >
            <Box
              style={{
                wordWrap: "break-word"
              }}
              direction="column"
              gap="medium"
              pad="small"
              overflow={{ horizontal: "auto" }}
            >
              <QuestionBox question={topic} />
              {tables[shownTable]}
            </Box>
          </PDFExport>
        </div>

        <div style={{ position: "absolute", left: "-1000px", top: 0, width: "500px" }}>
          <PDFExport
            ref={(component) => this.pdfExportAllComponent = component}
            paperSize="A4"
            fileName={`${topic}`}
          >
            <Box
              style={{
                wordWrap: "break-word"
              }}
              direction="column"
              gap="medium"
              pad="small"
              overflow={{ horizontal: "auto" }}
            >
              <QuestionBox question={topic} />
              {tables}
            </Box>
          </PDFExport>
        </div>
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
