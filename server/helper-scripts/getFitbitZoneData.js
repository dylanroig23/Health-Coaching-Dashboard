async function getFitbitZoneData(firstDate, encodedID, accessToken) {
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
    `https://api.fitbit.com/1/user/${encodedID}/activities/active-zone-minutes/date/${formattedStartDate}/${formattedLastDate}.json`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const fitbitZoneData = await response.json();

  if (fitbitZoneData != null) {
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

    fitbitZoneData["activities-active-zone-minutes"].forEach((entry) => {
      const date = new Date(entry.dateTime);

      formattedZoneData[(date.getDay() + 1) % 7].duration +=
        entry.value.activeZoneMinutes; //potential temporary fix on day shift issue
    });

    return formattedZoneData;
  } else {
    return null;
  }
}

module.exports = getFitbitZoneData;
