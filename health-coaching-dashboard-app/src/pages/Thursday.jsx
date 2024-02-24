import React from "react";
import DailyDashboard from "../components/DailyDashboard";

const Thursday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Thursday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Thursday;
