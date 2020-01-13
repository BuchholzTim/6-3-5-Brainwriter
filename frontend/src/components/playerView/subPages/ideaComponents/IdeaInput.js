import React, {Component} from "react";
import {TextArea} from "grommet";

import {withTranslation} from "react-i18next";

export class IdeaInput extends Component {
    state = {
        currentMessage: ""
    };

    setCurrentMessage = message => {
        this.props.setCurrentMessage(message, this.props.index);
    };

    render() {
        const {t} = this.props;
        return (
            <TextArea
                resize={false}
                placeholder={t("ideaPlaceholder")}
                background="white"
                onChange={event => this.setCurrentMessage(event.target.value)}
            />
        );
    }
}

export default withTranslation()(IdeaInput);
