const express = require("express");
const zoneRouter = express.Router();
const zoneSchema = require("../models/zoneDataSchema");
const getWeeksArray = require("../helper-scripts/getWeeksArray");
const getFitbitZoneData = require("../helper-scripts/getFitbitZoneData");
const axios = require("axios");

zoneRouter.post("/newUser", async (req, res) => {
  const { userId, startDate } = req.body;
  const weeksArray = getWeeksArray(startDate, 12);

  const week1 = {
    startDate: weeksArray[0],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week2 = {
    startDate: weeksArray[1],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week3 = {
    startDate: weeksArray[2],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week4 = {
    startDate: weeksArray[3],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week5 = {
    startDate: weeksArray[4],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week6 = {
    startDate: weeksArray[5],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week7 = {
    startDate: weeksArray[6],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week8 = {
    startDate: weeksArray[7],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week9 = {
    startDate: weeksArray[8],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week10 = {
    startDate: weeksArray[9],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week11 = {
    startDate: weeksArray[10],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };
  const week12 = {
    startDate: weeksArray[11],
    mondayZone: "0",
    tuesdayZone: "0",
    wednesdayZone: "0",
    thursdayZone: "0",
    fridayZone: "0",
    saturdayZone: "0",
    sundayZone: "0",
  };

  const userZoneData = {
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

  const newUser = new zoneSchema.Zone(userZoneData);
  try {
    const saveUser = await newUser.save();
    if (saveUser) {
      res.send("User Zone Schema added");
    } else {
      res.send("Failed to have Zone Schema added");
    }
  } catch (error) {
    res.status(500).send("Error occurred: " + error.message);
  }
});

/*
  Get the Users Zone Data
*/
zoneRouter.get("/weekData", async (req, res) => {
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

  const weeksData = await zoneSchema.Zone.find({
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
      weekData.mondayZone === "0" &&
      weekData.tuesdayZone === "0" &&
      weekData.wednesdayZone === "0" &&
      weekData.thursdayZone === "0" &&
      weekData.fridayZone === "0" &&
      weekData.saturdayZone === "0" &&
      weekData.sundayZone === "0"
    ) {
      allZero = true;
    }

    if ((hasOccurred && withinLastSixDays) || (hasOccurred && allZero)) {
      //make an API request to FitBit
      const zoneData = await getFitbitZoneData(
        startDate,
        encodedID,
        accessToken
      );

      //update MongoDB
      zoneData.forEach((dayData) => {
        switch (dayData.day) {
          case "Sun.":
            weekData.sundayZone = dayData.duration.toString();
            break;
          case "Mon.":
            weekData.mondayZone = dayData.duration.toString();
            break;
          case "Tues.":
            weekData.tuesdayZone = dayData.duration.toString();
            break;
          case "Wed.":
            weekData.wednesdayZone = dayData.duration.toString();
            break;
          case "Thurs.":
            weekData.thursdayZone = dayData.duration.toString();
            break;
          case "Fri.":
            weekData.fridayZone = dayData.duration.toString();
            break;
          case "Sat.":
            weekData.saturdayZone = dayData.duration.toString();
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

      res.status(200).send(zoneData);
    } else if (hasOccurred) {
      //make a request to the database, it has occurred but not within the last 6 days so all data
      //is already there
      //format it and return it
      const formattedZoneData = [
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

      formattedZoneData.forEach((dayData) => {
        switch (dayData.day) {
          case "Sun.":
            dayData.duration = Number(weekData.sundayZone);
            break;
          case "Mon.":
            dayData.duration = Number(weekData.mondayZone);
            break;
          case "Tues.":
            dayData.duration = Number(weekData.tuesdayZone);
            break;
          case "Wed.":
            dayData.duration = Number(weekData.wednesdayZone);
            break;
          case "Thurs.":
            dayData.duration = Number(weekData.thursdayZone);
            break;
          case "Fri.":
            dayData.duration = Number(weekData.fridayZone);
            break;
          case "Sat.":
            dayData.duration = Number(weekData.saturdayZone);
            break;
          default:
            console.log("default case");
            break;
        }
      });

      res.send(formattedZoneData);
    } else {
      //report that the date has not yet occured and display no data, maybe return null
      console.log(weekData.startDate);
      res.send("This Week has Not Occurred Yet");
    }
  } else {
    res.status(500).send("Could not find the week data");
  }
});

module.exports = zoneRouter;
