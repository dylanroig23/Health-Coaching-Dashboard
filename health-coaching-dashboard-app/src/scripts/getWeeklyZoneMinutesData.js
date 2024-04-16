const fetchWeeklyZoneMinutesData = async () => {
  try {
    const backendResponse = await fetch(
      `${process.env.REACT_APP_DB_URI}/zoneData/weekData`,
      {
        method: "GET",
      }
    );

    const responseData = await backendResponse.json();

    return responseData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeeklyZoneMinutesData = async () => {
  const zoneData = await fetchWeeklyZoneMinutesData();
  if (zoneData != null) {
    return zoneData;
  } else {
    console.log("zoneData was null");
    return null;
  }
};
