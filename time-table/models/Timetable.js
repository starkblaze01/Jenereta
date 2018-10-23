const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TimetableSchema = new Schema({
  noOfdays: {
    type: Number,
    required: true
  },

  noOfslotseachday: {
    type: Number,
    required: true
  },

  slots: [
    {
      classAndsec: {
        type: Schema.Types.ObjectId,
        ref: "classAndsec"
      },
      teachersName: {
        type: Schema.Types.ObjectId,
        ref: "teachersName"
      },
      subject: {
        type: Schema.Types.ObjectId,
        ref: "subject"
      }
    }
  ]
});
module.exports = Timetable = mongoose.model("timetable", TimetableSchema);
