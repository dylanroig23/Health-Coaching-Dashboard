import React from "react";
import DailyDashboard from "../components/DailyDashboard";

const Wednesday = ({ CLIENT_ID }) => {
  return (
    <>
      <DailyDashboard
        headingText={"Wednesday Overview"}
        CLIENT_ID={CLIENT_ID}
      />
    </>
  );
};

export default Wednesday;
