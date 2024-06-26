import React from "react";
import PageHeading from "../components/PageHeading";
import DailyNavBar from "../components/DailyNavBar";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import ZoneChart from "./ZoneChart";
import SleepChart from "./SleepChart";
import StepsChart from "./StepsChart";
import DailyGoalsMetTips from "./DailyGoalsMetTips";
import DailyFruitsAndVeggies from "./DailyFruitsAndVeggies";
import DailyHealthyMeals from "./DailyHealthyMeals";

// Styling for the MUI Component: Paper. This allows the use of the <Item> tag below
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: "#548235",
  border: `1px solid ${"#548235"}`,
}));

const DailyDashboard = ({ headingText, CLIENT_ID }) => {
  // dates will eventually be passed to the graphs from the days of the week, to fetch the correct data
  return (
    <>
      <PageHeading headingText={headingText} />
      <DailyNavBar />
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Item elevation={4}>
                <h1 style={{ padding: 5, paddingLeft: 20 }}>Hours of Sleep</h1>
                <SleepChart dayOverview={headingText} />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>
                <h1 style={{ padding: 5, paddingLeft: 20 }}>Zone Minutes</h1>
                <ZoneChart dayOverview={headingText} />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>
                <DailyGoalsMetTips />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>
                <h1 style={{ padding: 5, paddingLeft: 20 }}>Daily Steps</h1>
                <StepsChart dayOverview={headingText} />
              </Item>
            </Grid>
            <Grid xs={5}>
              <Item elevation={4}>
                <h1 style={{ padding: 5, paddingLeft: 20 }}>
                  Servings of Fruits and Vegetables
                </h1>
                <DailyFruitsAndVeggies />
              </Item>
            </Grid>
            <Grid xs={3}>
              <Item elevation={4}>
                <DailyHealthyMeals />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DailyDashboard;
