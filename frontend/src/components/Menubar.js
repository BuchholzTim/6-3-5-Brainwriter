import React, { Component } from "react";
import { Box, Heading, Menu, Text } from "grommet";
import { Github, Language } from "grommet-icons";
import { withTranslation } from "react-i18next";

export class Menubar extends Component {
  goToGithub = () => {
    window.open("https://github.com/BuchholzTim/6-3-5-Brainwriter", "_blank");
  };

  goToHci2b = () => {
    window.open("https://hci.hs-kl.de/", "_blank");
  };

  changeLanguage = (language) => {
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
        <a href="/" target="_self">
          <Heading level={3} margin="none" color="white" align="end">
            {t("applicationName")}
          </Heading>
        </a>
        <Box direction="row" gap="none" align="center">
          <Menu
            id="languageMenu"
            dropBackground="brand"
            alignmentBaseline="center"
            icon={<Language size="large" color="white" />}
            items={[
              {
                label: <Text color="white">en</Text>,
                onClick: () => {
                  this.changeLanguage("en");
                },
              },
              {
                label: <Text color="white">de</Text>,
                onClick: () => {
                  this.changeLanguage("de");
                },
              },
            ]}
          ></Menu>
          <Box margin={{ vertical: "none", left: "none", right: "small" }}>
            <a
              href="https://github.com/BuchholzTim/6-3-5-Brainwriter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size="large" color="white" alignmentBaseline="center" />
            </a>
          </Box>
          <a
            href="https://hci.hs-kl.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              size="large"
              color="white"
              alignmentBaseline="center"
              height="44px"
              width="44px"
            >
              <img
                width="44px"
                height="44px"
                src="HCI2B_Logo.png"
                alt="HCI Logo"
              />
            </Box>
          </a>
        </Box>
      </Box>
    );
  }
}

export default withTranslation()(Menubar);
