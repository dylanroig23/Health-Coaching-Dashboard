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
const axios = require("axios");
const mongoose = require("mongoose");

let userId;
let codeVerifier;

/*
  Callback from the Fitbit User Authorization
*/
usersRouter.get("/newUser/callback/", async (req, res) => {
  // get the authorization code, userId, and codeVerifier
  const authorizationCode = req.query.code;

  console.log("userId: " + userId);
  console.log("codeVerifier: " + codeVerifier);

  if (!authorizationCode) {
    return res.status(400).send("Authorization Code not Provided.");
  }
  if (!userId) {
    return res.status(400).send("UserId Not Recieved in Session.");
  }
  if (!codeVerifier) {
    return res.status(400).send("Code Verifier Not Recieved in Session.");
  }

  // post to Fitbit API to get access token and refresh token
  const getTokensUrl = "https://api.fitbit.com/oauth2/token";
  const grantType = "authorization_code";
  const url = new URL(getTokensUrl);
  url.searchParams.append("client_id", process.env.CLIENT_ID);
  url.searchParams.append("code", authorizationCode);
  url.searchParams.append("code_verifier", codeVerifier);
  url.searchParams.append("grant_type", grantType);
  const authString = `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`;
  const base64AuthString = Buffer.from(authString).toString("base64");
  const response = await axios.post(url, null, {
    headers: {
      Authorization: `Basic ${base64AuthString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const tokensData = await response.data;

  // update the user information in MongoDB
  const mongoUser = await userSchema.Users.findById(userId);
  if (!mongoUser) {
    return res.status(404).send("User not found");
  }
  mongoUser.accessToken = tokensData.access_token;
  mongoUser.refreshToken = tokensData.refresh_token;
  mongoUser.lastUpdated = new Date();
  mongoUser.fitbitUsername = tokensData.user_id;

  try {
    const saveUser = await mongoUser.save();
    if (saveUser) {
      res.send("User Updated Successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

/*
  Add a New User
*/
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

  userId = new mongoose.Types.ObjectId(); // probably not a good idea to set things like this

  const userData = {
    _id: userId,
    name: name,
    startDate: startDate,
    lastUpdated: new Date(),
    fitbitUsername: fitbitUsername,
    accessToken: 123,
    refreshToken: 1234,
    contactInformation: contactInformation,
  };

  const newUser = new userSchema.Users(userData);

  try {
    const saveUser = await newUser.save();
    if (saveUser) {
      codeVerifier = getCodeVerifier(); // probably not a good idea to set things like this
      const codeChallenge = await getCodeChallenge(codeVerifier);
      const authorizationURL = getAuthorizationURL(
        process.env.CLIENT_ID,
        codeChallenge,
        scopes
      );

      res.send(`${authorizationURL}`);
    } else {
      res.send("Failed to save new user.");
    }
  } catch (error) {
    res.status(500).send("Error saving new user: " + error.message);
  }
});

module.exports = usersRouter;
