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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: `1px solid ${"#548235"}`,
}));

const WeeklyDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

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

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  if (userData) {
    return (
      <>
        <PageHeading headingText="Welcome to User's Weekly Overview" />
        <NavBar />
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
              <Grid xs={4}>
                <Item elevation={4}>Steps</Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>Servings of Fruits and Vegetables</Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={4}>Healthy Meals</Item>
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
