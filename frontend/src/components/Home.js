import React, { Component } from "react";
import { Button, Box, Paragraph, Heading, Anchor } from "grommet";
import { Group, Login } from "grommet-icons";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

export class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <Box direction="column" justify="center" gap="0px" width="100%">
        <Box
          direction="row"
          className="wrapper"
          alignSelf="center"
          margin={{ top: "5%" }}
        >
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
              src="635_neu.png"
              alt="Bild 635 Methode"
            ></img>
          </Box>
        </Box>
        <Box
          className="wrapper"
          direction="row"
          justify="center"
          style={{ "padding-bottom": "112px" }}
          gap="medium"
        >
          <Box
            pad="medium"
            align="center"
            background="light-6"
            round
            gap="small"
            style={{ width: "40%" }}
          >
            <Group size="large" color="dark-2" />
<<<<<<< HEAD
              <Link style={{"width":"90%","margin-left":"auto","margin-right":"auto"}} to="/topic" >
                <Box>
                  <Button
                    primary
                    label={t("createRound")}
                    hoverIndicator="true"
                    style={{"width":"100%"}}
                  />
                </Box>
              </Link>
=======
            <Link
              style={{
                width: "90%",
                "margin-left": "auto",
                "margin-right": "auto"
              }}
              to="/topic"
            >
              <Button
                primary
                label={t("createRound")}
                hoverIndicator="true"
                style={{ width: "100%" }}
              />
            </Link>
>>>>>>> Jule_Testcenter
          </Box>

          <Box
            pad="medium"
            align="center"
            background="light-6"
            round
            gap="small"
            style={{ width: "40%" }}
          >
            <Login size="large" color="dark-2" />
<<<<<<< HEAD
              <Link style={{"width":"90%","margin-left":"auto","margin-right":"auto"}} to="/playerView">
                <Button 
                  primary
                  label={t("joinRound")}
                  hoverIndicator="true"
                  style={{"width":"100%"}}
                  background ="brand"
                  />
              </Link>
            </Box>
=======
            <Link
              style={{
                width: "90%",
                "margin-left": "auto",
                "margin-right": "auto"
              }}
              to="/playerView"
            >
              <Button
                primary
                label={t("joinRound")}
                hoverIndicator="true"
                style={{ width: "100%" }}
              />
            </Link>
          </Box>
>>>>>>> Jule_Testcenter
        </Box>

        <Box
          direction="column"
          justify="center"
          pad="large"
          width="100%"
          background="accent-2"
        >
          <Box direction="column" className="wrapper" alignSelf="center">
            <Paragraph size="small" paragraph="xxlarge">
              <h3>{t("about635")}</h3>
              {t("description635")}
            </Paragraph>
            <Paragraph size="small" paragraph="xxlarge">
              <h3>{t("aboutTool")}</h3>
              {t("descriptionTool")}
            </Paragraph>
          </Box>
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
