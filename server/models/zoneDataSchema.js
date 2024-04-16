const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeekDataSchema = new Schema({
  startDate: { type: String },
  mondayZone: { type: String },
  tuesdayZone: { type: String },
  wednesdayZone: { type: String },
  thursdayZone: { type: String },
  fridayZone: { type: String },
  saturdayZone: { type: String },
  sundayZone: { type: String },
});

const zoneDataSchema = new Schema({
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

const Zone = mongoose.model("Zone", zoneDataSchema, "zoneData");
const mySchemas = { Zone: Zone };
module.exports = mySchemas;
