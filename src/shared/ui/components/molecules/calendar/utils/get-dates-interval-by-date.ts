import { eachDayOfInterval, endOfMonth, endOfWeek, interval, startOfMonth, startOfWeek } from "date-fns"

/**
 * Generates an array of calendar dates for a given month, including dates from adjacent months to fill a complete week grid
 * @param date - The reference date used to determine the month to display
 * @returns Array of Date objects
 * 
 * @example
 * ```typescript
 * const dates = getDatesIntervalByDate(new Date('2023-12-25'))
 * // Returns array of dates from last week of November to first week of January
 * ```
 */

export const getDatesIntervalByDate: (date: Date) => Date[] = (date) => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);

    const firstDayOfInterval = startOfWeek(monthStart);
    const lastDayOfInterval = endOfWeek(monthEnd);

    const targetInterval = interval(firstDayOfInterval, lastDayOfInterval);

    return eachDayOfInterval(targetInterval)
}