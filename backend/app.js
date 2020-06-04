require("dotenv").config();

const express = require("express");
const db = require("./config/config");
const logger = require("morgan");
const cors = require("cors");
const tools = require("./tools/generalTools");
const app = express();

// Test DB-Connection
db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// Test Enviroment-Variables
console.log("Needed Enviroment Variables:");
console.log(`DB_HOST: ${process.env.DB_HOST}`);
console.log(`DB_NAME: ${process.env.DB_NAME}`);
console.log(`DB_USERNAME: ${process.env.DB_USERNAME}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
console.log(`DB_DIALECT: ${process.env.DB_DIALECT}`);
console.log(`DB_PORT: ${process.env.DB_PORT}`);
console.log(`SERVER_PORT: ${process.env.SERVER_PORT}`);
console.log(`CORS_ENABLE: ${process.env.CORS_ENABLE}`);
console.log(`CORS_USE_WHITELIST: ${process.env.CORS_USE_WHITELIST}`);
console.log(`CORS_WHITELIST: ${process.env.CORS_WHITELIST}`);

// Setup CORS-Configuration
// Used to allow Connection if Frontend & Backend are NOT on the same Server

if (tools.convertStringToBoolean(process.env.CORS_ENABLE.toLowerCase())) {
  console.log("Using CORS");
  if (tools.convertStringToBoolean(process.env.CORS_USE_WHITELIST)) {
    console.log("Using Whitelist");
    let whitelist = process.env.CORS_WHITELIST.split("|");
    console.log(whitelist);
    let corsOptions = {
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    };
    app.use(cors(corsOptions));
  } else {
    app.use(cors());
  }
}

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
