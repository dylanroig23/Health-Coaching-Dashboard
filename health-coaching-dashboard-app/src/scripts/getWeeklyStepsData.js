import { getFormattedDate } from "./getFormattedDate";

const fetchWeeklyStepsData = async (currentUser, dateOfInterest) => {
  try {
    if (currentUser) {
      // Get current date in Eastern Standard Time (New York)
      let startDate = new Date(dateOfInterest);
      startDate.setDate(startDate.getDate() + 1); // temporary fix
      const options = { timeZone: "America/New_York" };
      const startDateString = startDate
        .toLocaleString("en-US", options)
        .split(",")[0];

      // Calculate the end date
      let endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6);
      const endDateString = endDate
        .toLocaleString("en-US", options)
        .split(",")[0];

      startDate = getFormattedDate(startDateString);
      // console.log("startDate after format: " + startDate);
      endDate = getFormattedDate(endDateString);
      // console.log("endDateString after format: " + endDate);

      // Get the sleep data from the past week
      const fitbitResponse = await fetch(
        `https://api.fitbit.com/1/user/-/activities/steps/date/${startDate}/${endDate}.json`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${currentUser.accessToken}`,
          },
        }
      );

      const fitbitData = await fitbitResponse.json();
      // console.log(fitbitData);
      return fitbitData;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getWeeklyStepsData = async (currentUser) => {
  const stepsData = await fetchWeeklyStepsData(
    currentUser,
    currentUser.dateOfInterest
  );
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

    stepsData["activities-steps"].forEach((entry) => {
      const date = new Date(entry.dateTime);

      formattedStepsData[(date.getDay() + 1) % 7].steps += Number(entry.value); //potential temporary fix on day shift issue
    });

    return formattedStepsData;
  } else {
    console.log("stepsData was null");
  }
};
