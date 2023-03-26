var express = require("express");
var router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/", newsController.index);

module.exports = router;
