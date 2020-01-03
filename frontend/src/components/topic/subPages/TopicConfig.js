import React, { Component } from "react";
import { connect } from "react-redux";
import { TextArea, Form, TextInput, Button, FormField, Box, Text } from "grommet";
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
      <Box fill align="center" justify="center" margin={{"top":"xlarge"}} direction="column" >
        <Form onSubmit={this.onSubmit}  style={{width:'50%'}}>
          <FormField
         
            placeholder={t("topicName")}
            name="topic"
            component={TextArea}
            onChange={event => this.setTopic(event.target.value)}
            resize={false}
            required
            margin={{"bottom":"medium"}}
            error={t("errorTopic")}
          >
            <Box direction="row" gap="medium">
              <Text weight="bold">{t("topic")}</Text>
             <TextArea id="text-area" placeholder={t("topicName")} focusIndicator="true" />
             </Box>
          </FormField>

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
            margin={{"bottom":"large"}}
            error={t("errorTimePerRound")}

          />
          <Box>
          <Button type="submit" primary label={t("createRound")} alignSelf="center"/>
          </Box>        
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
