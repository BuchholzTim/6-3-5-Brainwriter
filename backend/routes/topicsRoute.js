const tools = require("../tools/generalTools");
const express = require("express");
const models = require("../models/models");
const router = express.Router();

router.post('/createTopic/:topicName/:timePerRound', async function (req, res, next) {
    const codeLength = 6;
    let joinCode = tools.generateCode(codeLength);

    // Returns an array with all matching results
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

    //Create new Topic
    const topicName = req.params.topicName;
    let timePerRound = req.params.timePerRound;

    if (isNaN(timePerRound)) {
        timePerRound = 180;
    }

    models.Topic.create({
        topic: topicName,
        timePerRound: timePerRound,
        joinCode: joinCode
    }).then((topic) => res.json(topic));
});

// Looks for a Topic the specified Code
router.get('/getTopic/:joinCode', async function (req, res, next) {
   const topics = await models.Topic.findAll({
       where: {
           joinCode: req.params.joinCode
       }
   });

   if(!topics[0]) {
       res.status(400);
   } else {
       res.json(topics[0]);
   }
});

module.exports = router;
