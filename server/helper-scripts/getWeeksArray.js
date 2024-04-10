function getWeeksArray(startDate, interventionDurationInWeeks) {
  const parts = startDate.split("-");
  const day = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[0], 10);

  startDate = new Date(year, month - 1, day);

  const weeksArray = [];
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  for (let i = 0; i < interventionDurationInWeeks; i++) {
    const weekStartDate = new Date(
      startDate.getTime() + i * oneWeekInMilliseconds
    );
    const year = weekStartDate.getFullYear();
    const month = weekStartDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = weekStartDate.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    weeksArray.push(formattedDate);
  }

  return weeksArray;
}

module.exports = getWeeksArray;
