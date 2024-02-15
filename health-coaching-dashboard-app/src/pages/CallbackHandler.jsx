/*
    THIS PAGE IS SOLELY FOR TESTING PURPOSES AND WILL
    LIKELY BE DELETED AND/OR HEAVILY UPDATED

    **for initial testing purposes this page allows us
    to add a user to work with to display and pull their 
    Fitbit API data**
*/

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { exchangeAuthorizationCodeForTokens } from "../scripts/fitbitAuth";

const CallbackHandler = ({ CLIENT_ID }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Extract the authorization code from the URL
        const queryParams = new URLSearchParams(location.search);
        const authorizationCode = queryParams.get("code");

        if (authorizationCode) {
          const res = await fetch("http://localhost:5000/users");
          const data = await res.json();

          const lastItem = data[data.length - 1];
          const codeVerifier = lastItem ? lastItem.codeVerifier : null;

          // Exchange authorization code for tokens
          const token = await exchangeAuthorizationCodeForTokens(
            CLIENT_ID,
            authorizationCode,
            codeVerifier
          );

          //update the item in on the server
          const updatedLastItem = { ...lastItem, accessToken: token };

          await fetch(`http://localhost:5000/users/${lastItem.id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(updatedLastItem),
          });

          // Redirect the user back to the home page
          navigate("/");
        } else {
          console.error("Authorization code not found in URL parameters.");
        }
      } catch (error) {
        console.error("Error handling callback:", error);
      }
    };

    handleCallback();
  }, [location, navigate, CLIENT_ID]);

  return (
    <div>
      <p>Handling the callback...</p>
    </div>
  );
};

export default CallbackHandler;
