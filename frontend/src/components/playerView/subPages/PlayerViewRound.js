import React, {Component} from "react";
import {connect} from "react-redux";
import {Box} from "grommet";
import IdeaInput from "./ideaComponents/IdeaInput";
import IdeaTable from "./ideaComponents/IdeaTable";
import Timer from "../../tools/Timer";
import QuestionBox from "../../tools/QuestionBox";
import {AFTERROUND} from "../pages";
import {setPlayerPage} from "../../../redux/actions/pageActions";
import {setCurrentMessages} from "../../../redux/actions/messageActions";

export class PlayerViewRound extends Component {
    state = {
        currentMessages: []
    };

    nextPage = () => {
        this.props.setPage(AFTERROUND);
    };

    setCurrentMessage = (currentMessage, index) => {
        let {currentMessages} = this.state;
        currentMessages[index] = currentMessage;
        this.setState({currentMessages: currentMessages});
    };

    executeAfter = () => {
        const {currentMessages} = this.state;
        this.props.setCurrentMessages({currentMessages});
        this.nextPage();
    };

    render() {
        const {
            topic,
            timePerRound,
            numIdeas,
            readingTime,
            currentRound,
            authorID
        } = this.props;
        const ideaInputs = [];

        const timeForRound = timePerRound + readingTime * (currentRound - 1);

        // Generate Items
        for (let i = 0; i < numIdeas; i++) {
            // Generate Input-Field for each Idea
            ideaInputs.push(
                <IdeaInput
                    setCurrentMessage={this.setCurrentMessage}
                    index={i}
                />
            );
        }
        return (
            <Box direction="column" gap="small" justify="center">
                <Box direction="row" align="center" justify="evenly">
                    <Box id="emptyBox" width="30%"/>
                    <Box width="30%">
                        <QuestionBox question={topic}/>
                    </Box>
                    <Box width="30%" style={{display: "grid", justifyContent: "right"}}>
                        <Timer
                            timeInSeconds={timeForRound}
                            executeAfter={this.executeAfter}
                        />
                    </Box>
                </Box>
                <IdeaTable authorID={authorID}/>
                <Box direction="row" pad="small" gap="small">
                    {ideaInputs}
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = state => ({
    topic: state.topicReducer.topic,
    timePerRound: state.topicReducer.timePerRound,
    numIdeas: state.configReducer.numIdeas,
    currentRound: state.configReducer.currentRound,
    authorID: state.authorReducer.id,
    rounds: state.configReducer.maxRounds,
    readingTime: state.configReducer.readingTime
});
const mapDispatchToProps = {
    setPage: setPlayerPage,
    setCurrentMessages: setCurrentMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewRound);
