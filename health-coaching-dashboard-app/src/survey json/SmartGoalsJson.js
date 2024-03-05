export const smartGoalsJson = {
    "completedHtmlOnCondition": [
     {
      "expression": "{weeknum} >= 0",
      "html": {
       "default": "SMART Goals have been saved!",
      }
     }
    ],
    "pages": [
      {
        "elements": [
            {
                "type": "panel",
                "elements": [
                  {
                    "type": "html",
                    "name": "intro",
                    "html": "<h4>SMART Goals</h4><p>We believe that the journey to a healthier, happier lifestyle begins with you. You lay the foundation, and we will help you pave the way. Below is a series of questions/prompts that will guide you in defining the vision you have for yourself. Think about things like what goals you would like to accomplish, the activities you would like to be able to do, and how you want to feel. This exercise is all about you!</p>"
                  }
                ],
            },
            {
                "type": "comment",
                "name": "question1",
                "title": "What matters to you most?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "comment",
                "name": "question2",
                "title": "What are your favorite activities?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "comment",
                "name": "question3",
                "title": "What does a balanced diet look like to you?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "comment",
                "name": "question4",
                "title": "How do you balance work, leisure, and rest in your life?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "comment",
                "name": "question5",
                "title": "What are your biggest obstacles?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "comment",
                "name": "question6",
                "title": "How have you managed these obstacles in the past? What new strategies would you like to try?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "comment",
                "name": "question7",
                "title": "What is your vision of health and well-being?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "comment",
                "name": "question8",
                "title": "What does it look like for you to be living your happiest, fullest, and most joyful life?",
                "rows": 2,
                "maxLength": 500
            },
            {
                "type": "panel",
                "name": "question9",
                "title": "What progress would you like to make in ...",
                "elements": [
                  {
                    "type": "comment",
                    "name": "question9-1",
                    "title": "3 months?",
                    "rows": 2,
                    "maxLength": 500
                  },
                  {
                    "type": "comment",
                    "name": "question9-2",
                    "title": "6 months?",
                    "rows": 2,
                    "maxLength": 500
                  },
                  {
                    "type": "comment",
                    "name": "question9-3",
                    "title": "9 months?",
                    "rows": 2,
                    "maxLength": 500
                  },
                  {
                    "type": "comment",
                    "name": "question9-4",
                    "title": "12+ months?",
                    "rows": 2,
                    "maxLength": 500
                  },
                ]
              },
              {
                "type": "comment",
                "name": "question10",
                "title": "Write your vision statement below. My wellness vision is...",
                "maxLength": 500
            }
        ],
      },
    ],
    "showPrevButton": false,
    "showQuestionNumbers": "off",
    "widthMode": "static",
    "width": "1000px"
   };