import React from "react";
import { RedcapSurveyComponent } from "../components/SurveyComponent";
import PageHeading from "../components/PageHeading";

const Redcap = ({ CLIENT_ID }) => {
  return (
    <>
      <PageHeading headingText="Family Coaching Progress Note" />
      <RedcapSurveyComponent />
    </>
  );
};

export default Redcap;
