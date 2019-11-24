import React, { Component } from "react"
import { Box, Text} from "grommet";

export class RoundState extends Component {
    state = {
        round: "1",
        maxround: "5",
    }

    getRound = () => {
        // Call zur API aktuelle Rundenzahl
    }

    getMaxRound = () => {
        // Call zur API insgesamte Rundenzahl
    }

    render() {
        const { round }  = this.state;
        const { maxround } = this.state;
        return (
            <Box direction="column" gap="xsmall">
            <Text weight="bold">Status:</Text>
            <Text>Runde {round}/{maxround} läuft gerade</Text>
            </Box>
        )
    }
}

export default RoundState
