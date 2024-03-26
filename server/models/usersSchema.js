const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String },
  startDate: { type: String },
  lastUpdated: { type: String },
  fitbitUsername: { type: String },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  contactInformation: {
    firstName: { type: String },
    lastName: { type: String },
    cellPhone: { type: String },
    homeNumber: { type: String },
    emailAddress: { type: String },
    emergencyContact1: {
      firstName: { type: String },
      lastName: { type: String },
      cellPhone: { type: String },
      homeNumber: { type: String },
      emailAddress: { type: String },
    },
    emergencyContact2: {
      firstName: { type: String },
      lastName: { type: String },
      cellPhone: { type: String },
      homeNumber: { type: String },
      emailAddress: { type: String },
    },
  },
});

const Users = mongoose.model("Users", usersSchema, "users");
const mySchemas = { Users: Users };
module.exports = mySchemas;
