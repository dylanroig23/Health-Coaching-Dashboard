/*
    THIS CHART IS USING DUMMY DATA
    The API functionality has not yet been built out with this chart
    as of 3/7/2024
*/

import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const WeeklyActivityCompletion = () => {
  return (
    <FormGroup style={{ paddingLeft: 20 }}>
      <FormControlLabel
        control={<Checkbox sx={{ "&.Mui-checked": { color: "#a9d18e" } }} />}
        label="Watch the weekly videos"
      />
      <FormControlLabel
        control={<Checkbox sx={{ "&.Mui-checked": { color: "#a9d18e" } }} />}
        label="Participate in the team activity"
      />
      <FormControlLabel
        control={<Checkbox sx={{ "&.Mui-checked": { color: "#a9d18e" } }} />}
        label="Engaged in the team discussion"
      />
      <FormControlLabel
        control={<Checkbox sx={{ "&.Mui-checked": { color: "#a9d18e" } }} />}
        label="Listen to the weekly podcast"
      />
      <FormControlLabel
        control={<Checkbox sx={{ "&.Mui-checked": { color: "#a9d18e" } }} />}
        label="Meet with your Health Coach"
      />
      <FormControlLabel
        control={<Checkbox sx={{ "&.Mui-checked": { color: "#a9d18e" } }} />}
        label="Complete the REDCap survey"
      />
    </FormGroup>
  );
};

export default WeeklyActivityCompletion;
