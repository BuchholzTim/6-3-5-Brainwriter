const tools = require("../tools/generalTools");
const express = require("express");
const models = require("../models/models");
const router = express.Router();

router.post("/create", async function(req, res, next) {
  const topic = req.body.topic;
  const timePerRound = req.body.timePerRound;

  if (!(tools.checkExistence(topic) && tools.checkExistence(timePerRound))) {
    return;
  }

  const codeLength = 6;
  let joinCode = tools.generateCode(codeLength);
  let existingTopic = await getTopic(joinCode);

  // If a Topic with this exact code is found, generate a new one.
  while (existingTopic) {
    joinCode = tools.generateCode(codeLength);
    existingTopic = await getTopic(joinCode);
  }

  // Create Topic in Database, then send response containing the generated Topic
  const Topic = {
    topic: topic,
    timePerRound: timePerRound,
    joinCode: joinCode
  };

  models.Topic.create(Topic).then(Topic => res.json({ topic: Topic }));
});

router.get("/get", async function(req, res, next) {
  const joinCode = req.query.joinCode;
  const existingTopic = await getTopic(joinCode);

  if (existingTopic) {
    res.json({ topic: existingTopic });
  } else {
    res.status(400);
    res.end();
  }
});

router.post("/join", async function(req, res, next) {
  const codeLength = 4;

  const joinCode = req.body.joinCode;
  const userName = req.body.userName + "_" + tools.generateCode(codeLength);

  // Find existing Topic
  let existingTopic = await getTopic(joinCode);

  // If topic is null or undefined
  if (!existingTopic) {
    res.status(400);
    res.end();
    return;
  }

  const Author = {
    userName: userName,
    topicID: existingTopic.id
  };

  models.Author.create(Author).then(Author =>
    res.json({ topic: existingTopic, author: Author })
  );
});

router.post("/getPlayers", async function(req, res, next) {
  const joinCode = req.body.joinCode;
  const topic = await getTopic(joinCode);

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
