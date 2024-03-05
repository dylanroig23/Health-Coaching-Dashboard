import React, {Component} from "react";
import { SmartGoalsSurveyComponent } from "../components/SurveyComponent";
import PageHeading from "../components/PageHeading";

const SmartGoals = ({ CLIENT_ID }) => {
    return (
      <>
        <PageHeading headingText={`Long-Term SMART Goals`}/>
        <SmartGoalsSurveyComponent />
      </>
    );
}
  
  export default SmartGoals;