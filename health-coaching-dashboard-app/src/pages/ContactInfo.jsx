import React, {Component} from "react";
import { ContactInfoSurveyComponent } from "../components/SurveyComponent";
import PageHeading from "../components/PageHeading";

const ContactInfo = ({ CLIENT_ID }) => {
    return (
      <>
        <PageHeading headingText="Client Contact Information" />
        <ContactInfoSurveyComponent />
      </>
    );
}
  
  export default ContactInfo;