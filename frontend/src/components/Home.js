import React, { Component } from "react";
import { Button, Box, Paragraph, Heading } from "grommet";
import { Group, Login } from "grommet-icons";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

export class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <Box direction="column" justify="center" gap="0px" width="100%">
        <Box direction="row" className="wrapper">
          <Box direction="column" width="50%" paragraph="small">
            <Heading level="2" size="medium">
              {t("welcome")}
            </Heading>
            <Paragraph size="small">{t("descriptionWelcome")}</Paragraph>
          </Box>
          <Box direction="column" width="50%">
            <img
              height="auto"
              width="100%"
              src="635.png"
              alt="Bild 635 Methode"
            ></img>
          </Box>
        </Box>
        <Box
          direction="row-responsive"
          justify="center"
          pad="xlarge"
          gap="medium"
        >
          <Box
            pad="large"
            align="center"
            background="light-6"
            round
            gap="small"
          >
            <Group size="large" color="dark-2" />
            <Link to="/topic">
              <Button
                primary
                label="Schnelle Runde erstellen"
                hoverIndicator="true"
              />
            </Link>
          </Box>

          <Box
            pad="large"
            align="center"
            background="light-6"
            round
            gap="small"
          >
            <Login size="large" color="dark-2" />
            <Link to="/playerView">
              <Button primary label="Runde beitreten" hoverIndicator="true" />
            </Link>
          </Box>
        </Box>
        <Box
          direction="column"
          justify="center"
          pad="large"
          width="100%"
          background="accent-2"
        >
          <Paragraph size="small" paragraph="xxlarge">
            <h3>{t("about635")}</h3>
            {t("description635")}
          </Paragraph>
          <Paragraph size="small" paragraph="xxlarge">
            <h3>{t("aboutTool")}</h3>
            {t("descriptionTool")}
          </Paragraph>
        </Box>
        <Box background="accent-3">
          <Box
            id="footer"
            pad="medium"
            align="center"
            color="white"
            size="small"
            direction="row"
          >
            <Box
              direction="row"
              width="auto"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <img
                style={{ marginLeft: "auto", marginRight: "20px" }}
                width="150px"
                height="auto"
                src="logo.png"
                alt="Logo der Hochschule Kaiserslautern"
              ></img>
              <Box style={{ marginTop: "auto", marginBottom: "0" }}>
                <a
                  href="https://www.hs-kl.de/datenschutz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("privacyPolicy")}
                </a>
                <br></br>
                <a
                  href="https://www.hs-kl.de/impressum/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("legalNotice")}
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withTranslation()(Home);
