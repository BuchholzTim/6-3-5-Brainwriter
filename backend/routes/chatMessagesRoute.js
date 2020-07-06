const express = require("express");
const models = require("../models/models");
const router = express.Router();
const Op = require("sequelize").Op;

/**
 * @swagger
 * components:
 *   schemas:
 *      Message:
 *        type: object
 *        properties:
 *           id:
 *             type: number
 *           authorID:
 *             type: number
 *           content:
 *             type: string
 *           column:
 *             type: number
 *           row:
 *             type: number
 *           createdAt:
 *             type: string
 *           updatedAt:
 *             type: string
 *        example:
 *           id: 1
 *           authorID: 1
 *           content: Content of the message
 *           column: 1
 *           row: 2
 *           createdAt: 2020-06-12 09:20:47.273000
 *           updatedAt: 2020-06-12 09:20:47.273000
 *
 *      Messages:
 *        type: array
 *        items:
 *          anyOf:
 *            - $ref: '#/components/schemas/Message'
 *            - $ref: '#/components/schemas/Message'
 */

/**
 * @swagger
 * /messages/set/:
 *   post:
 *     summary: Creates ChatMessage-Objects in Database corresponding to the round (usually used after one timer period).
 *     tags:
 *      - messages
 *     requestBody:
 *        description: Name, timePerRound of the topic to create
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Messages'
 *             example:
 *               {
 *    	            "messages":
 *                     [
 *                     {
 *                       "content": "messageContent",
 *                       "row": 1,
 *                       "column": 1,
 *                       "authorID": 1
 *                     },
 *                    	{
 *    	                  "content": "messageContent",
 *                       "row": 1,
 *                       "column": 2,
 *                       "authorID": 1
 *    	                }
 *                     ]
 *                }
 *
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: returns a the set messages.
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Messages'
 */
router.post("/set", async function (req, res, next) {
  let messages = req.body.messages;

  let responseMessages = [];
  for (const message of messages) {
    try {
      await models.ChatMessages.create(message).then((message) => {
        responseMessages.push(message);
      });
    } catch (exception) {
      responseMessages.push({
        error: exception.message,
      });
    }
  }
  res.json(responseMessages);
});

/**
 * @swagger
 * /messages/get/:
 *   post:
 *     summary: Retrieves all chat messages corresponding to the specific topic id.
 *     tags:
 *      - messages
 *     requestBody:
 *        description: the id of the topic to get all messages from.
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *             example:
 *               {
 *    	          id: 1
 *               }
 *
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: returns a the all messages to the chosen topic.
 *         content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Messages'
 */
router.post("/get", async function (req, res, next) {
  const topicID = req.body.id;

  models.Author.findAll({
    where: {
      topicID: topicID,
    },
  })
    .then((authors) => {
      let authorIDs = [];
      for (let i = 0; i < authors.length; i++) {
        authorIDs.push(authors[i].id);
      }

      return models.ChatMessages.findAll({
        where: {
          authorID: {
            [Op.or]: authorIDs,
          },
        },
      });
    })
    .then((messages) => {
      res.json(messages);
    })
    .catch(() => {
      res.status(400);
      res.end();
    });
});

module.exports = router;
