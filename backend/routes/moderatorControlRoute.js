const express = require("express");
const router = express.Router();

router.get('/start', function (req, res, next) {
    // Emit Start via Socket
});

router.get('/pause', function (req, res, next) {
    // Emit Pause via Socket
});

router.get('/resume', function (req, res, next) {
    // Emit Resume via Socket
});

module.exports = router;
