import type { DatePickerValue } from "../type";

export function getDefaultValue(): DatePickerValue {
    const date = new Date();
    return [date.getFullYear(), date.getMonth, date.getDay()].join('-') as DatePickerValue
}