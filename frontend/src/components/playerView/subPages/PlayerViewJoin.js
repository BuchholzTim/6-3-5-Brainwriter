import React, { Component } from "react";
import { connect } from "react-redux";
import { emitJoin } from "../../../socket/socket";
import { Form, FormField, TextInput, Button, Box } from "grommet";
import { PREPARE } from "../pages";
import { setTopicData } from "../../../redux/actions/topicActions";
import { setAuthorData } from "../../../redux/actions/authorActions";
import { setPlayerPage } from "../../../redux/actions/pageActions";
import { joinTopic } from "../../../axios/apiCalls";

import { withTranslation } from "react-i18next";

export class PlayerViewJoin extends Component {
  state = {
    userName: "",
    joinCode: "",
    errorMessage: "",
  };

  setUserName = (userName) => {
    this.setState({
      userName: userName,
    });
  };

  setJoinCode = (joinCode) => {
    this.setState({
      joinCode: joinCode,
    });
  };

  setErrorMessage = (errorMessage) => {
    this.setState({
      errorMessage: errorMessage,
    });
  };

  onSubmit = () => {
    const { userName, joinCode } = this.state;

    joinTopic({ userName, joinCode })
      .then((response) => {
        const topic = response.topic;
        const author = response.author;
        this.props.setTopicData(topic);
        this.props.setAuthorData(author);
        return;
      })
      .then(() => {
        emitJoin(joinCode);
        return;
      })
      .then(() => {
        this.nextPage();
      })
      .catch((error) => {
        this.setErrorMessage(error.response.data);
      });
  };

  nextPage = () => {
    this.props.setPage(PREPARE);
  };

  render() {
    const { t } = this.props;
    return (
      <Box
        fill
        align="center"
        justify="center"
        margin={{ top: "5%" }}
        direction="column"
        style={{ width: "50%" }}
      >
        <Form onSubmit={this.onSubmit}>
          <FormField
            label={t("userName")}
            placeholder={t("userNamePlaceholder")}
            name="userName"
            component={TextInput}
            onChange={(event) => this.setUserName(event.target.value)}
            required
            margin={{ bottom: "medium" }}
            border="true"
          />
          <FormField
            label={t("joinCode")}
            placeholder={t("joinCodePlaceholder")}
            name="joinCode"
            component={TextInput}
            onChange={(event) => this.setJoinCode(event.target.value)}
            required
            error={this.state.errorMessage}
            margin={{ bottom: "medium" }}
          />
          <Button type="submit" label={t("joinRound")} primary />
        </Form>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setPage: setPlayerPage,
  setTopicData: setTopicData,
  setAuthorData: setAuthorData,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(PlayerViewJoin)
);
