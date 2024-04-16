const express = require("express");
const stepsRouter = express.Router();
const stepsSchema = require("../models/stepsDataSchema");
const getWeeksArray = require("../helper-scripts/getWeeksArray");
const getFitbitStepsData = require("../helper-scripts/getFitbitStepsData");
const axios = require("axios");

stepsRouter.post("/newUser", async (req, res) => {
  const { userId, startDate } = req.body;
  const weeksArray = getWeeksArray(startDate, 12);

  const week1 = {
    startDate: weeksArray[0],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week2 = {
    startDate: weeksArray[1],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week3 = {
    startDate: weeksArray[2],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week4 = {
    startDate: weeksArray[3],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week5 = {
    startDate: weeksArray[4],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week6 = {
    startDate: weeksArray[5],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week7 = {
    startDate: weeksArray[6],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week8 = {
    startDate: weeksArray[7],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week9 = {
    startDate: weeksArray[8],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week10 = {
    startDate: weeksArray[9],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week11 = {
    startDate: weeksArray[10],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };
  const week12 = {
    startDate: weeksArray[11],
    mondaySteps: "0",
    tuesdaySteps: "0",
    wednesdaySteps: "0",
    thursdaySteps: "0",
    fridaySteps: "0",
    saturdaySteps: "0",
    sundaySteps: "0",
  };

  const userStepsData = {
    _id: userId,
    week1: week1,
    week2: week2,
    week3: week3,
    week4: week4,
    week5: week5,
    week6: week6,
    week7: week7,
    week8: week8,
    week9: week9,
    week10: week10,
    week11: week11,
    week12: week12,
  };

  const newUser = new stepsSchema.Steps(userStepsData);
  try {
    const saveUser = await newUser.save();
    if (saveUser) {
      res.send("User Steps Schema added");
    } else {
      res.send("Failed to have Steps Schema added");
    }
  } catch (error) {
    res.status(500).send("Error occurred: " + error.message);
  }
});

/*
  Get the Users Step Data
*/
stepsRouter.get("/weekData", async (req, res) => {
  let userId;
  let weekToGet;

  await axios
    .get(`${process.env.SERVER_URI}/sessionManager/sessionInfo`)
    .then((response) => {
      userId = response.data.currentUser;
      weekToGet = response.data.weekOfInterest;
    })
    .catch((error) => {
      console.log(error);
    });

  const weeksData = await stepsSchema.Steps.find({
    _id: userId,
  });

  const weekData = weeksData[0][weekToGet];

  //find the current user in the 'users' collection to get their encoded ID
  //as well as their access token
  let encodedID;
  let accessToken;
  await axios
    .get(`${process.env.SERVER_URI}/users/apicreds`)
    .then((response) => {
      encodedID = response.data.encodedID;
      accessToken = response.data.accessToken;
    })
    .catch((error) => {
      console.log(error);
    });

  if (weekData) {
    // check if the requested week's start date has already occurred
    // if it has, check to see if the date is within 6 days of the current date
    const startDate = new Date(weekData.startDate);
    const currentDate = new Date();
    const hasOccurred = startDate <= currentDate;
    let withinLastSixDays = false;
    if (hasOccurred) {
      const timeDiff = currentDate.getTime() - startDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      withinLastSixDays = daysDiff <= 6;
    }

    let allZero = false;
    if (
      weekData.mondaySteps === "0" &&
      weekData.tuesdaySteps === "0" &&
      weekData.wednesdaySteps === "0" &&
      weekData.thursdaySteps === "0" &&
      weekData.fridaySteps === "0" &&
      weekData.saturdaySteps === "0" &&
      weekData.sundaySteps === "0"
    ) {
      allZero = true;
    }

    if ((hasOccurred && withinLastSixDays) || (hasOccurred && allZero)) {
      //make an API request to FitBit
      const stepsData = await getFitbitStepsData(
        startDate,
        encodedID,
        accessToken
      );
      console.log("stepsRouter:" + JSON.stringify(stepsData, null, 2));
      res.status(200).send(stepsData);
    } else if (hasOccurred) {
      //make a request to the database, it has occurred but not within the last 6 days so all data
      //is already there
      //format it and return it
      res.send(null);
    } else {
      //report that the date has not yet occured and display no data, maybe return null
      res.status(404).send("Weeks Data was not Found");
    }
  } else {
    res.status(500).send("Could not find the week data");
  }
});

module.exports = stepsRouter;
