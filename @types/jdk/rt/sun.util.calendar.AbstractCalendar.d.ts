declare namespace sun {
    namespace util {
        namespace calendar {
            abstract class AbstractCalendar extends sun.util.calendar.CalendarSystem {
                protected constructor()
                public getEra(arg0: java.lang.String | string): sun.util.calendar.Era
                public getEras(): sun.util.calendar.Era[]
                public setEra(arg0: sun.util.calendar.CalendarDate, arg1: java.lang.String | string): void
                protected setEras(arg0: sun.util.calendar.Era[]): void
                public getCalendarDate(): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long, arg1: java.util.TimeZone): sun.util.calendar.CalendarDate
                public getCalendarDate(arg0: long, arg1: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
                public getTime(arg0: sun.util.calendar.CalendarDate): long
                protected getTimeOfDay(arg0: sun.util.calendar.CalendarDate): long
                public getTimeOfDayValue(arg0: sun.util.calendar.CalendarDate): long
                public setTimeOfDay(arg0: sun.util.calendar.CalendarDate, arg1: int): sun.util.calendar.CalendarDate
                public getWeekLength(): int
                protected isLeapYear(arg0: sun.util.calendar.CalendarDate): boolean
                public getNthDayOfWeek(arg0: int, arg1: int, arg2: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
                public static getDayOfWeekDateOnOrBefore(arg0: long, arg1: int): long
                protected getFixedDate(arg0: sun.util.calendar.CalendarDate): long
                protected getCalendarDateFromFixedDate(arg0: sun.util.calendar.CalendarDate, arg1: long): void
                public validateTime(arg0: sun.util.calendar.CalendarDate): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}