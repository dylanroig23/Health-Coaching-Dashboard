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
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";

const DailyGoalsMetTips = () => {
  return (
    <>
      <h1 style={{ padding: 5, paddingLeft: 20 }}>Goals Met</h1>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Zone minutes" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Steps" />
        </ListItem>
      </List>

      <h1 style={{ padding: 5, paddingLeft: 20 }}>
        Tips (Optional based on time)
      </h1>
      <List>
        <ListItem>
          <ListItemIcon>
            <CircleIcon fontSize="xs" />
          </ListItemIcon>
          <ListItemText primary="To get more sleep, try going to bed earlier." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon fontSize="xs" />
          </ListItemIcon>
          <ListItemText primary="Vegetables are yummy side dishes for meals!" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CircleIcon fontSize="xs" />
          </ListItemIcon>
          <ListItemText primary="Fruits make quick-and-easy snacks for on the go!" />
        </ListItem>
      </List>
    </>
  );
};

export default DailyGoalsMetTips;
