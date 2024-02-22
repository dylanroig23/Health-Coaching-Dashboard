import React from "react";
import DailyDashboard from "../components/DailyDashboard";

const Friday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Friday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Friday;
