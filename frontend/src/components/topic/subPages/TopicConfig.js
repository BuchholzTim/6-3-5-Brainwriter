import React, { Component } from "react";
import { connect } from "react-redux";
import { TextArea, Form, TextInput, Button, FormField, Box } from "grommet";
import { PREPARATION } from "../pages";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { setTopicData } from "../../../redux/actions/topicActions";
import { createTopic } from "../../../axios/apiCalls";

import { withTranslation } from "react-i18next";

export class TopicConfig extends Component {
  state = {
    topic: "",
    timePerRound: ""
  };

  setTopic = topic => {
    this.setState({ topic: topic });
  };

  setTime = timePerRound => {
    this.setState({ timePerRound: timePerRound });
  };

  onSubmit = () => {
    const { topic, timePerRound } = this.state;

    createTopic({ topic, timePerRound })
      .then(response => {
        const topic = response.topic;
        this.props.setTopicData(topic);
        return;
      })
      .then(() => {
        this.nextPage();
      });
  };

  nextPage = () => {
    this.props.setPage(PREPARATION);
  };

  render() {
    const { t } = this.props;
    return (
      <Box fill align="center" justify="center">
        <Form onSubmit={this.onSubmit}>
          <FormField
            label={t("topic")}
            placeholder={t("topicName")}
            name="topic"
            component={TextArea}
            onChange={event => this.setTopic(event.target.value)}
            resize={false}
            required
          />

          <FormField
            label={t("timePerRound")}
            placeholder="180"
            name="time-per-round"
            component={TextInput}
            onChange={event => this.setTime(event.target.value)}
            required
            validate={{
              regexp: /^\d*$/,
              message: t("onlyNumeric")
            }}
          />
          <Button type="submit" primary label={t("createRound")} />
        </Form>
      </Box>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  setTopicData: setTopicData,
  setPage: setTopicPage
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(TopicConfig)
);
