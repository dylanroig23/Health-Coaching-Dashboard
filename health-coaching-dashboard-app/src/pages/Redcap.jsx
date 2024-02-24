import React, {Component} from "react";
import SurveyComponent from "../components/SurveyComponent";
import PageHeading from "../components/PageHeading";

const Redcap = ({ CLIENT_ID }) => {
    return (
      <>
        <PageHeading headingText="Family Coaching Progress Note" />
        <SurveyComponent />
      </>
    );
}
  
  export default Redcap;