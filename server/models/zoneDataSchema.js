const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zoneDataSchema = new Schema({
  user: {
    weekNumber: {
      mondayZone: { type: String },
      tuesdayZone: { type: String },
      wednesdayZone: { type: String },
      thursdayZone: { type: String },
      fridayZone: { type: String },
      saturdayZone: { type: String },
      sundayZone: { type: String },
    },
  },
});

const Zone = mongoose.model("Zone", zoneDataSchema, "zoneData");
const mySchemas = { Zone: Zone };
module.exports = mySchemas;
