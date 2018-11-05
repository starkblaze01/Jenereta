const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ClassAndsecSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  classAndsec: {
    type: [String],
    required: true
  }
});

module.exports = ClassAndsec = mongoose.model("classAndsec", ClassAndsecSchema);
