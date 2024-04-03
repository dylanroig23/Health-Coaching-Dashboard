import React from "react";
import { ContactInfoSurveyComponent } from "../components/SurveyComponent";
import PageHeading from "../components/PageHeading";

/*Page within the hamburger menu links to add a user's contact information to the application */
/*See ContactInfoJson for adjusting the survey data pertaining to contact information survey*/
const ContactInfo = ({ CLIENT_ID }) => {
  return (
    <>
      <PageHeading headingText="Client Contact Information" />
      <ContactInfoSurveyComponent />
    </>
  );
};

export default ContactInfo;
