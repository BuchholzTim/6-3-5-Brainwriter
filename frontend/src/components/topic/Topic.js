import React, {Component} from "react";
import TopicConfig from "./TopicConfig";
import TopicControl from "./TopicControl";
import TopicWaitingRoom from "./TopicWaitingRoom"
//import {Button, Grommet} from 'grommet';

export class Topic extends Component {
    state = {
        page: "",
        question: "",
        time: ""
    };


    setPage = (page) => {
        this.setState({page: page})
    };

    setQuestion = (question) => {
        this.setState({question: question})
    };

    setTime = (time) => {
        this.setState({time: time})
    };

    switchPage = (event) => {
        this.setState({
            page: event.target.value
        });
    };

    renderPage(page) {
        switch (page) {
            case "1":
                    return <TopicControl setPage={this.setPage}/>
            case "2":
                return <TopicWaitingRoom/>
            default:
                return (
                   <TopicConfig setPage={this.setPage} setQuestion={this.setQuestion} setTime={this.setTime}/>
                );
        }
    }

    render() {
        const { page } = this.state;
        const { question } = this.state;
        const { time } = this.state;

        console.log("page " + page);
        console.log("question " + question);
        console.log("time " + time)

        return this.renderPage(page);

        
    }
}

export default Topic;
