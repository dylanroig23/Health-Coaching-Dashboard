import React from "react";
import DailyDashboard from "../components/DailyDashboard";

/*Daily page for user's Friday fitbit information */
const Friday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Friday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Friday;
