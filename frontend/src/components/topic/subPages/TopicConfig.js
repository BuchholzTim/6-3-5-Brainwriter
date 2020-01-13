import React, { Component } from "react";
import { connect } from "react-redux";
import { TextArea, Form, MaskedInput,TextInput, Button, FormField, Box, Text } from "grommet";
import { PREPARATION } from "../pages";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { setTopicData } from "../../../redux/actions/topicActions";
import { createTopic } from "../../../axios/apiCalls";

import { withTranslation } from "react-i18next";

export class TopicConfig extends Component {
  state = {
    topic: "",
    timePerRound: "",
    timePerRoundMin: "3",
    timePerRoundSec: "0",
    button: ""
  };

  setTopic = topic => {
    this.setState({ topic: topic });
  };

  setTimeMin = timePerRoundMin => {
    this.setState({ timePerRoundMin: timePerRoundMin });
  };

  setTimeSec = timePerRoundSec => {
    this.setState({ timePerRoundSec: timePerRoundSec });
  };

  setTime = timePerRound => {
    const { timePerRoundMin, timePerRoundSec } = this.state;
    console.log(timePerRoundMin);
    console.log(timePerRoundSec);
    var timecalc = parseInt(timePerRoundMin)*60+parseInt(timePerRoundSec);
    console.log(timecalc);
    this.setState({ timePerRound: timecalc });
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
      <Box fill align="center" className="wrapper" justify="center" margin={{"top":"5%"}} direction="column" >
        <Box align="center" justify="center" direction="column" width="100%" margin={{"bottom":"xlarge"}}>
        <h1>{t("createRound")}</h1>
        <Text size="small" textAlign="center">{t("explSessionStart")}</Text>
        </Box>
      
        <Form onSubmit={this.onSubmit}  style={{width:'100%'}}>
            <Box id="außenrum_topic" direction="row" width="matchparent" style={{"marginBottom":"2rem"}}>
              <Text id="label" style={{width:"18%",marginRight:"0%"}} weight="bold">{t("topic")}</Text>
              <FormField style={{"width":"80%"}}>
                <TextArea
                  id = "textarea" 
                  placeholder={t("topicName")}
                  name="topic"
                  component={TextArea}
                  onChange={event => this.setTopic(event.target.value)}
                  resize={false}
                  required
                  style={{"width":"100%"}}
                  margin={{"bottom":"medium"}}
                  focusIndicator={true}
                  margin={{"left":"1%"}}
                  //error={t("errorTopic")}
                  >
                </TextArea>
              </FormField>
            </Box>
            <Box id="außenrum_time" direction="row" width="matchparent" style={{"marginBottom":"3rem"}}>
              <Box style={{width:"18%","display":"grid", justifyContent: "left", alignContent: "space-evenly"}}> 
                <Text id="label" weight="bold">{t("timePerRound")}</Text>
              </Box>
              <FormField style={{"width":"7%"}}>
                <MaskedInput
                mask={[
                  {
                    length: [1, 2],
                    options: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: '3'
                  }
                ]}
                  name="time-per-round-min"
                  component={TextInput}
                  onChange={event => this.setTimeMin(event.target.value)}
                  validate={{
                    regexp: /^\d*$/,
                    message: t("onlyNumeric")
                  }}
                  margin={{"bottom":"large"}}
                  margin={{"left":"1%"}}
                  style={{"width":"100%"}}
                  focusIndicator={false}
                  //error={t("errorTimePerRound")}
                  >
                </MaskedInput>
              </FormField>
              <Box style={{width:"7%","display":"grid", justifyContent: "space-evenly", alignContent: "space-evenly"}}>
                <Text id="label" weight="bold"> min : </Text>
              </Box>
              
              <FormField style={{"width":"7%"}}>
                <MaskedInput
                mask={[
                  {
                    length: [1, 2],
                    options: ['0','10', '20', '30', '40', '50'],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: '0'
                  }
                ]}
                  name="time-per-round-sec"
                  component={TextInput}
                  onChange={event => this.setTimeSec(event.target.value)}
                  validate={{
                    regexp: /^\d*$/,
                    message: t("onlyNumeric")
                  }}
                  margin={{"bottom":"large"}}
                  margin={{"left":"1%"}}
                  style={{"width":"100%"}}
                  focusIndicator={false}
                  //error={t("errorTimePerRound")}
                  >
                </MaskedInput>
              </FormField>

              <Box style={{width:"5%","display":"grid", justifyContent: "space-evenly", alignContent: "space-evenly"}}>
                <Text id="label" weight="bold"> sek </Text>
              </Box>
            </Box>
            <Box>
              <Button type="submit" primary label={t("createRound")} alignSelf="center" onClick={event => this.setTime()}/>
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
