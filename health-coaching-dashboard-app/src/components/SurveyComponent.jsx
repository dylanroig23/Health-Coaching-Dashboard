import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { redcapJson } from "../survey json/RedcapJson";
import { contactInfoJson } from "../survey json/ContactInfoJson";
import { smartGoalsJson } from "../survey json/SmartGoalsJson";
import axios from "axios";

export function RedcapSurveyComponent() {
  const survey = new Model(redcapJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return <Survey model={survey} />;
}

export function ContactInfoSurveyComponent() {
  const survey = new Model(contactInfoJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
    const dataJSON = sender.data;

    const axiosPostData = async () => {
      const postData = {
        name: dataJSON.firstName,
        startDate: "15-02-2024",
        fitbitUsername: "user",
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

      console.log(postData);

      await axios
        .post("http://localhost:4000/users/newUser", postData)
        .then((res) => console.log(res.data));
    };

    axiosPostData();
  });

  return <Survey model={survey} />;
}

export function SmartGoalsSurveyComponent() {
  const survey = new Model(smartGoalsJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  return <Survey model={survey} />;
}
