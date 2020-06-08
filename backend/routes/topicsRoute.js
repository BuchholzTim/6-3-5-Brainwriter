const tools = require("../tools/generalTools");
const express = require("express");
const models = require("../models/models");
const router = express.Router();

router.post("/create", async function (req, res, next) {
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
    joinCode: joinCode,
    active: true,
  };

  models.Topic.create(Topic).then((Topic) => res.json({ topic: Topic }));
});

router.post("/update", async function (req, res) {
  const joinCode = req.body.joinCode;
  const topic = req.body.topic;
  const timePerRound = req.body.timePerRound;
  const active = req.body.active;

  // Get the topic with the specific joinCode
  let existingTopic = await getTopic(joinCode);

  // Check if the topic with the joinCode really exists
  if (existingTopic) {
    // Check which params are set in the Request and replace them with the old ones
    existingTopic.joinCode = joinCode;
    if (tools.checkExistence(topic)) {
      existingTopic.topic = topic;
    }

    if (tools.checkExistence(timePerRound)) {
      existingTopic.timePerRound = timePerRound;
    }

    if (tools.checkExistence(active)) {
      existingTopic.active = active;
    }

    const Topic = {
      topic: existingTopic.topic,
      joinCode: existingTopic.joinCode,
      timePerRound: existingTopic.timePerRound,
      active: existingTopic.active,
    };

    // Update Topic in the DB with the corresponding joinCode
    models.Topic.update(Topic, { where: { joinCode: Topic.joinCode } }).then(
      (Topic) =>
        res.json({
          joinCode: existingTopic.joinCode,
          topic: existingTopic.topic,
          timePerRound: existingTopic.timePerRound,
          active: existingTopic.active,
        })
    );
  } else {
    res
      .status(404)
      .send('Topic with "joinCode": ' + '"' + joinCode + '" Not Found');
    res.end();
  }
});

/**
 * @swagger
 * /get:
 * get:
 *  description: Use to get a topic
 *  responses:
 *      '200': A successful response
 */
router.get("/get", async function (req, res, next) {
  const joinCode = req.query.joinCode;
  const existingTopic = await getTopic(joinCode);

  if (existingTopic) {
    res.json({ topic: existingTopic });
  } else {
    res.status(400);
    res.end();
  }
});

router.post("/join", async function (req, res, next) {
  const codeLength = 4;

  const joinCode = req.body.joinCode;
  const userName = req.body.userName + "_" + tools.generateCode(codeLength);

  // Find existing Topic
  let existingTopic = await getTopic(joinCode);

  // If topic is null or undefined
  if (!existingTopic) {
    res.status(400).send("Join-Code is wrong");
    res.end();
    return;
  }

  // If topic is not active
  if (!existingTopic.active) {
    res.status(403).send("Topic is not active anymore");
    res.end();
  }

  const Author = {
    userName: userName,
    topicID: existingTopic.id,
  };

  models.Author.create(Author).then((Author) =>
    res.json({ topic: existingTopic, author: Author })
  );
});

router.post("/getPlayers", async function (req, res, next) {
  const id = req.body.id;

  const players = await models.Author.findAll({
    where: {
      topicID: id,
    },
  });

  if (tools.checkExistence(players)) {
    res.json(players);
  } else {
    res.status(400);
    res.end();
  }
});

router.post("/getPlayerCount", async function (req, res, next) {
  const id = req.body.id;

  const players = await models.Author.findAll({
    where: {
      topicID: id,
    },
  });

  if (tools.checkExistence(players)) {
    const playerCount = players.length;
    res.json(playerCount);
  } else {
    res.status(400);
    res.end();
  }
});

async function getTopic(joinCode) {
  const topic = await models.Topic.findOne({
    where: {
      joinCode: joinCode,
    },
  });

  if (tools.checkExistence(topic)) {
    return topic;
  } else {
    return false;
  }
}

module.exports = router;
