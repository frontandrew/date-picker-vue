import type { DatePickerValue } from "../type";

export function isValidValue(value: unknown): value is DatePickerValue {
    const validator = /^\d{1,4}-\d{1,2}-\d{1,2}$/;
    return validator.test(value as string)
} 