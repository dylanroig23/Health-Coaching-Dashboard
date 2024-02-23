import { getFormattedDate } from "./getFormattedDate";

export const fetchWeeklyStepsData = async (currentUser) => {
  try {
    if (currentUser) {
      // Get current date in Eastern Standard Time (New York)
      let today = new Date();
      const options = { timeZone: "America/New_York" };
      const currentDateString = today
        .toLocaleString("en-US", options)
        .split(",")[0];

      // Calculate the date 7 days ago
      let sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const sevenDaysAgoDateString = sevenDaysAgo
        .toLocaleString("en-US", options)
        .split(",")[0];

      today = getFormattedDate(currentDateString);
      sevenDaysAgo = getFormattedDate(sevenDaysAgoDateString);

      // Get the sleep data from the past week
      const fitbitResponse = await fetch(
        `https://api.fitbit.com/1/user/-/activities/steps/date/${sevenDaysAgo}/${today}.json`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${currentUser.accessToken}`,
          },
        }
      );

      const fitbitData = await fitbitResponse.json();

      return fitbitData;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getWeeklyStepsData = async (currentUser) => {
  const stepsData = await fetchWeeklyStepsData(currentUser);
  if (stepsData != null) {
    const formattedStepsData = [
      {
        day: "Sun.",
        steps: 0,
      },
      {
        day: "Mon.",
        steps: 0,
      },
      {
        day: "Tues.",
        steps: 0,
      },
      {
        day: "Wed.",
        steps: 0,
      },
      {
        day: "Thurs.",
        steps: 0,
      },
      {
        day: "Fri.",
        steps: 0,
      },
      {
        day: "Sat.",
        steps: 0,
      },
    ];

    stepsData["activities-steps"].reverse().forEach((entry) => {
      const date = new Date(entry.dateTime);

      formattedStepsData[date.getDay()].steps += entry.value;
    });

    return formattedStepsData;
  } else {
    console.log("stepsData was null");
  }
};
