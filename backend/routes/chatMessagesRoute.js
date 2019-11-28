const express = require("express");
const models = require("../models/models");
const router = express.Router();
const tools = require("../tools/generalTools");
const Op = require("sequelize").Op;

router.post("/sendMessages/", async function(req, res, next) {
  let messages = req.body.messages;
  let responseMessages = [];
  for (const message of messages) {
    try {
      await models.ChatMessages.create(message).then(message => {
        responseMessages.push(message);
      });
    } catch (exception) {
      responseMessages.push({
        error: exception.message
      });
    }
  }
  res.json(responseMessages);
});

router.post("/get", async function(req, res, next) {
  const joinCode = req.body.joinCode;

  models.Topic.findOne({
    where: {
      joinCode: joinCode
    }
  })
    .then(topic => {
      return models.Author.findAll({
        where: {
          topicID: topic.id
        }
      });
    })
    .then(authors => {
      let authorIDs = [];
      for (let i = 0; i < authors.length; i++) {
        authorIDs.push(authors[i].id);
      }

      return models.ChatMessages.findAll({
        authorId: {
          [Op.or]: authorIDs
        }
      });
    })
    .then(messages => {
      res.json(messages);
    })
    .catch(() => {
      res.status(400);
      res.end();
    });
});

module.exports = router;
