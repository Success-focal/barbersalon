import { format } from "date-fns-tz";
import { toZonedTime } from "date-fns-tz";
const DEFAULT_TIMEZONE = "Asia/Kathmandu";

/**
 * Converts a UTC ISO datetime string to a formatted local datetime string.
 * @param isoString UTC ISO string, e.g. "2025-07-02T17:15:00.000Z"
 * @param timeZone Optional IANA timezone string, defaults to "Asia/Kathmandu"
 * @param dateFormat Optional format string, defaults to "yyyy-MM-dd HH:mm"
 * @returns formatted datetime string in local timezone
 */
export function formatToLocalTime(
  isoString: string,
  timeZone: string = DEFAULT_TIMEZONE,
  dateFormat: string = "yyyy-MM-dd HH:mm"
): string {
  try {
    const zonedDate = toZonedTime(isoString, timeZone);
    return format(zonedDate, dateFormat, { timeZone });
  } catch (error) {
    console.error("Failed to format date:", error);
    return isoString; // fallback to raw string if error
  }
}
