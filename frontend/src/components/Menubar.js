import React, { Component } from "react";
import { Box, Heading } from "grommet";

export class Menubar extends Component {
  render() {
    return (
      <Box
        as="header"
        direction="row-reverse"
        alignSelf="center"
        pad={{ vertical: "xsmall", horizontal: "xsmall" }}
        background="brand"
        elevation="large"
        style={{ zIndex: "1000" }}
      >
        <Heading level={3} margin="none" color="white" align="end">
          6-3-5 Brainwriter
        </Heading>
      </Box>
    );
  }
}

export default Menubar;
