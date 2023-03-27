const Course = require("../models/Course");
const { mutipleMongooseOj } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(rep, res, next) {
    Course.find()
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: mutipleMongooseOj(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
