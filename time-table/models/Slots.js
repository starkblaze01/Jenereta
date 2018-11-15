const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SlotsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  monday: { type: Number, required: true },
  tuesday: { type: Number, required: true },
  wednesday: { type: Number, required: true },
  thursday: { type: Number, required: true },
  friday: { type: Number, required: true },
  saturday: { type: Number, required: true },
  slots: [
    {
      teacher: {
        type: String,
        required: true
      },
      sections: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      numLectures: {
        type: String,
        required: true
      }
    }
  ]
});
module.exports = Slots = mongoose.model("slots", SlotsSchema);
