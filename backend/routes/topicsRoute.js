const tools = require("../tools/generalTools");
const express = require("express");
const models = require("../models/models");
const router = express.Router();

router.post("/createTopic", async function (req, res, next) {

    const topicName = req.body.topicName;
    const timePerRound = req.body.timePerRound;

    let joinCode = tools.generateCode(6);

    let existingTopic = getTopic(joinCode);

    // If a Topic with this exact code is found, generate a new one.
    while (existingTopic) {
        joinCode = tools.generateCode(codeLength);
        existingTopic = getTopic(joinCode);
    }

    // Create Topic in Database, then send response containing the generated Topic
    const topic = {
        topicName: topicName,
        timePerRound: timePerRound,
        joinCode: joinCode
    };

    models.Topic.create(topic).then((topic) => res.json(topic));
});

router.post("/updatePlayerCount", async function (req, res, next) {
    const joinCode = req.body.joinCode;
    const playerCount = req.body.playerCount;

    let topic = getTopic(joinCode);

    if (topic) {
        topic.update({
            playerCount: playerCount
        })
            .then(() => {
                res.json(topic);
            });
    } else {
        res.status(400);
        res.end();
    }
});

router.get("/getTopic", async function (req, res, next) {

    const joinCode = req.body.joinCode;
    const topic = getTopic(joinCode);

    if (topic) {
        res.json(topic);
    } else {
        res.status(400);
        res.end();
    }
});

router.post("/joinTopic", async function (req, res, next) {

    const joinCode = req.body.joinCode;
    const username = req.body.name + "_" + tools.generateCode(4);

    // Find existing Topic
    let topic = getTopic(joinCode);

    // If topic is null or undefined
    if (!topic) {
        res.status(400);
        res.end();
        return;
    }

    const author = {
        name: username,
        topicID: topic.id
    };

    models.Author.create(author).then((author) => res.json(author));
});

router.get("/getPlayers", async function (req, res, next) {
    const joinCode = req.body.joinCode;
    const topic = getTopic(joinCode);

    if (topic) {
        const topicID = topic.id;
        const players = await models.Author.findAll({
            where: {
                topicID: topicID
            }
        });

        if (tools.checkExistence(players)) {
            res.json(players);
        } else {
            res.status(400);
            res.end();
        }
    } else {
        res.status(400);
        res.end();
    }
});

async function getTopic(joinCode) {
    const topic = await models.Topic.findOne({
        where: {
            joinCode: joinCode
        }
    });

    if (tools.checkExistence(topic)) {
        return topic;
    } else {
        return false;
    }
}

module.exports = router;
