import React, { Component } from "react";
import { Box, Heading, DropButton, Text } from "grommet";
import { Github, Language } from "grommet-icons";
import { withTranslation } from "react-i18next";

export class Menubar extends Component {
  goToGithub = () => {
    window.open("https://github.com/BuchholzTim/6-3-5-Brainwriter", "_blank");
  };

  goToHome = () => {
    window.open("/", "_self");
  };

  changeLanguage = language => {
    const { i18n } = this.props;
    i18n.changeLanguage(language);
  };

  render() {
    return (
      <Box
        as="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ vertical: "xsmall", horizontal: "xsmall" }}
        background="brand"
        elevation="large"
        gap="small"
        style={{ zIndex: "1000" }}
      >
        <Heading
          level={3}
          margin="none"
          color="white"
          align="end"
          onClick={this.goToHome}
        >
          6-3-5 Brainwriter
        </Heading>
        <Box direction="row" gap="small">
          <DropButton
            dropAlign={{ top: "bottom", right: "right" }}
            dropContent={
              <Box background="light-2">
                <Text
                  onClick={() => {
                    this.changeLanguage("de");
                  }}
                >
                  de
                </Text>
                <Text
                  onClick={() => {
                    this.changeLanguage("en");
                  }}
                >
                  en
                </Text>
              </Box>
            }
          >
            <Language size="large" color="white" alignmentBaseline="center" />
          </DropButton>
          <Github
            onClick={this.goToGithub}
            size="large"
            color="white"
            alignmentBaseline="center"
          ></Github>
        </Box>
      </Box>
    );
  }
}

export default withTranslation()(Menubar);
