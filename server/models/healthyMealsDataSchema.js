const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const healthyMealsDataSchema = new Schema({
  user: {
    weekNumber: {
      mondayHealthyMeals: { type: String },
      tuesdayHealthyMeals: { type: String },
      wednesdayHealthyMeals: { type: String },
      thursdayHealthyMeals: { type: String },
      fridayHealthyMeals: { type: String },
      saturdayHealthyMeals: { type: String },
      sundayHealthyMeals: { type: String },
    },
  },
});

const HealthyMealsData = mongoose.model(
  "HealthyMealsData",
  healthyMealsDataSchema,
  "healthyMealsData"
);
const mySchemas = { HealthyMealsData: HealthyMealsData };
module.exports = mySchemas;
