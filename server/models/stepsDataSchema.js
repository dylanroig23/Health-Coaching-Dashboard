const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepsDataSchema = new Schema({
  user: {
    weekNumber: {
      mondaySteps: { type: String },
      tuesdaySteps: { type: String },
      wednesdaySteps: { type: String },
      thursdaySteps: { type: String },
      fridaySteps: { type: String },
      saturdaySteps: { type: String },
      sundaySteps: { type: String },
    },
  },
});

const Steps = mongoose.model("Steps", stepsDataSchema, "stepsData");
const mySchemas = { Steps: Steps };
module.exports = mySchemas;
