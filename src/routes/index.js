const newRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");

function router(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
}

module.exports = router;
