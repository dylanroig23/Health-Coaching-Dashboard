export const contactInfoJson = {
  completedHtmlOnCondition: [
    {
      expression: "{weeknum} >= 0",
      html: {
        default: "Contact Information has been saved!",
      },
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "personalinfo",
          title: "Personal Information",
          elements: [
            {
              type: "text",
              name: "firstName",
              title: "First Name:",
            },
            {
              type: "text",
              name: "lastName",
              title: "Last Name:",
              startWithNewLine: false,
            },
            {
              name: "cellphone",
              type: "text",
              title: "Cell Phone: ",
              inputType: "tel",
              placeholder: "(000) 000-0000",
              autocomplete: "tel",
              validators: [
                {
                  type: "regex",
                  regex: "\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}",
                  text: "Phone number must be in the following format: (000) 000-0000",
                },
              ],
            },
            {
              name: "homephone",
              type: "text",
              title: "Home Phone: ",
              inputType: "tel",
              startWithNewLine: false,
              placeholder: "(000) 000-0000",
              autocomplete: "tel",
              validators: [
                {
                  type: "regex",
                  regex: "\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}",
                  text: "Phone number must be in the following format: (000) 000-0000",
                },
              ],
            },
            {
              name: "email",
              type: "text",
              title: "E-mail address",
              inputType: "email",
              autocomplete: "email",
            },
          ],
        },
        {
          name: "emergencyContact1",
          type: "panel",
          title: "Emergency Contact 1",
          elements: [
            {
              type: "text",
              name: "firstNameEC1",
              title: "First Name:",
            },
            {
              type: "text",
              name: "lastNameEC1",
              title: "Last Name:",
              startWithNewLine: false,
            },
            {
              name: "cellphoneEC1",
              type: "text",
              title: "Cell Phone: ",
              inputType: "tel",
              placeholder: "(000) 000-0000",
              autocomplete: "tel",
              validators: [
                {
                  type: "regex",
                  regex: "\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}",
                  text: "Phone number must be in the following format: (000) 000-0000",
                },
              ],
            },
            {
              name: "homephoneEC1",
              type: "text",
              title: "Home Phone: ",
              inputType: "tel",
              startWithNewLine: false,
              placeholder: "(000) 000-0000",
              autocomplete: "tel",
              validators: [
                {
                  type: "regex",
                  regex: "\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}",
                  text: "Phone number must be in the following format: (000) 000-0000",
                },
              ],
            },
            {
              name: "emailEC1",
              type: "text",
              title: "E-mail address",
              inputType: "email",
              autocomplete: "email",
            },
          ],
        },
        {
          name: "emergencyContact2",
          type: "panel",
          title: "Emergency Contact 2",
          elements: [
            {
              type: "text",
              name: "firstNameEC2",
              title: "First Name:",
            },
            {
              type: "text",
              name: "lastNameEC2",
              title: "Last Name:",
              startWithNewLine: false,
            },
            {
              name: "cellphoneEC2",
              type: "text",
              title: "Cell Phone: ",
              inputType: "tel",
              placeholder: "(000) 000-0000",
              autocomplete: "tel",
              validators: [
                {
                  type: "regex",
                  regex: "\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}",
                  text: "Phone number must be in the following format: (000) 000-0000",
                },
              ],
            },
            {
              name: "homephoneEC2",
              type: "text",
              title: "Home Phone: ",
              inputType: "tel",
              startWithNewLine: false,
              placeholder: "(000) 000-0000",
              autocomplete: "tel",
              validators: [
                {
                  type: "regex",
                  regex: "\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}",
                  text: "Phone number must be in the following format: (000) 000-0000",
                },
              ],
            },
            {
              name: "emailEC2",
              type: "text",
              title: "E-mail address",
              inputType: "email",
              autocomplete: "email",
            },
          ],
        },
      ],
    },
  ],
  showPrevButton: false,
  completeText: "Save",
  showQuestionNumbers: "off",
  widthMode: "static",
  width: "1000px",
};
