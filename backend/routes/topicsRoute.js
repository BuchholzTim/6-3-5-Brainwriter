const tools = require("../tools/generalTools");
const express = require("express");
const models = require("../models/models");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      Topic:
 *        type: object
 *        properties:
 *           id:
 *             type: number
 *           topic:
 *             type: string
 *           joinCode:
 *             type: string
 *           timePerRound:
 *             type: number
 *           active:
 *             type: boolean
 *           createdAt:
 *             type: string
 *           updatedAt:
 *             type: string
 *        example:
 *           id: 1
 *           topic: This is the name of the topic
 *           joinCode: XwzhXn
 *           timePerRound: 10
 *           active: true
 *           createdAt: 2020-06-12 09:20:47.273000
 *           updatedAt: 2020-06-12 09:20:47.273000
 *
 *      ChangedTopic:
 *        type: object
 *        properties:
 *           id:
 *             type: number
 *           topic:
 *             type: string
 *           joinCode:
 *             type: string
 *           timePerRound:
 *             type: number
 *           active:
 *             type: boolean
 *           createdAt:
 *             type: string
 *           updatedAt:
 *             type: string
 *        example:
 *           id: 2
 *           topic: NewName
 *           joinCode: oS8WO6
 *           timePerRound: 180
 *           active: true
 *
 *      Author:
 *        type: object
 *        properties:
 *           id:
 *             type: number
 *           userName:
 *             type: string
 *           topicID:
 *             type: number
 *           createdAt:
 *             type: string
 *           updatedAt:
 *             type: string
 *        example:
 *             id: 2
 *             userName: Marc_8viO
 *             topicID: 2
 *             createdAt: 2020-07-06T08:29:53.659Z
 *             updatedAt: 2020-07-06T08:29:53.659Z
 *
 *      Authors:
 *        type: array
 *        items:
 *          allOf:
 *          - $ref: '#/components/schemas/Author'
 *        uniqueItems: true
 */

/**
 * @swagger
 * /topics/create/:
 *   post:
 *     summary: Creates a Topic with a name and a timePerRound in the DB
 *     tags:
 *      - topics
 *     requestBody:
 *        description: name and the timePerRound of the topic to create
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *             example:
 *               topic: This is the name of the topic
 *               timePerRound: 10
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: returns a the created topic and new created values
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Topic'
 */
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

/**
 * @swagger
 * /topics/update/:
 *   post:
 *     summary: Updates a Topic with all possible values (id, topic, timePerRound, active) with the corresponding joinCode
 *     tags:
 *      - topics
 *     requestBody:
 *        description: Specific joinCode of the topic to update
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *             example:
 *               id: 2
 *               topic: NewName
 *               joinCode: oS8WO6
 *               timePerRound: 180
 *               active: true
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: returns a the joined topic and the created author data
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/ChangedTopic'
 *
 *       404:
 *         description: Not Found - Topic with that Join-Code doesn't exist
 */
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
 * /topics/get/:
 *   get:
 *     summary: Returns a topic to the corresponding joinCode
 *     tags:
 *      - topics
 *     parameters:
 *      - in: query
 *        name: joinCode
 *        schema:
 *          type: string
 *          required: true
 *          description: Specific joinCode of the topic to get
 *          example: XwzhXn
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: returns a topic
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Topic'
 *       400:
 *         description: Bad Request
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

/**
 * @swagger
 * /topics/join/:
 *   post:
 *     summary: Joins a Topic with the corresponding joinCode
 *     tags:
 *      - topics
 *     requestBody:
 *        description: Specific joinCode of the topic to join
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *             example:
 *               joinCode: XwzhXn
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: returns a the joined topic and the created author data
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Topic'
 *       400:
 *         description: Bad Request - Join-Code is wrong
 *
 *       403:
 *         description: Forbidden - Topic is not active anymore
 */
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

/**
 * @swagger
 * /topics/getPlayers/:
 *   post:
 *     summary: Gets all players/authors to the TopicID
 *     tags:
 *      - topics
 *     requestBody:
 *        description: Unique id of the topic to get players from
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *             example:
 *                id: 1
 *     produces:
 *      - application/json:
 *     responses:
 *       200:
 *         description: returns a list of players/authors the joined topic and the created author data
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Authors'
 *       400:
 *         description: Bad Request - No topic with that id
 */
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

/**
 * @swagger
 * /topics/getPlayerCount/:
 *   post:
 *     summary: Gets the playerCount to the corresponding TopicID
 *     tags:
 *      - topics
 *     requestBody:
 *        description: Unique id of the topic to get the players count from
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *             example:
 *                id: 2
 *     produces:
 *      - application/json:
 *     responses:
 *       200:
 *         description: returns a list of players/authors the joined topic and the created author data
 *         content:
 *            text/plain:
 *               schema:
 *                type: string
 *                example: 2
 *
 *       400:
 *         description: Bad Request - No topic with that id
 */
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
