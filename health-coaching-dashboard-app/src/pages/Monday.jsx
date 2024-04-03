import React from "react";
import DailyDashboard from "../components/DailyDashboard";

/*Daily page for user's Monday fitbit information */
const Monday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Monday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Monday;
