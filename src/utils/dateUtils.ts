/**
 * Returns the current date formatted with an ordinal day suffix,
 * e.g., "30th September, 2026" or "4th October, 2026",
 * so the reader always sees the date on the day they read the note.
 */
export function getCurrentPublishingDate(date: Date = new Date()): string {
  const day = date.getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const getOrdinalSuffix = (n: number): string => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
}
