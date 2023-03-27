const Course = require("../models/Course");
const { MongooseOj } = require("../../util/mongoose");

class CoursesController {
  // [GET] /courses/create
  create(rep, res, next) {
    res.render("courses/create");
  }

  // [Post] /courses/store
  store(rep, res, next) {
    const formData = rep.body;
    formData.image = `https://i.ytimg.com/vi/SdcdneSdoV4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAc2AQkTLMw6nodO1GDkTsnJhzQJA`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  // [GET] /courses/:slug
  show(rep, res, next) {
    Course.findOne({
      slug: rep.params.slug,
    })
      .then((courses) => {
        res.render("courses/show", { course: MongooseOj(courses) });
      })
      .catch(next);
  }

  // [GET] /courses/:id/edit
  edit(rep, res, next) {
    Course.findById(rep.params.id)
      .then((courses) => {
        console.log(courses);
        res.render("courses/edit", { course: MongooseOj(courses) });
      })
      .catch(next);
  }

  // [PUT] /courses/:id
  update(rep, res, next) {
    Course.updateOne({ _id: rep.params.id }, rep.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  // [DELETE] /courses/:id
  delete(rep, res, next) {
    Course.deleteOne({ _id: rep.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CoursesController();
