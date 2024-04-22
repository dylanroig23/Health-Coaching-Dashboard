import React from "react";
import PageHeading from "../components/PageHeading";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import WeeklyZoneMinutesChart from "../components/WeeklyZoneMinutesChart";
import WeeklyZonevsSleepChart from "../components/WeeklyZonevsSleepChart";
import WeeklyStepsChart from "../components/WeeklyStepsChart";
import WeeklyHealthyMealsChart from "../components/WeeklyHealthyMealsChart";
import WeeklyServingsOfFruitsChart from "../components/WeeklyServingsOfFruit";
import WeeklyServingsOfVegetablesChart from "../components/WeeklyServingsOfVegetablesChart";
import WeeklyActivityCompletion from "../components/WeeklyActivityCompletion";
import WeeklySmartGoals from "../components/WeeklySmartGoals";

// Styling for the MUI Component: Paper. This allows the use of the <Item> tag below
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: "#548235",
  border: `1px solid ${"#548235"}`,
}));

const WeeklyDashboard = () => {
  // the user data that is initially fetched on launch
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");

  // fetches data from the json server, just gets the entire users table
  const fetchData = async () => {
    try {
      const userResponse = await fetch(
        `${process.env.REACT_APP_DB_URI}/sessionManager/sessionInfo`
      );

      if (!userResponse.ok) {
        throw new Error("Failed to fetch the session data");
      }

      const userData = await userResponse.json();
      setUserData(userData);

      if (userData) {
        const sessionUserRes = await fetch(
          `${process.env.REACT_APP_DB_URI}/users/sessionUser`
        );
        const resData = await sessionUserRes.json();
        setUserName(resData[0].name);
      }
    } catch (error) {
      console.log("no session current session data");
      window.location.href = "/adduser";
    }
  };

  // runs when the WeeklyDashboard mounts, just calls fetchData()
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount...I believe

  if (userData) {
    return (
      <>
        <PageHeading
          // headingText={`Welcome to ${userData[0].firstName}'s Weekly Overview`}
          headingText={`Welcome to ${userName}'s Weekly Overview`}
          userData={userData}
          fromWeekly={true}
        />
        <NavBar />
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>Steps</h1>
                  <WeeklyStepsChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>Zone Minutes</h1>
                  <WeeklyZoneMinutesChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>
                    Sleep vs Zone Minutes
                  </h1>
                  <WeeklyZonevsSleepChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>
                    Servings of Fruits
                  </h1>
                  <WeeklyServingsOfFruitsChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>
                    Servings of Vegetables
                  </h1>
                  <WeeklyServingsOfVegetablesChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>Healthy Meals</h1>
                  <WeeklyHealthyMealsChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>
                    Activity Completion
                  </h1>
                  <WeeklyActivityCompletion />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>
                    Weekly SMART Goals
                  </h1>
                  <WeeklySmartGoals />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    );
  }
};

export default WeeklyDashboard;
