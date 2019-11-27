const tools = require("../tools/generalTools");
const express = require("express");
const models = require("../models/models");
const router = express.Router();

router.post("/create", async function(req, res, next) {
  const topicName = req.body.topicName;
  const timePerRound = req.body.timePerRound;

  const codeLength = 6;

  let joinCode = tools.generateCode(joinCodeLength);

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

  models.Topic.create(topic).then(topic => res.json(topic));
});

router.get("/get", async function(req, res, next) {
  const joinCode = req.query.joinCode;
  const topic = getTopic(joinCode);

  if (topic) {
    res.json(topic);
  } else {
    res.status(400);
    res.end();
  }
});

router.post("/join", async function(req, res, next) {
  const codeLength = 4;

  const joinCode = req.body.joinCode;
  const username = req.body.username + "_" + tools.generateCode(codeLength);

  // Find existing Topic
  let topic = getTopic(joinCode);

  // If topic is null or undefined
  if (!topic) {
    res.status(400);
    res.end();
    return;
  }

  const author = {
    username: username,
    topicID: topic.id
  };

  models.Author.create(author).then(author => res.json({ topic, author }));
});

router.get("/getPlayers", async function(req, res, next) {
  const joinCode = req.query.joinCode;
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

router.get("/axiosGet", function(req, res, next) {
  console.log(req.query.id);
  res.send(req.query);
});

router.post("/axiosPost", function(req, res, next) {
  console.log(req.body);
  res.send("ok");
});

module.exports = router;
