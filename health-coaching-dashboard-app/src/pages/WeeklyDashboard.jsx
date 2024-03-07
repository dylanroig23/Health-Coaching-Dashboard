import React from "react";
import PageHeading from "../components/PageHeading";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import WeeklyHoursOfSleepChart from "../components/WeeklyHoursOfSleepChart";
import WeeklyZoneMinutesChart from "../components/WeeklyZoneMinutesChart";
import WeeklyZonevsSleepChart from "../components/WeeklyZonevsSleepChart";
import WeeklyStepsChart from "../components/WeeklyStepsChart";
import WeeklyFruitsAndVeggiesChart from "../components/WeeklyFruitsAndVeggiesChart";
import WeeklyHealthyMealsChart from "../components/WeeklyHealthyMealsChart";

// Styling for the MUI Component: Paper. This allows the use of the <Item> tag below
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: "#548235",
  border: `1px solid ${"#548235"}`,
}));

const WeeklyDashboard = ({ CLIENT_ID }) => {
  const navigate = useNavigate();
  // the user data that is initially fetched on launch
  const [userData, setUserData] = useState(null);

  // fetches data from the json server, just gets the entire users table
  const fetchData = async () => {
    try {
      const userResponse = await fetch("http://localhost:5000/users");
      const userData = await userResponse.json();

      if (userData && userData.length > 0) {
        setUserData(userData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // runs when the WeeklyDashboard mounts, just calls fetchData()
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount...I believe

  // if user data exists in the table then display the grid with the graphs
  if (userData) {
    return (
      <>
        <PageHeading
          headingText={`Welcome to ${userData[0].firstName}'s Weekly Overview`}
          userData={userData}
          fromWeekly={true}
        />
        <NavBar />
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>
                    Hours of Sleep
                  </h1>
                  <WeeklyHoursOfSleepChart />
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
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>Steps</h1>
                  <WeeklyStepsChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20 }}>
                    Servings of Fruits and Vegetables
                  </h1>
                  <WeeklyFruitsAndVeggiesChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>
                  <h1 style={{ padding: 5, paddingLeft: 20}}>
                    Healthy Meals
                  </h1>
                  <WeeklyHealthyMealsChart />
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>Activity Completion</Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>User's Weekly SMART Goals</Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    );
  } else {
    // if no users exist then prompt the user to add a user
    return (
      <>
        <PageHeading headingText="Please Add a User" />;
        <Container
          maxWidth="sm" // Limiting container width for centering purposes
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="large" // Making the button larger
            sx={{
              marginTop: 2,
              bgcolor: "#a9d18e",
              border: `2px solid ${"#548235"}`,
              "&:hover": {
                bgcolor: "#548235",
              },
            }} // Adding some top margin for spacing
            onClick={() => navigate("/authorize")}
          >
            Add User
          </Button>
        </Container>
      </>
    );
  }
};

export default WeeklyDashboard;
