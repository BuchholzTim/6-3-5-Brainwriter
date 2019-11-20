const createError = require("http-errors");
const express = require("express");
const db = require("./config/config")
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const app = express();

// Test DB-Connection
db.authenticate()
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

// view engine setup - we don"t need that, as we render everything in the frontend with react
/*app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");*/

// Setup misc. stuff we need
app.use(logger("dev")); // Logger during Development build
app.use(express.json()); // Enable native JSON-Parsing Support
app.use(express.urlencoded({extended: false})); // Enable native parsing of URL-encoded POST-Requests (e.g. forms)

//
//app.use(express.static(path.join(__dirname, "public")));
//app.use(cors());
//app.use(cookieParser());


// Define Router
const topicsRouter = require("./routes/topicsRoute");
const chatMessagesRouter = require("./routes/chatMessagesRoute");

// Setup Routers to use
app.use("/topics", topicsRouter);
app.use("/chatMessages", chatMessagesRouter);

/*// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});*/

// error handler
/*app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});*/

module.exports = app;
