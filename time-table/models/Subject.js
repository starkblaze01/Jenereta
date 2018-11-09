const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SubjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  subject: {
    type: [String],
    required: true
  },
  lab: [
    {
      labname: { type: String, required: true },
      numberoflabs: { type: Number, required: true }
    }
  ]
});

module.exports = Subject = mongoose.model("subject", SubjectSchema);
