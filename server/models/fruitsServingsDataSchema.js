const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fruitsServingsDataSchema = new Schema({
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

const FruitsServings = mongoose.model(
  "FruitServings",
  fruitsServingsDataSchema,
  "fruitsServingsData"
);
const mySchemas = { FruitsServings: FruitsServings };
module.exports = mySchemas;
