async function getFitbitStepsData(firstDate, encodedID, accessToken) {
  const lastDate = new Date(firstDate);
  lastDate.setDate(firstDate.getDate() + 7);
  const year = lastDate.getFullYear();
  const month = String(lastDate.getMonth() + 1).padStart(2, "0");
  const day = String(lastDate.getDate()).padStart(2, "0");
  const formattedLastDate = `${year}-${month}-${day}`;
  const startYear = firstDate.getFullYear();
  const startMonth = String(firstDate.getMonth() + 1).padStart(2, "0");
  const startDay = String(firstDate.getDate() + 1).padStart(2, "0");
  const formattedStartDate = `${startYear}-${startMonth}-${startDay}`;

  const response = await fetch(
    `https://api.fitbit.com/1/user/${encodedID}/activities/steps/date/${formattedStartDate}/${formattedLastDate}.json`,
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
