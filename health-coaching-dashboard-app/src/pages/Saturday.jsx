import React from "react";
import PageHeading from "../components/PageHeading";
import DailyNavBar from "../components/DailyNavBar";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

// Styling for the MUI Component: Paper. This allows the use of the <Item> tag below
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: `1px solid ${"#548235"}`,
}));

const DailyDashboard = ({ CLIENT_ID }) => {
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
    return (
      <>
        <PageHeading headingText="Saturday Overview" />
        <DailyNavBar />
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
              <Grid xs={4}>
                <Item elevation={4}>Hours of Sleep</Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>Zone Minutes</Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>Sleep vs Zone</Item>
              </Grid>
              <Grid xs={5}>
                <Item elevation={4}>Steps</Item>
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
