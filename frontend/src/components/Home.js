import React, {Component} from "react";
import {Button, Grommet} from 'grommet';
import Topic from "./topic/Topic";
import JoinRound from "./JoinRound";
import {socket} from "../socket/socket";

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
                return <Topic/>;
            case "2":
                socket.emit("joinTopic", {
                    joinCode: "testRoom"
                });
                return <JoinRound/>;
            default:
                return (
                    <Grommet>
                        <Button color="brand" label="Schnelle Runde erstellen" value="1" onClick={this.switchPage}/>
                        <br/>
                        <Button label="Runde beitreten" value="2" onClick={this.switchPage}/>
                        <br/>
                    </Grommet>
                );
        }
    }

    render() {
        const {page} = this.state;
        return this.renderPage(page);
    }
}

export default Home;
