import React from "react";
import AddUserSurvey from "../components/AddUserSurvey";
import PageHeading from "../components/PageHeading";

/*Page within the hamburger menu links to add new users to the application */
/*See AddUserJson for adjusting data pertaining to the questions within the add new user survey*/
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
