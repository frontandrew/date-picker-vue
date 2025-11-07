import { eachDayOfInterval, endOfMonth, endOfWeek, interval, isWithinInterval, startOfMonth, startOfWeek } from "date-fns"
import type { CalendarDate } from "../type"

/**
 * Generates an array of calendar dates for a given month, including dates from adjacent months to fill a complete week grid
 * @param date - The reference date used to determine the month to display
 * @returns Array of CalendarDate objects containing:
 *  - date: The actual date object
 *  - isTargetMonth: Boolean indicating if the date belongs to the target month
 *  - selected: Boolean indicating if this date matches the reference date
 * 
 * @example
 * ```typescript
 * const dates = getDatesIntervalByDate(new Date('2023-12-25'))
 * // Returns array of dates from last week of November to first week of January
 * // with December dates marked as isTargetMonth: true
 * // and December 25th marked as selected: true
 * ```
 */

export const getDatesIntervalByDate: (date: Date) => CalendarDate[] = (date) => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);

    const firstDayOfInterval = startOfWeek(monthStart);
    const lastDayOfInterval = endOfWeek(monthEnd);

    const monthInterval = interval(monthStart, monthEnd);
    const targetInterval = interval(firstDayOfInterval, lastDayOfInterval);

    return eachDayOfInterval(targetInterval).map<CalendarDate>((item) => ({
        date: item,
        isTargetMonth: isWithinInterval(item, monthInterval),
        selected: item.toDateString() === date.toDateString(),
    }))
}