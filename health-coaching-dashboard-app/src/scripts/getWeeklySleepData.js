/*
    These functions handle fetching the sleep data of the user
    and returning the data in the format that can be used by the
    sleep graph to display the data.
*/
const fetchWeeklySleepData = async () => {
  try {
    const backendResponse = await fetch(
      `${process.env.REACT_APP_DB_URI}/sleepData/weekData`,
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

export const getWeeklySleepData = async () => {
  const sleepData = await fetchWeeklySleepData();
  if (sleepData != null) {
    return sleepData;
  } else {
    console.log("sleepData was null");
    return null;
  }
};
