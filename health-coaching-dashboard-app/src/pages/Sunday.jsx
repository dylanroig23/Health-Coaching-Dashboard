import React from "react";
import DailyDashboard from "../components/DailyDashboard";

/*Daily page for user's Sunday fitbit information */
const Sunday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Sunday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Sunday;
