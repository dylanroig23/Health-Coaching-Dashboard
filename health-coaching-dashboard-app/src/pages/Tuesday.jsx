import React from "react";
import DailyDashboard from "../components/DailyDashboard";

/*Daily page for user's Tuesday fitbit information */
const Tuesday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard headingText={"Tuesday Overview"} CLIENT_ID={CLIENT_ID} />
    </>
  );
};

export default Tuesday;
