const fetchWeeklyStepsData = async () => {
  try {
    const backendResponse = await fetch(
      `${process.env.REACT_APP_DB_URI}/stepsData/weekData`,
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

export const getWeeklyStepsData = async () => {
  const stepsData = await fetchWeeklyStepsData();
  if (stepsData != null) {
    return stepsData;
  } else {
    console.log("stepsData was null");
    return null;
  }
};
