declare namespace sun {
    namespace util {
        namespace calendar {
            abstract class CalendarSystem {
                public constructor()
                public static getGregorianCalendar(): sun.util.calendar.Gregorian
                public static forName(arg0: java.lang.String | string): sun.util.calendar.CalendarSystem
                public static getCalendarProperties(): java.util.Properties
                public getName(): string
                public getCalendarDate(): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long, arg1: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long, arg1: java.util.TimeZone): sun.util.calendar.CalendarDate
                public newCalendarDate(): sun.util.calendar.CalendarDate
                public newCalendarDate(arg0: java.util.TimeZone): sun.util.calendar.CalendarDate
                public getTime(arg0: sun.util.calendar.CalendarDate): long
                public getYearLength(arg0: sun.util.calendar.CalendarDate): int
                public getYearLengthInMonths(arg0: sun.util.calendar.CalendarDate): int
                public getMonthLength(arg0: sun.util.calendar.CalendarDate): int
                public getWeekLength(): int
                public getEra(arg0: java.lang.String | string): sun.util.calendar.Era
                public getEras(): sun.util.calendar.Era[]
                public setEra(arg0: sun.util.calendar.CalendarDate, arg1: java.lang.String | string): void
                public getNthDayOfWeek(arg0: int, arg1: int, arg2: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
                public setTimeOfDay(arg0: sun.util.calendar.CalendarDate, arg1: int): sun.util.calendar.CalendarDate
                public validate(arg0: sun.util.calendar.CalendarDate): boolean
                public normalize(arg0: sun.util.calendar.CalendarDate): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}