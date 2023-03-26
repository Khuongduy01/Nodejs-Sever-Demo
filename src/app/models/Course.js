const mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: {
      type: String,
      maxLength: 255,
      required: true,
    },
    description: {
      type: String,
      maxLength: 600,
    },
    image: {
      type: String,
      maxLength: 600,
    },

    videoId: { type: String, required: true },
    level: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
