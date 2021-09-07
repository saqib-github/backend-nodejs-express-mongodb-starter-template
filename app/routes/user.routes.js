// sample files for the user routes
const express = require("express");

const controller = require("../controllers/user.controllers.js");

const router = express.Router();

router.get("/", controller.getUser);

module.exports = router;
