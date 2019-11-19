const express = require("express");
const models = require("../models/models");
const router = express.Router();

router.post("/sendMessages/", async function (req, res, next) {
    const messages = req.body.messages;
    messages.forEach((message) => {
        //Create Messages in DB
    });
});

module.exports = router;
