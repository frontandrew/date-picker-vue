import type { InputProps } from "../../atoms/input/type";

type D = number;
type Year = `${D}${D}${D}${D}`
type Month = `${D}${D}`
type Day = `${D}${D}`
export type DatePickerValue = `${Year}-${Month}-${Day}`;


export type DatePickerProps = {} & InputProps;
