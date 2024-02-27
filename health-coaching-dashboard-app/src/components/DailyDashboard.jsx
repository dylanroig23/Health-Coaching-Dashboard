import React from "react";
import PageHeading from "../components/PageHeading";
import DailyNavBar from "../components/DailyNavBar";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import DailySleepGraph from "./DailySleepGraph";
import DailyStepsGraph from "./DailyStepsGraph";
import DailyZoneGraph from "./DailyZoneGraph";

// Styling for the MUI Component: Paper. This allows the use of the <Item> tag below
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: `1px solid ${"#548235"}`,
}));

const DailyDashboard = ({ headingText, CLIENT_ID }) => {
  // the user data that is initially fetched on launch
  //eslint-disable-next-line
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
              <h1 style={{ padding: 5, paddingLeft: 20 }}>
                Hours of Sleep
              </h1>
              <DailySleepGraph dayOverview={headingText}/>
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>
              <h1 style={{ padding: 5, paddingLeft: 20 }}>
                  Zone Minutes
                </h1>
                <DailyZoneGraph dayOverview={headingText}/>
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>Sleep vs Zone</Item>
            </Grid>
            <Grid xs={5}>
              <Item elevation={4}>
              <h1 style={{ padding: 5, paddingLeft: 20 }}>
                  Daily Steps
                </h1>
                <DailyStepsGraph dayOverview={headingText}/>
              </Item>
            </Grid>
            <Grid xs={5}>
              <Item elevation={4}>Servings of Fruits and Vegetables</Item>
            </Grid>
            <Grid xs={2}>
              <Item elevation={4}>Healthy Meals</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DailyDashboard;
