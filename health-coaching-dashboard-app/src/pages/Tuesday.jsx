import React from "react";
import DailyDashboard from "../components/DailyDashboard";

const Tuesday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Tuesday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Tuesday;
