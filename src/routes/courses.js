var express = require("express");
var router = express.Router();

const coursesController = require("../app/controllers/coursesController");

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.get("/:id/edit", coursesController.edit);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.delete);
router.get("/:slug", coursesController.show);

module.exports = router;
