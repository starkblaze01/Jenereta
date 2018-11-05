const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TeachersNameSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  teachersName: {
    type: [String],
    required: true
  }
});

module.exports = teachersName = mongoose.model(
  "teachersName",
  TeachersNameSchema
);
