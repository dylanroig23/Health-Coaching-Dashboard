/*
    THIS PAGE IS SOLELY FOR TESTING PURPOSES AND WILL
    LIKELY BE DELETED AND/OR HEAVILY UPDATED

    **for initial testing purposes this page allows us
    to add a user to work with to display and pull their 
    Fitbit API data**
*/

import React, { useState } from "react";
import PageHeading from "../components/PageHeading";
import {
  generateCodeVerifierAndChallenge,
  buildFitbitAuthorizationUrl,
} from "../scripts/fitbitAuth";

const AuthorizeUser = ({ CLIENT_ID }) => {
  //state values that are added by the user in the input fields + generated by scripts
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  // eslint-disable-next-line
  const [codeVerifier, setCodeVerifier] = useState("");
  // eslint-disable-next-line
  const [codeChallenge, setCodeChallenge] = useState("");
  // eslint-disable-next-line
  const [accessToken, setAccessToken] = useState("");

  const userStartDate = new Date(2024, 1, 15);
  const dateOfInterest = "2024-02-15"; //temporary fix

  //adds the user to the db.json, this is done by the json-server
  const addUser = async (user) => {
    await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  //this runs when the user clicks submit on the form, and redirects the user to the Fitbit authorization page
  const handleAuthorizeClick = async () => {
    try {
      const { codeVerifier, codeChallenge } =
        await generateCodeVerifierAndChallenge();
      setCodeVerifier(codeVerifier);
      setCodeChallenge(codeChallenge);

      const scopes = [
        "activity",
        "heartrate",
        "location",
        "nutrition",
        "oxygen_saturation",
        "profile",
        "respiratory_rate",
        "settings",
        "sleep",
        "social",
        "temperature",
        "weight",
      ];
      const url = buildFitbitAuthorizationUrl(CLIENT_ID, codeChallenge, scopes);

      addUser({
        firstName,
        lastName,
        username,
        codeVerifier,
        codeChallenge,
        startDate: userStartDate,
        dateOfInterest: dateOfInterest,
        accessToken,
      });

      //go to the authorization link
      window.location.href = url;
    } catch (error) {
      console.error("Error generating code verifier and challenge:", error);
    }
  };

  // returns the form for the user to fill out on the page, on submit it runs the handleAuthorizeClick function
  return (
    <>
      <PageHeading headingText={"Add a User"} />
      <div style={{ margin: 20 }}>
        <h2>User Information</h2>
        <form onSubmit={handleAuthorizeClick}>
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="fitbitUserName">Fitbit Username:</label>
          <input
            type="text"
            placeholder="Fitbit Username/Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <button type="submit">Authorize with Fitbit</button>
        </form>
      </div>
    </>
  );
};

export default AuthorizeUser;
