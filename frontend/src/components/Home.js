import React, { Component } from "react";
import { Button, Box } from "grommet";
import { Group, Login } from "grommet-icons";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = {
    page: ""
  };

  render() {
    return (
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        pad="xlarge"
        gap="medium"
      >
        <Box
          pad="large"
          align="center"
          background={{ color: "light-6", opacity: "strong" }}
          round
          gap="small"
        >
          <Group size="large" color="dark-2" />
          <Link to="/topic">
            <Button primary label="Schnelle Runde erstellen" value="1" />
          </Link>
        </Box>

        <Box pad="large" align="center" background="light-6" round gap="small">
          <Login size="large" color="dark-2" />
          <Link to="/playerView">
            <Button primary label="Runde beitreten" value="2" />{" "}
          </Link>
        </Box>
      </Box>
    );
  }
}

export default Home;
