const express = require("express");
const usersRouter = express.Router();
const userSchema = require("../models/usersSchema");

usersRouter.post("/newUser", async (req, res) => {
  const {
    name,
    startDate,
    fitbitUserName,
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

  const userData = {
    name: name,
    startDate: startDate,
    lastUpdated: new Date(),
    fitbitUserName: fitbitUserName,
    accessToken: 123,
    refreshToken: 1234,
    contactInformation: contactInformation,
  };

  const newUser = new userSchema.Users(userData);
  const saveUser = await newUser.save();
  if (saveUser) {
    res.send("New User Added.");
  } else {
    res.send("Failed to add new user.");
  }
});

module.exports = usersRouter;
