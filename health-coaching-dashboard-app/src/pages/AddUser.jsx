import React from "react";
import AddUserSurvey from "../components/AddUserSurvey";
import PageHeading from "../components/PageHeading";

const AddUser = () => {
  <PageHeading headingText="Add User" />;
  return (
    <>
      <PageHeading headingText={"Add User"} />;
      <AddUserSurvey />
    </>
  );
};

export default AddUser;
