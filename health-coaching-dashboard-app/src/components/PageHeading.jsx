import React from "react";
import { Box } from "@mui/system";
import NavDrawer from "./NavDrawer";

// The page heading to be used on every page, must pass a headingText prop
const PageHeading = ({ headingText, userData, fromWeekly }) => {
  if (fromWeekly === true) {
    return (
      <Box
        sx={{
          width: "100%",
          height: 125,
          borderRadius: 2,
          bgcolor: "#a9d18e",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: `2px solid ${"#548235"}`,
          paddingRight: "1rem",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            paddingLeft: "1rem",
          }}
        >
          {headingText +
            ` (${userData.weekOfInterest
              .substring(0, 4)
              .toUpperCase()} ${userData.weekOfInterest.substring(4)})` ||
            "Pass a prop to this component to change header"}
        </h1>
        <NavDrawer userData={userData} />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          width: "100%",
          height: 125,
          borderRadius: 2,
          bgcolor: "#a9d18e",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: `2px solid ${"#548235"}`,
          paddingRight: "1rem",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            paddingLeft: "1rem",
          }}
        >
          {headingText || "Pass a prop to this component to change header"}
        </h1>
      </Box>
    );
  }
};

export default PageHeading;
