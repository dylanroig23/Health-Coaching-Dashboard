async function getFitbitStepsData(firstDate, encodedID, accessToken) {
  const lastDate = new Date(startDate);
  lastDate.setDate(startDate.getDate() + 6);

  const response = await fetch(
    `https://api.fitbit.com/1/user/${encodedID}/activities/steps/date/${firstDate}/${lastDate}.json`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const fitbitStepsData = await response.json();
  if (fitbitStepsData != null) {
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

    fitbitStepsData["activities-steps"].forEach((entry) => {
      const date = new Date(entry.dateTime);

      formattedStepsData[(date.getDay() + 1) % 7].steps += Number(entry.value); //potential temporary fix on day shift issue
    });

    return formattedStepsData;
  } else {
    return null;
  }
}

module.exports = getFitbitStepsData;
