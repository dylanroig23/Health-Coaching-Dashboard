const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekDataSchema = new Schema({
  startDate: { type: String },
  mondaySteps: { type: String },
  tuesdaySteps: { type: String },
  wednesdaySteps: { type: String },
  thursdaySteps: { type: String },
  fridaySteps: { type: String },
  saturdaySteps: { type: String },
  sundaySteps: { type: String },
});

const stepsDataSchema = new Schema({
  week1: WeekDataSchema,
  week2: WeekDataSchema,
  week3: WeekDataSchema,
  week4: WeekDataSchema,
  week5: WeekDataSchema,
  week6: WeekDataSchema,
  week7: WeekDataSchema,
  week8: WeekDataSchema,
  week9: WeekDataSchema,
  week10: WeekDataSchema,
  week11: WeekDataSchema,
  week12: WeekDataSchema,
});

const Steps = mongoose.model("Steps", stepsDataSchema, "stepsData");
const mySchemas = { Steps: Steps };
module.exports = mySchemas;
