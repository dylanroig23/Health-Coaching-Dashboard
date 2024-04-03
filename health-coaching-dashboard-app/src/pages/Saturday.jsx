import React from "react";
import DailyDashboard from "../components/DailyDashboard";

/*Daily page for user's Saturday fitbit information */
const Saturday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Saturday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Saturday;
