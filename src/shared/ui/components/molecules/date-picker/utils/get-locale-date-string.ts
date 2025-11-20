import type { DatePickerValue } from "../type";

export function getLocaleDateString(value: DatePickerValue, locale: string): string {
    const [ year, month, day ] = value.split('-').map(Number)
    const date = new Date(year!, month!, day!)
    return date.toLocaleDateString(locale)
}