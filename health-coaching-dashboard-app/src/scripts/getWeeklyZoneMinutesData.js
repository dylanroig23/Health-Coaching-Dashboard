/*
    These functions handle fetching the sleep data of the user
    and returning the data in the format that can be used by the
    sleep graph to display the data.
*/
function formatDate(inputDate) {
  // Parse the input date string
  var parts = inputDate.split("/");
  var day = parts[1];
  var month = parts[0];
  var year = parts[2];

  // Format the date as YYYY-MM-DD
  var formattedDate =
    year +
    "-" +
    (month.length === 1 ? "0" + month : month) +
    "-" +
    (day.length === 1 ? "0" + day : day);

  return formattedDate;
}

const fetchWeeklyZoneMinutesData = async (currentUser) => {
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

      today = formatDate(currentDateString);
      sevenDaysAgo = formatDate(sevenDaysAgoDateString);

      // Get the sleep data from the past week
      const fitbitResponse = await fetch(
        `https://api.fitbit.com/1/user/-/activities/active-zone-minutes/date/${sevenDaysAgo}/${today}.json`,
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

export const getWeeklyZoneMinutesData = async (currentUser) => {
  const zoneData = await fetchWeeklyZoneMinutesData(currentUser);
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

      formattedZoneData[date.getDay()].duration +=
        entry.value.activeZoneMinutes;
    });

    return formattedZoneData;
  } else {
    console.log("zoneData was null");
  }
};
