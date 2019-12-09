import React, { Component } from "react";
import { Box, Heading } from "grommet";
import { Github } from "grommet-icons";

export class Menubar extends Component {
  goToGithub = () => {
    window.open("https://github.com/BuchholzTim/6-3-5-Brainwriter", "_blank");
  };

  goToHome = () => {
    window.open("/", "_self");
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
        <Github
          onClick={this.goToGithub}
          size="large"
          color="white"
          alignmentBaseline="center"
        ></Github>
      </Box>
    );
  }
}

export default Menubar;
