import React from "react";
import { SmartGoalsSurveyComponent } from "../components/SurveyComponent";
import PageHeading from "../components/PageHeading";

/*Page within the hamburger menu links to add client's SMART goal infromation to the application */
/*See SmartGoalsJson for adjusting data pertaining to the questions within the SMART goal survey*/
const SmartGoals = ({ CLIENT_ID }) => {
  return (
    <>
      <PageHeading headingText={`Long-Term SMART Goals`} />
      <SmartGoalsSurveyComponent />
    </>
  );
};

export default SmartGoals;
