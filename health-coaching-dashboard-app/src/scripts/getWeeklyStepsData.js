const fetchWeeklyStepsData = async () => {
  try {
    const backendResponse = await fetch(
      `${process.env.REACT_APP_DB_URI}/stepsData/weekData`,
      {
        method: "GET",
      }
    );
    const responseData = await backendResponse.json();
    console.log("backend response: " + responseData);

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getWeeklyStepsData = async () => {
  const stepsData = await fetchWeeklyStepsData();
  if (stepsData != null) {
    return stepsData;
  } else {
    console.log("stepsData was null");
  }
};
