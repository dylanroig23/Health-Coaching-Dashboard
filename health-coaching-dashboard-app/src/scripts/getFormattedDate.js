export function getFormattedDate(inputDate) {
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
