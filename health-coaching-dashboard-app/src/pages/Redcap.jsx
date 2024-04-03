import React from "react";
import { RedcapSurveyComponent } from "../components/SurveyComponent";
import PageHeading from "../components/PageHeading";

/*Page within the hamburger menu links to add client's RedCAP infromation to the application */
/*See RedcapJson for adjusting data pertaining to the questions within the RedCAP survey*/
const Redcap = ({ CLIENT_ID }) => {
  return (
    <>
      <PageHeading headingText="Family Coaching Progress Note" />
      <RedcapSurveyComponent />
    </>
  );
};

export default Redcap;
