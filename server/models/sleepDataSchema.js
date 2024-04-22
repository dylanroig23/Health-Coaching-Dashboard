const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekDataSchema = new Schema({
  startDate: { type: String },
  mondaySleep: { type: String },
  tuesdaySleep: { type: String },
  wednesdaySleep: { type: String },
  thursdaySleep: { type: String },
  fridaySleep: { type: String },
  saturdaySleep: { type: String },
  sundaySleep: { type: String },
});

const sleepDataSchema = new Schema({
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

const Sleep = mongoose.model("Sleep", sleepDataSchema, "sleepData");
const mySchemas = { Sleep: Sleep };
module.exports = mySchemas;
