/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/6/2024
*/

import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";

const DailyHealthyMeals = () => {
  return (
    <>
      <h1 style={{ padding: 5, paddingLeft: 20 }}>Healthy Meals</h1>
      <List>
        <ListItem>
          <ListItemText primary="Breakfast" />
          <ListItemIcon>
            <ThumbUpIcon fontSize="large" sx={{ color: "#3bf563" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbsUpDownIcon fontSize="large" sx={{ color: "#f2e750" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbDownIcon fontSize="large" sx={{ color: "#ff0000" }} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText primary="Lunch" />
          <ListItemIcon>
            <ThumbUpIcon fontSize="large" sx={{ color: "#3bf563" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbsUpDownIcon fontSize="large" sx={{ color: "#f2e750" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbDownIcon fontSize="large" sx={{ color: "#ff0000" }} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText primary="Dinner" />
          <ListItemIcon>
            <ThumbUpIcon fontSize="large" sx={{ color: "#3bf563" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbsUpDownIcon fontSize="large" sx={{ color: "#f2e750" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbDownIcon fontSize="large" sx={{ color: "#ff0000" }} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText primary="Morning Snack" />
          <ListItemIcon>
            <ThumbUpIcon fontSize="large" sx={{ color: "#3bf563" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbsUpDownIcon fontSize="large" sx={{ color: "#f2e750" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbDownIcon fontSize="large" sx={{ color: "#ff0000" }} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText primary="Afternoon Snack" />
          <ListItemIcon>
            <ThumbUpIcon fontSize="large" sx={{ color: "#3bf563" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbsUpDownIcon fontSize="large" sx={{ color: "#f2e750" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbDownIcon fontSize="large" sx={{ color: "#ff0000" }} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText primary="Anytime" />
          <ListItemIcon>
            <ThumbUpIcon fontSize="large" sx={{ color: "#3bf563" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbsUpDownIcon fontSize="large" sx={{ color: "#f2e750" }} />
          </ListItemIcon>
          <ListItemIcon>
            <ThumbDownIcon fontSize="large" sx={{ color: "#ff0000" }} />
          </ListItemIcon>
        </ListItem>
      </List>
    </>
  );
};

export default DailyHealthyMeals;
