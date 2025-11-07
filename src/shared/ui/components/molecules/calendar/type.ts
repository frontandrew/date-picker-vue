export type CalendarProps = {
    date: Date;
}

export interface CalendarDate {
    date: CalendarProps["date"]
    selected: boolean;
    isTargetMonth: boolean;
}