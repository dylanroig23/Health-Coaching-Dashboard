import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { redcapJson } from "../survey json/RedcapJson";
import { contactInfoJson } from "../survey json/ContactInfoJson";
import { smartGoalsJson } from "../survey json/SmartGoalsJson";

/* Contains functions that return surveys for: RedCap (not embedded), Contact info, Smart Goals */

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
