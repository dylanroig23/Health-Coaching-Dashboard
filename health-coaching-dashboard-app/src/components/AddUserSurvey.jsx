import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { AddUserJson } from "../survey json/AddUserJson";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUserSurvey = () => {
  const survey = new Model(AddUserJson);
  //const navigate = useNavigate();

  survey.onComplete.add((sender, options) => {
    const dataJSON = sender.data;

    const axiosPostNewUser = async () => {
      const postData = {
        name: dataJSON.firstName,
        startDate: "2024-02-15", //this should be today's date
        fitbitUsername: dataJSON.fitbitUsername,
        firstName: dataJSON.firstName,
        lastName: dataJSON.lastName,
        cellPhone: dataJSON.cellphone,
        homeNumber: dataJSON.homephone,
        emailAddress: dataJSON.email,
        firstNameEC1: dataJSON.firstNameEC1,
        lastNameEC1: dataJSON.lastNameEC1,
        cellPhoneEC1: dataJSON.cellphoneEC1,
        homeNumberEC1: dataJSON.homephoneEC1,
        emailAddressEC1: dataJSON.emailEC1,
        firstNameEC2: dataJSON.firstNameEC2,
        lastNameEC2: dataJSON.lastNameEC2,
        cellPhoneEC2: dataJSON.cellphoneEC2,
        homeNumberEC2: dataJSON.homephoneEC2,
        emailAddressEC2: dataJSON.emailEC2,
      };

      await axios
        .post(`${process.env.REACT_APP_DB_URI}/users/newUser`, postData)
        .then((res) => (window.location.href = res.data));
    };

    axiosPostNewUser();
  });

  return <Survey model={survey} />;
};

export default AddUserSurvey;
