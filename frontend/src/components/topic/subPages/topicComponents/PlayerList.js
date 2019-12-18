import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Text, Box } from "grommet";

import { withTranslation } from "react-i18next";

export class PlayerList extends Component {
  render() {
    const { players, t } = this.props;
    const names = [];

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      names.push({ name: player.userName });
    }

    return (
      <Box direction="column" gap="small">
        <Text weight="bold">{t("participants")}</Text>
        <List
          title="Test"
          primaryKey="name"
          secondaryKey="percent"
          data={names}
        />
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  players: state.topicReducer.players
});
const mapDispatchToProps = {};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(PlayerList)
);
