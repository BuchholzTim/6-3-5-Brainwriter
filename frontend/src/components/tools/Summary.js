import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Button, Heading, ResponsiveContext } from "grommet";
import IdeaTable from "../playerView/subPages/ideaComponents/IdeaTable";
import QuestionBox from "./QuestionBox";
import { DocumentPdf } from 'grommet-icons'
import { PDFExport } from '@progress/kendo-react-pdf';
import { withTranslation } from "react-i18next";

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
    const { topic, players, t } = this.props;
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

        <Button
          primary
          hoverIndicator="true"
          style={{
            width: "100%"
          }}
          label={t("next")}
        />

        <ResponsiveContext.Consumer>
          {size => (
            <Box
              direction={size === "small" ? "column" : "row"}
              align="center"
              margin="0 auto"
              gap="medium"
              pad="small"
              overflow={{
                horizontal: "auto"
              }}
              width={size === "small" ? "400px" : "100%"}
            >
              <Button
                primary
                icon={<DocumentPdf color="white" />}
                style={{
                  width:`${size === "small" ? "100%" : "50%"}`,
                  backgroundColor: "red"

                }}
                onClick={this.exportPDFWithComponent}
                label="Export PDF"
              />

              <Button
                primary
                icon={<DocumentPdf color="white" />}
                style={{
                  width:`${size === "small" ? "100%" : "50%"}`,
                  backgroundColor: "red"
                }}
                onClick={this.exportALLWithComponent}
                label="Export all"
              />
            </Box>
          )}
        </ResponsiveContext.Consumer>

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

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(PlayerViewSummary)
);
