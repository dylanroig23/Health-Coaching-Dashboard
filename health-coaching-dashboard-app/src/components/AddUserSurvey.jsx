import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { AddUserJson } from "../survey json/AddUserJson";
//import { useNavigate } from "react-router-dom";

const AddUserSurvey = () => {
  const survey = new Model(AddUserJson);
  //const navigate = useNavigate();

  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });

  return <Survey model={survey} />;
};

export default AddUserSurvey;
