import React from "react";
import DailyDashboard from "../components/DailyDashboard";

/*Daily page for user's Thursday fitbit information */
const Thursday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Thursday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Thursday;
