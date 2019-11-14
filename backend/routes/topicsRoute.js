const tools = require("../tools/generalTools");
const express = require("express");
const models = require("../models/models");
const router = express.Router();

router.post("/createTopic", async function (req, res, next) {

    // Get User-Specified Parameters from Body
    const topicName = req.body.topicName;
    const timePerRound = req.body.timePerRound;

    console.log(timePerRound);

    // Default PlayerCount - This has to be updated, once the game starts
    const playerCount = 6;

    // Generate Unique Join-Code for Topic
    const codeLength = 6;
    let joinCode = tools.generateCode(codeLength);

    // Check if the generated Code already exists
    let existingTopics = await models.Topic.findAll( {
        where: {
            joinCode: joinCode
        }
    });

    // If a Topic with this exact code is found, generate a new one.
    while (existingTopics[0]) {
        joinCode = tools.generateCode(codeLength);
        existingTopics = await models.Topic.findAll( {
            where: {
                joinCode: joinCode
            }
        });
    }

    // Create Topic in Database, then send response containing the generated Topic
    models.Topic.create({
        topicName: topicName,
        timePerRound: timePerRound,
        joinCode: joinCode
    }).then((topic) => res.json(topic));
});

router.post("/updatePlayerCount", async function (req, res, next) {
    const joinCode = req.body.joinCode;
    const playerCount = req.body.playerCount;

    // Search Topic with exact joinCode
    let topic = await models.Topic.findOne({
        where: {
            joinCode: joinCode
        }     
    });

    if(topic) {
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

// Looks for a Topic the specified Code
router.get("/getTopic", async function (req, res, next) {

    const joinCode = req.body.joinCode;
    const topic = await models.Topic.findOne({
        where: {
            joinCode: joinCode
        }
    });

    if(topic) {
        res.json(topic);
    } else {
        res.status(400);
    }
});

module.exports = router;
