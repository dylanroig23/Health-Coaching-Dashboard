import React from "react";
import DailyDashboard from "../components/DailyDashboard";

const Monday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Monday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Monday;
