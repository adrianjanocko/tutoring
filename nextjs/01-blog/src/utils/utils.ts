export function parseDate(dateString: string): Date {
  const [day, month, year, hour, minute, second] = dateString
    .split(/[\s/:]/)
    .map((val) => parseInt(val, 10));

  return new Date(year, month - 1, day, hour, minute, second);
}
