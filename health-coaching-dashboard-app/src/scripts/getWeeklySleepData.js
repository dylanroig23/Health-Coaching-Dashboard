/*
    These functions handle fetching the sleep data of the user
    and returning the data in the format that can be used by the
    sleep graph to display the data.
*/
import { getFormattedDate } from "./getFormattedDate";

const fetchWeeklySleepData = async (currentUser, dateOfInterest) => {
  try {
    if (currentUser) {
      // Get current date in Eastern Standard Time (New York)
      let startDate = new Date(dateOfInterest);
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
      //console.log("startDate after format: " + startDate);
      endDate = getFormattedDate(endDateString);
      //console.log("endDateString after format: " + endDate);

      // Get the sleep data from the past week
      const fitbitResponse = await fetch(
        `https://api.fitbit.com/1.2/user/-/sleep/date/${startDate}/${endDate}.json`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: `Bearer ${currentUser.accessToken}`,
          },
        }
      );

      const fitbitData = await fitbitResponse.json();
      //console.log(fitbitData);
      return fitbitData;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getWeeklySleepData = async (currentUser) => {
  const sleepData = await fetchWeeklySleepData(
    currentUser,
    currentUser.dateOfInterest
  );
  if (sleepData != null) {
    const formattedSleepData = [
      {
        day: "Sun.",
        duration: 0,
      },
      {
        day: "Mon.",
        duration: 0,
      },
      {
        day: "Tues.",
        duration: 0,
      },
      {
        day: "Wed.",
        duration: 0,
      },
      {
        day: "Thurs.",
        duration: 0,
      },
      {
        day: "Fri.",
        duration: 0,
      },
      {
        day: "Sat.",
        duration: 0,
      },
    ];

    sleepData.sleep.reverse().forEach((entry) => {
      const date = new Date(entry.dateOfSleep);
      formattedSleepData[(date.getDay() + 1) % 7].duration += Math.floor(
        entry.duration / 3600000
      );
    });

    return formattedSleepData;
  } else {
    console.log("sleepData was null");
  }
};
