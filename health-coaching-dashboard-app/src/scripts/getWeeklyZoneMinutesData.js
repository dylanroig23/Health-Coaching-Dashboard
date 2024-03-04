/*
    These functions handle fetching the zone data of the user
    and returning the data in the format that can be used by the
    zone graph to display the data.
*/
import { getFormattedDate } from "./getFormattedDate";

const fetchWeeklyZoneMinutesData = async (currentUser, dateOfInterest) => {
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
      // console.log("startDate after format: " + startDate);
      endDate = getFormattedDate(endDateString);
      // console.log("endDateString after format: " + endDate);

      // Get the sleep data from the past week
      const fitbitResponse = await fetch(
        `https://api.fitbit.com/1/user/-/activities/active-zone-minutes/date/${startDate}/${endDate}.json`,
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

export const getWeeklyZoneMinutesData = async (currentUser) => {
  const zoneData = await fetchWeeklyZoneMinutesData(
    currentUser,
    currentUser.dateOfInterest
  );
  if (zoneData != null) {
    const formattedZoneData = [
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

    zoneData["activities-active-zone-minutes"].reverse().forEach((entry) => {
      const date = new Date(entry.dateTime);

      formattedZoneData[(date.getDay() + 1) % 7].duration +=
        entry.value.activeZoneMinutes;
    });

    return formattedZoneData;
  } else {
    console.log("zoneData was null");
  }
};
