const express = require("express");
const db = require("./config/config")
const logger = require("morgan");

const app = express();

// Test DB-Connection
db.authenticate()
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

// Setup misc. stuff we need
app.use(logger("dev")); // Logger during Development build
app.use(express.json()); // Enable native JSON-Parsing Support
app.use(express.urlencoded({extended: false})); // Enable native parsing of URL-encoded POST-Requests (e.g. forms)

// Define Router
const topicsRouter = require("./routes/topicsRoute");
const chatMessagesRouter = require("./routes/chatMessagesRoute");

// Setup Routers to use
app.use("/topics", topicsRouter);
app.use("/chatMessages", chatMessagesRouter);

module.exports = app;
