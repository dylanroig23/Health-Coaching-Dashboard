import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PageHeading from "../components/PageHeading";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const Patient = styled(Button)(() => ({
    display: "inline-block",
    verticalAlign: "top",
    justifyContent: "center",
    padding: 0,
    color: "black !important",
    border: `2px solid ${"#548235"}`,
    textAlign: "center",
    "&:hover": {
      maxWidth: "125px",
      cursor: "pointer",
      bgcolor: "#548235",
    },
  }));

  const userClicked = async (userId) => {
    const postData = {
      userId: userId,
    };

    await axios
      .post("http://localhost:4000/users/setcurrentuser", postData)
      .then((res) => console.log(res));
  };

  const fetchUsers = async () => {
    try {
      const userResponse = await fetch(
        `${process.env.REACT_APP_DB_URI}/users/allusers`
      );
      const userData = await userResponse.json();
      //   console.log("fetchusers");
      //   console.log(userData);
      await setUserData(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (userData != null) {
    return (
      <div style={{ justifyContent: "left", padding: "25px" }}>
        <PageHeading
          headingText="Select a User"
          fromWeekly={false}
        ></PageHeading>
        {userData.map((user) => (
          <li key={user._id} style={{ listStyle: "none", margin: "10px" }}>
            <Patient key={user._id} onClick={() => userClicked(user._id)}>
              {user.contactInformation.firstName +
                " " +
                user.contactInformation.lastName}
            </Patient>
          </li>
        ))}

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
      </div>
    );
  } else {
    // if no users exist then prompt the user to add a user
    return (
      <>
        <PageHeading headingText="Please Add a User" fromWeekly={false} />;
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

export default UserList;
