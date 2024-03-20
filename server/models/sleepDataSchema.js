const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepDataSchema = new Schema({
  user: {
    weekNumber: {
      mondaySleep: { type: String },
      tuesdaySleep: { type: String },
      wednesdaySleep: { type: String },
      thursdaySleep: { type: String },
      fridaySleep: { type: String },
      saturdaySleep: { type: String },
      sundaySleep: { type: String },
    },
  },
});

const Sleep = mongoose.model("Sleep", sleepDataSchema, "sleepData");
const mySchemas = { Sleep: Sleep };
module.exports = mySchemas;
