const express = require("express");
const usersRouter = express.Router();
const userSchema = require("../models/usersSchema");
const getCodeVerifier = require("../authentication/generateCodeVerifier");
const getCodeChallenge = require("../authentication/generateCodeChallenge");
const getAuthorizationURL = require("../authentication/generateAuthorizationURL");
const scopes = [
  "activity",
  "heartrate",
  "location",
  "nutrition",
  "oxygen_saturation",
  "profile",
  "respiratory_rate",
  "settings",
  "sleep",
  "social",
  "temperature",
  "weight",
];
require("dotenv/config");

// callback from Fitbit Authorization
usersRouter.get("newUser/callback", async (req, res) => {
  // pass the userId as a query parameter and query it then update
  // the mongoDB database value and input the access and refresh tokens
});

// add a new user
usersRouter.post("/newUser", async (req, res) => {
  const {
    name,
    startDate,
    fitbitUsername,
    firstName,
    lastName,
    cellPhone,
    homeNumber,
    emailAddress,
    firstNameEC1,
    lastNameEC1,
    cellPhoneEC1,
    homeNumberEC1,
    emailAddressEC1,
    firstNameEC2,
    lastNameEC2,
    cellPhoneEC2,
    homeNumberEC2,
    emailAddressEC2,
  } = req.body;

  const emergencyContact1 = {
    firstName: firstNameEC1,
    lastName: lastNameEC1,
    cellPhone: cellPhoneEC1,
    homeNumber: homeNumberEC1,
    emailAddress: emailAddressEC1,
  };

  const emergencyContact2 = {
    firstName: firstNameEC2,
    lastName: lastNameEC2,
    cellPhone: cellPhoneEC2,
    homeNumber: homeNumberEC2,
    emailAddress: emailAddressEC2,
  };

  const contactInformation = {
    firstName: firstName,
    lastName: lastName,
    cellPhone: cellPhone,
    homeNumber: homeNumber,
    emailAddress: emailAddress,
    emergencyContact1: emergencyContact1,
    emergencyContact2: emergencyContact2,
  };

  // add the user and then do this work
  // pass the MongoDB userID as a query parameter that can be grabbed
  // on the callback
  const codeVerifier = getCodeVerifier();
  const codeChallenge = getCodeChallenge(codeVerifier);
  const authorizationURL = getAuthorizationURL(
    process.env.CLIENT_ID,
    codeChallenge,
    scopes
  );

  const userData = {
    name: name,
    startDate: startDate,
    lastUpdated: new Date(),
    fitbitUsername: fitbitUsername,
    accessToken: 123,
    refreshToken: 1234,
    contactInformation: contactInformation,
  };

  const newUser = new userSchema.Users(userData);
  const saveUser = await newUser.save();
  if (saveUser) {
    res.send(userData);
  } else {
    res.send("Failed to add new user.");
  }
});

module.exports = usersRouter;
