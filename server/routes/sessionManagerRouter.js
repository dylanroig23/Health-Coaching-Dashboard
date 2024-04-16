const express = require("express");
const sessionManagerRouter = express.Router();
const sessionManagerSchema = require("../models/sessionManagerSchema");

/*
    Creates a new User Session if one is not there and updates otherwise 
*/
sessionManagerRouter.post("/newSession", async (req, res) => {
  const { currentUser, weekOfInterest } = req.body;

  const possibleSessions = await sessionManagerSchema.SessionManager.find({});
  if (possibleSessions.length == 0 || !possibleSessions) {
    const newSessionData = {
      currentUser: currentUser,
      weekOfInterest: weekOfInterest,
    };
    const newSession = new sessionManagerSchema.SessionManager(newSessionData);
    try {
      const saveSession = await newSession.save();
      if (saveSession) {
        res.send("Session Saved to MongoDB.");
      } else {
        res.send("Failed to Save Session to MongoDB");
      }
    } catch (error) {
      res
        .status(500)
        .send("Error occured saving the session: " + error.message);
    }
  } else {
    possibleSessions[0].currentUser = currentUser;
    possibleSessions[0].weekOfInterest = weekOfInterest;
    try {
      const saveUpdate = await possibleSessions[0].save();
      if (saveUpdate) {
        res.redirect(`${process.env.CLIENT_URI}/`);
      } else {
        res.send("Could not update the Session Manager");
      }
    } catch (error) {
      res.status(500).send("Error updating the user session: " + error);
    }
  }
});

/*
    Gets the most recent session and returns it to the user
*/
sessionManagerRouter.get("/sessionInfo", async (req, res) => {
  try {
    const session = await sessionManagerSchema.SessionManager.find({});
    res.json(session[0]);
  } catch (error) {
    res.status(500).send("Error fetching the session: " + error.message);
  }
});

sessionManagerRouter.put("/updateWeekOfInterest", async (req, res) => {
  const { weekOfInterest } = req.body;
  const session = await sessionManagerSchema.SessionManager.find({});
  try {
    session[0].weekOfInterest = weekOfInterest;
    const saveUpdate = await session.save();
    if (saveUpdate) {
      res.send("Week of Interest Updated");
    } else {
      res.send("Week of Interest Could not be Updated");
    }
  } catch (error) {
    res.status(500).send("Error updating week of interest: " + error);
  }
});

module.exports = sessionManagerRouter;
