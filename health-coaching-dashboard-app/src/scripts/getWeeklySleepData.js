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

const fetchWeeklySleepData = async (currentUser) => {
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
      // console.log(today);
      // console.log(sevenDaysAgo);

      // Get the sleep data from the past week
      const fitbitResponse = await fetch(
        `https://api.fitbit.com/1.2/user/-/sleep/date/${sevenDaysAgo}/${today}.json`,
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
  const sleepData = await fetchWeeklySleepData(currentUser);
  if (sleepData != null) {
    const formattedSleepData = [
      {
        day: "Sunday",
        duration: 0,
      },
      {
        day: "Monday",
        duration: 0,
      },
      {
        day: "Tuesday",
        duration: 0,
      },
      {
        day: "Wednesday",
        duration: 0,
      },
      {
        day: "Thursday",
        duration: 0,
      },
      {
        day: "Friday",
        duration: 0,
      },
      {
        day: "Saturday",
        duration: 0,
      },
    ];

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    sleepData.sleep.reverse().forEach((entry) => {
      const date = new Date(entry.dateOfSleep);
      const dayOfWeek = daysOfWeek[date.getDay()];

      formattedSleepData[date.getDay()].duration += entry.duration / 3600000;
    });

    console.log(formattedSleepData);
    return formattedSleepData;
  } else {
    console.log("sleepData was null");
  }
};
