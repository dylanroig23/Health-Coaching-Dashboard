/*
    THIS CHART IS USING DUMMY DATA
    The API functionality has not yet been built out with this chart
    as of 3/7/2024

    Displays SMART goals on weekly dashboard. Does not currently connect to the database and draw from the SMART goals survey.
*/

import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const WeeklySmartGoals = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Get at least 7 hours of sleep every night." />
      </ListItem>
      <ListItem>
        <ListItemText primary="Increase weekly average for steps." />
      </ListItem>
      <ListItem>
        <ListItemText primary="..." />
      </ListItem>
      <ListItem>
        <ListItemText primary="..." />
      </ListItem>
    </List>
  );
};

export default WeeklySmartGoals;
