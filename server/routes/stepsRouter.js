const express = require("express");
const stepsRouter = express.Router();
const stepsSchema = require("../models/stepsDataSchema");
const getWeeksArray = require("../helper-scripts/getWeeksArray");

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

stepsRouter.get("/weekData", async (req, res) => {
  const weekToGet = req.session.weekOfInterest;
  const userId = req.session.userId;
  const weekData = await stepsSchema.Steps.find({
    _id: userId,
    week: weekToGet,
  });

  if (weekData) {
    // check if the requested week's start date has already occurred
    // if it has, check to see if the date is within 6 days of the current date
    const startDate = new Date(weekData.startDate);
    const currentDate = new Date();
    const hasOccurred = startDate <= currentDate;
    let withinLastSixDays = false;
    if (hasOccurred) {
      const timeDiff = currentDate.getTime() - givenDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      withinLastSixDays = daysDiff <= 6;
    }

    if (hasOccurred && withinLastSixDays) {
      //make an API request to FitBit
    } else if (hasOccurred) {
      //make a request to the database, it has occurred but not within the last 6 days so all data
      //is already there
    } else {
      //report that the date has not yet occured and display no data, maybe return null
    }
  } else {
    res.status(500).send("Could not find the week data");
  }
});

module.exports = stepsRouter;
