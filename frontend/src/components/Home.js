import React, { Component } from "react";
import { Button, Box } from "grommet";
import { Group, Login } from "grommet-icons";
import Topic from "./topic/Topic";
import PlayerView from "./playerView/PlayerView";
import { socket } from "../socket/socket";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = {
    page: ""
  };

  switchPage = event => {
    this.setState({
      page: event.target.value
    });
  };

  renderPage(page) {
    switch (page) {
      case "1":
        socket.emit("test");
        return <Topic />;
      case "2":
        socket.emit("joinTopic", {
          joinCode: "testRoom"
        });
        return (
          <Box
            direction="row-responsive"
            justify="center"
            align="center"
            pad="small"
            gap="medium"
          >
            <PlayerView />
          </Box>
        );
      default:
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
              <Button
                primary
                label="Schnelle Runde erstellen"
                value="1"
                onClick={this.switchPage}
              />
            </Box>

            <Box
              pad="large"
              align="center"
              background="light-6"
              round
              gap="small"
            >
              <Login size="large" color="dark-2" />
              <Button
                primary
                label="Runde beitreten"
                value="2"
                onClick={this.switchPage}
              />
            </Box>
          </Box>
        );
    }
  }

  render() {
    return (
      <Box
        direction="column"
        border={{ color: "brand", size: "medium" }}
        pad={{ vertical: "xsmall" }}
        align="center"
      >
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
          <Link to="/playerView">
            <Box
              pad="large"
              align="center"
              background="light-6"
              round
              gap="small"
            >
              <Login size="large" color="dark-2" />

              <Button primary label="Runde beitreten" value="2" />
            </Box>
          </Link>
        </Box>
      </Box>
    );
  }
}

export default Home;
