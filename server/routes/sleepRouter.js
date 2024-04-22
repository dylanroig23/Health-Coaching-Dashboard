const express = require("express");
const sleepRouter = express.Router();
const sleepSchema = require("../models/sleepDataSchema");
const getWeeksArray = require("../helper-scripts/getWeeksArray");
const getFitbitSleepData = require("../helper-scripts/getFitbitSleepData");
const axios = require("axios");

sleepRouter.post("/newUser", async (req, res) => {
  const { userId, startDate } = req.body;
  const weeksArray = getWeeksArray(startDate, 12);

  const week1 = {
    startDate: weeksArray[0],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week2 = {
    startDate: weeksArray[1],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week3 = {
    startDate: weeksArray[2],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week4 = {
    startDate: weeksArray[3],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week5 = {
    startDate: weeksArray[4],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week6 = {
    startDate: weeksArray[5],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week7 = {
    startDate: weeksArray[6],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week8 = {
    startDate: weeksArray[7],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week9 = {
    startDate: weeksArray[8],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week10 = {
    startDate: weeksArray[9],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week11 = {
    startDate: weeksArray[10],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };
  const week12 = {
    startDate: weeksArray[11],
    mondaySleep: "0",
    tuesdaySleep: "0",
    wednesdaySleep: "0",
    thursdaySleep: "0",
    fridaySleep: "0",
    saturdaySleep: "0",
    sundaySleep: "0",
  };

  const userSleepData = {
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

  const newUser = new sleepSchema.Sleep(userSleepData);
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
  Get the Users Sleep Data
*/
sleepRouter.get("/weekData", async (req, res) => {
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

  const weeksData = await sleepSchema.Sleep.find({
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
      weekData.mondaySleep === "0" &&
      weekData.tuesdaySleep === "0" &&
      weekData.wednesdaySleep === "0" &&
      weekData.thursdaySleep === "0" &&
      weekData.fridaySleep === "0" &&
      weekData.saturdaySleep === "0" &&
      weekData.sundaySleep === "0"
    ) {
      allZero = true;
    }

    if ((hasOccurred && withinLastSixDays) || (hasOccurred && allZero)) {
      //make an API request to FitBit
      const sleepData = await getFitbitSleepData(
        startDate,
        encodedID,
        accessToken
      );

      //update MongoDB
      sleepData.forEach((dayData) => {
        switch (dayData.day) {
          case "Sun.":
            weekData.sundaySleep = dayData.duration.toString();
            break;
          case "Mon.":
            weekData.mondaySleep = dayData.duration.toString();
            break;
          case "Tues.":
            weekData.tuesdaySleep = dayData.duration.toString();
            break;
          case "Wed.":
            weekData.wednesdaySleep = dayData.duration.toString();
            break;
          case "Thurs.":
            weekData.thursdaySleep = dayData.duration.toString();
            break;
          case "Fri.":
            weekData.fridaySleep = dayData.duration.toString();
            break;
          case "Sat.":
            weekData.saturdaySleep = dayData.duration.toString();
            break;
          default:
            console.log("default case");
            break;
        }
      });

      try {
        await weeksData[0].save();
      } catch (error) {
        console.log(error);
      }

      res.status(200).send(sleepData);
    } else if (hasOccurred) {
      //make a request to the database, it has occurred but not within the last 6 days so all data
      //is already there
      //format it and return it
      const formattedSleepData = [
        {
          day: "Sun.",
          duration: 0,
        },
        {
          day: "Mon.",
          duration: 0,
        },
        {
          day: "Tues.",
          duration: 0,
        },
        {
          day: "Wed.",
          duration: 0,
        },
        {
          day: "Thurs.",
          duration: 0,
        },
        {
          day: "Fri.",
          duration: 0,
        },
        {
          day: "Sat.",
          duration: 0,
        },
      ];

      formattedSleepData.forEach((dayData) => {
        switch (dayData.day) {
          case "Sun.":
            dayData.duration = Number(weekData.sundaySleep);
            break;
          case "Mon.":
            dayData.duration = Number(weekData.mondaySleep);
            break;
          case "Tues.":
            dayData.duration = Number(weekData.tuesdaySleep);
            break;
          case "Wed.":
            dayData.duration = Number(weekData.wednesdaySleep);
            break;
          case "Thurs.":
            dayData.duration = Number(weekData.thursdaySleep);
            break;
          case "Fri.":
            dayData.duration = Number(weekData.fridaySleep);
            break;
          case "Sat.":
            dayData.duration = Number(weekData.saturdaySleep);
            break;
          default:
            console.log("default case");
            break;
        }
      });

      res.send(formattedSleepData);
    } else {
      //report that the date has not yet occured and display no data, maybe return null
      console.log(weekData.startDate);
      res.send("This Week has Not Occurred Yet");
    }
  } else {
    res.status(500).send("Could not find the week data");
  }
});

module.exports = sleepRouter;
