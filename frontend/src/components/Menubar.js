import React, { Component } from "react";
import { Box, Heading, DropButton, Text, Button } from "grommet";
import { Github, Language } from "grommet-icons";
import { withTranslation } from "react-i18next";

export class Menubar extends Component {
  goToGithub = () => {
    window.open("https://github.com/BuchholzTim/6-3-5-Brainwriter", "_blank");
  };

  goToHci2b = () => {
    window.open("https://hci.hs-kl.de/", "_blank");
  };

  goToHome = () => {
    window.open("/", "_self");
  };

  changeLanguage = language => {
    const { i18n } = this.props;
    i18n.changeLanguage(language);
  };

  render() {
    const { t } = this.props;
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
        <Box hoverIndicator="#3E4548" onClick={this.goToHome}>
          <Heading
            level={3}
            margin="none"
            color="white"
            align="end"
            onClick={this.goToHome}
          >
            {t("applicationName")}
          </Heading>
        </Box>
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
          <Button>
            <Github
              onClick={this.goToGithub}
              size="large"
              color="white"
              alignmentBaseline="center"
            />
          </Button>
          <Button
            onClick={this.goToHci2b}
            size="large"
            color="white"
            alignmentBaseline="center"
          >
            <Box height="44px" width="44px">
              <img
                width="44px"
                height="44px"
                src="HCI2B_Logo.png"
                alt="HCI Logo"
              />
            </Box>
          </Button>
        </Box>
      </Box>
    );
  }
}

export default withTranslation()(Menubar);
