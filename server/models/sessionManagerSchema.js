const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionManagerSchema = new Schema({
  currentUser: { type: String },
  weekOfInterest: { type: String },
});

const SessionManager = mongoose.model(
  "SessionManager",
  sessionManagerSchema,
  "sessionManager"
);
const mySchemas = { SessionManager: SessionManager };
module.exports = mySchemas;
