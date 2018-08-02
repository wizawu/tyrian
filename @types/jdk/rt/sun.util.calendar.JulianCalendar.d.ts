declare namespace sun {
    namespace util {
        namespace calendar {
            class JulianCalendar extends sun.util.calendar.BaseCalendar {
                public getName(): string
                public getCalendarDate(): sun.util.calendar.JulianCalendar$Date
                public getCalendarDate(arg0: long): sun.util.calendar.JulianCalendar$Date
                public getCalendarDate(arg0: long, arg1: sun.util.calendar.CalendarDate): sun.util.calendar.JulianCalendar$Date
                public getCalendarDate(arg0: long, arg1: java.util.TimeZone): sun.util.calendar.JulianCalendar$Date
                public newCalendarDate(): sun.util.calendar.JulianCalendar$Date
                public newCalendarDate(arg0: java.util.TimeZone): sun.util.calendar.JulianCalendar$Date
                public getFixedDate(arg0: int, arg1: int, arg2: int, arg3: sun.util.calendar.BaseCalendar$Date): long
                public getCalendarDateFromFixedDate(arg0: sun.util.calendar.CalendarDate, arg1: long): void
                public getYearFromFixedDate(arg0: long): int
                public getDayOfWeek(arg0: sun.util.calendar.CalendarDate): int
                public getCalendarDate(arg0: long, arg1: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long, arg1: java.util.TimeZone): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long): sun.util.calendar.CalendarDate
                public getCalendarDate(): sun.util.calendar.CalendarDate
                public newCalendarDate(arg0: java.util.TimeZone): sun.util.calendar.CalendarDate
                public newCalendarDate(): sun.util.calendar.CalendarDate
                public static class: java.lang.Class<any>
            }
        }
    }
}