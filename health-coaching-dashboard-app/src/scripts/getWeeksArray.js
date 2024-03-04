export function getWeeksArray(
  startDate,
  currentDate,
  interventionDurationInWeeks
) {
  const weeksArray = [];
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

  // Iterate through each week
  for (let i = 0; i < interventionDurationInWeeks; i++) {
    const weekStartDate = new Date(
      startDate.getTime() + i * oneWeekInMilliseconds
    );

    // Check if the week has not occurred yet
    if (weekStartDate <= currentDate) {
      const year = weekStartDate.getFullYear();
      const month = weekStartDate.getMonth() + 1; // Months are zero-based, so we add 1
      const day = weekStartDate.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
      weeksArray.push(formattedDate);
    }
  }

  return weeksArray;
}
