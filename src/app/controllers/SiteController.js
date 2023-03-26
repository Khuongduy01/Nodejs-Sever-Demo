const Course = require("../models/Course");
const { mutipleMongooseOj } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  index(rep, res, next) {
    Course.find({})
      .then((course) => {
        res.render("home", {
          course: mutipleMongooseOj(course),
        });
      })
      .catch((error) => next(error));
  }

  // [GET] /search
  search(rep, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
