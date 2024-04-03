import React from "react";
import DailyDashboard from "../components/DailyDashboard";

/*Daily page for user's Wednesday fitbit information */
const Wednesday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard
        headingText={"Wednesday Overview"}
        CLIENT_ID={CLIENT_ID}
      />
    </>
  );
};

export default Wednesday;
