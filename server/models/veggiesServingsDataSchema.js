const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const veggieServingsDataSchema = new Schema({
  user: {
    weekNumber: {
      mondayServings: { type: String },
      tuesdayServings: { type: String },
      wednesdayServings: { type: String },
      thursdayServings: { type: String },
      fridayServings: { type: String },
      saturdayServings: { type: String },
      sundayServings: { type: String },
    },
  },
});

const VeggieServings = mongoose.model(
  "VeggieServings",
  veggieServingsDataSchema,
  "veggieServingsData"
);
const mySchemas = { VeggieServings: VeggieServings };
module.exports = mySchemas;
