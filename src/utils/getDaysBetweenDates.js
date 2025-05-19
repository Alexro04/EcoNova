export default function getDaysBetweenDates(date1, date2) {
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const diffInMs = Math.abs(new Date(date2) - new Date(date1));
  return Math.floor(diffInMs / oneDayInMs);
}
