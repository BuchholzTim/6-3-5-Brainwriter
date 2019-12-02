const express = require("express");
const db = require("./config/config");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// Test DB-Connection
db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

// Enable CORS - As Frontend and API don't run on the same Port
let whitelist = ["http://localhost:3000"];
let corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(cors());

// Setup misc. stuff we need
app.use(logger("dev")); // Logger during Development build
app.use(express.json()); // Enable native JSON-Parsing Support
app.use(express.urlencoded({ extended: false })); // Enable native parsing of URL-encoded POST-Requests (e.g. forms)

// Define Router
const topicsRouter = require("./routes/topicsRoute");
const chatMessagesRouter = require("./routes/chatMessagesRoute");

// Setup Routers to use
app.use("/topics", topicsRouter);
app.use("/messages", chatMessagesRouter);

module.exports = app;
