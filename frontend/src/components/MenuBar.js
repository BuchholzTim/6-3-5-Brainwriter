import React, { Component } from "react";
import { Box, Button, Heading } from "grommet";
import { FormPreviousLink } from "grommet-icons";

export class MenuBar extends Component {
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
        style={{ zIndex: "1000" }}
      >
        <Button icon={<FormPreviousLink size="large" color="white" />}></Button>
        <Heading level={3} margin="none" color="white">
          6-3-5 Brainwriter
        </Heading>
      </Box>
    );
  }
}

export default MenuBar;
