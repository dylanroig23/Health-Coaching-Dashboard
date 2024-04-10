import React, { Component } from "react";
import CalendarLayout from '../components/CalendarLayout';
import PageHeading from "../components/PageHeading";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

// Styling for the MUI Component: Paper. This allows the use of the <DailyOverviewTab> tag below
const JumpWeekDash = styled(Button)(() => ({
  width: "100%",
  height: "100%",
  padding: 0,
  color: "black",
  "&:hover": {
    color: "grey",
  },
}));

export default class Calendar extends Component {
    render(){
    return (
      <div className="calendar-view">
        <PageHeading headingText="Program Calendar View" />
        <Grid container spacing={2} justifyContent="center" padding="1rem">
          <Grid xs={1.5}>
            <JumpWeekDash href="/">
              {" "}
              <u>Return</u>
            </JumpWeekDash>
          </Grid>
        </Grid>  
        {/*the CalendarLayout component holds all the logic for building out the calendars and highlighting*/}
        <CalendarLayout/> 
      </div>
    );
  }
}