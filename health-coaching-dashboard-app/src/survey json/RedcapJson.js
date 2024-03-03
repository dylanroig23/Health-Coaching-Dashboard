export const redcapJson = {
    "completedHtmlOnCondition": [
     {
      "expression": "{weeknum} >= 0",
      "html": {
       "default": "Thanks for your feedback! This session's notes have been recorded!",
      }
     }
    ],
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "caseID",
            "title": "Family Case ID:",
            "inputType": "number",
            "min": 0,
            "max": 9999,
            "isRequired": true
          },
          {
            "type": "checkbox",
            "name": "coach",
            "title": "Family Coach Name",
            "choices": [ "Cristine Concha", "Julie Ornealas", "Roberto Benzo", "Vanina Pavia", "Yanexy Cardona"],
            "isRequired": true
          },
          {
            "type": "text",
            "name": "date",
            "title": "Date",
            "inputType": "date",
            "defaultValueExpression": "today()",
            "isRequired": true
          },
          {
            "type": "rating",
            "name": "weeknum",
            "title": "Session week number:",
            "rateMin": 1,
            "rateMax": 10,
            "isRequired": true
          },
          {
            "type": "checkbox",
            "name": "attended",
            "title": "Who attended this session?",
            "choices": [ "Parent", "Adolescent"],
            "isRequired": true
          },
          {
            "type": "comment",
            "name": "summary",
            "title": "General Summary",
            "maxLength": 500,
            "isRequired": true
          },
          {
            "type": "text",
            "name": "calltime",
            "title": "Duration of call (Number of minutes):",
            "inputType": "number",
            "isRequired": true
          },
          {
            "type": "boolean",
            "name": "goalaccomplished",
            "title": "Was last week's goal accomplished?",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio",
            "isRequired": true
          },
          {
            "type": "boolean",
            "name": "goalset",
            "title": "Was a goal set for this session?",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio",
            "isRequired": true
          },
          {
            "type": "checkbox",
            "name": "domains",
            "title": "What domains did the session cover?",
            "choices": [ "User Engagement", "Family Physical Activity", "Family Healthy Eating", "Family Health Activity", "Family Discussion Activity"],
            "isRequired": true
          },
          {
            "type": "comment",
            "name": "smartgoal",
            "title": "Please describe the S.M.A.R.T. (Specific, Measurable, Attainable, Realistic, Time oriented) goal:",
            "maxLength": 500,
            "isRequired": true
          },
          {
            "type": "rating",
            "name": "parentimportance",
            "title": "Ask parents to complete at least one of the following ratings:",
            "description": "Importance level (0 - 10)",
            "rateMin": 0,
            "minRateDescription": "not",
            "rateMax": 10,
            "maxRateDescription": "very",
            "isRequired": true
          },
          {
            "type": "rating",
            "name": "parentconfidence",
            "title": "Ask parents to complete at least one of the following ratings:",
            "description": "Confidence level (0 - 10)",
            "rateMin": 0,
            "minRateDescription": "not",
            "rateMax": 10,
            "maxRateDescription": "very",
            "isRequired": true
          },
          {
            "type": "rating",
            "name": "adolescentimportance",
            "title": "Ask adolescents to complete at least one of the following ratings:",
            "description": "Importance level (0 - 10)",
            "rateMin": 0,
            "minRateDescription": "not",
            "rateMax": 10,
            "maxRateDescription": "very",
            "isRequired": true
          },
          {
            "type": "rating",
            "name": "adolescentconfidence",
            "title": "Ask adolescents to complete at least one of the following ratings:",
            "description": "Confidence level (0 - 10)",
            "rateMin": 0,
            "minRateDescription": "not",
            "rateMax": 10,
            "maxRateDescription": "very",
            "isRequired": true
          },
          {
            "type": "radiogroup",
            "name": "attitude",
            "title": "How would you rate your listening attitude during the session? Listening meaning; ability to drop distracting thoughts or intentions to be completely open and listen to the participant talk without trying to think about what to say next.",
            "isRequired": true,
            "colCount": 1,
            "choices": ["> 75% of the time I was silent and listening", 
            "50-75% of the time I was silent and listening", 
            "25-50% of the time I was silent and listening",
            "< 25% of the time I was silent and listening"],
            "seperateSpecialChoices": true,
            "isRequired": true
          },
          {
            "type": "text",
            "name": "nextdate",
            "title": "Date and time for next session: ",
            "inputType": "datetime-local",
            "defaultValueExpression": "currentDate()",
            "isRequired": true
          },
        ]
      },
    ],
    "showPrevButton": false,
    "showQuestionNumbers": "off",
    "widthMode": "static",
    "width": "1000px"
   };