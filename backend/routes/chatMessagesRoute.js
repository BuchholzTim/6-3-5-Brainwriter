const express = require("express");
const models = require("../models/models");
const router = express.Router();
const tools = require("../tools/generalTools");

router.post("/sendMessages/", async function (req, res, next) {
    let messages = req.body.messages;
    let responseMessages = [];
    for (const message of messages) {
        try {
            await models.ChatMessages.create(message)
                .then((message) => {
                    responseMessages.push(message);
                });
        } catch (exception) {
            responseMessages.push({
                "error": exception.message
            });
        }
    }
    res.json(responseMessages);
});

router.get("/getMessages", async function (req, res, next) {
    const authorID = req.query.authorID;
    const roomID = req.query.roomID;
    const messages = getMessages(authorID, roomID);

    if (tools.checkExistence(messages)) {
        res.json(messages);
    } else {
        res.status(400);
        res.end();
    }
});

async function getMessages(authorID, roomID) {
    const authorExist = tools.checkExistence(authorID);
    const roomExist = tools.checkExistence(roomID);

    let messages;
    if (authorExist && roomExist) {
        messages = await models.ChatMessages.findAll({
            where: {
                roomID: roomID,
                authorID: authorID
            }
        });
    } else if (authorExist) {
        messages = await models.ChatMessages.findAll({
            where: {
                authorID: authorID
            }
        });
    } else if (roomExist) {
        messages = await models.ChatMessages.findAll({
            where: {
                roomID: roomID
            }
        });
    } else {
        return false;
    }
    return messages;
}

module.exports = router;
