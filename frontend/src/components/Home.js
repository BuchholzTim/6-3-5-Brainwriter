import React, { Component } from "react";
import { Button, Box } from "grommet";
import { Group, Login } from "grommet-icons";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

export class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <Box
        direction="row-responsive"
        justify="center"
        pad="xlarge"
        gap="medium"
      >
        <Box pad="large" align="center" background="light-6" round gap="small">
          <Group size="large" color="dark-2" />
          <Link to="/topic">
            <Button
              primary
              label={t("createQuickRound")}
              hoverIndicator="true"
            />
          </Link>
        </Box>

        <Box pad="large" align="center" background="light-6" round gap="small">
          <Login size="large" color="dark-2" />
          <Link to="/playerView">
            <Button primary label={t("joinRound")} hoverIndicator="true" />
          </Link>
        </Box>
      </Box>
    );
  }
}

export default withTranslation()(Home);
