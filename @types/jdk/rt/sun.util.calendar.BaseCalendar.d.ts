declare namespace sun {
    namespace util {
        namespace calendar {
            abstract class BaseCalendar extends sun.util.calendar.AbstractCalendar {
                public static readonly JANUARY: int
                public static readonly FEBRUARY: int
                public static readonly MARCH: int
                public static readonly APRIL: int
                public static readonly MAY: int
                public static readonly JUNE: int
                public static readonly JULY: int
                public static readonly AUGUST: int
                public static readonly SEPTEMBER: int
                public static readonly OCTOBER: int
                public static readonly NOVEMBER: int
                public static readonly DECEMBER: int
                public static readonly SUNDAY: int
                public static readonly MONDAY: int
                public static readonly TUESDAY: int
                public static readonly WEDNESDAY: int
                public static readonly THURSDAY: int
                public static readonly FRIDAY: int
                public static readonly SATURDAY: int
                public constructor()
                public validate(arg0: sun.util.calendar.CalendarDate): boolean
                public normalize(arg0: sun.util.calendar.CalendarDate): boolean
                public getYearLength(arg0: sun.util.calendar.CalendarDate): int
                public getYearLengthInMonths(arg0: sun.util.calendar.CalendarDate): int
                public getMonthLength(arg0: sun.util.calendar.CalendarDate): int
                public getDayOfYear(arg0: sun.util.calendar.CalendarDate): long
                public getFixedDate(arg0: sun.util.calendar.CalendarDate): long
                public getFixedDate(arg0: int, arg1: int, arg2: int, arg3: sun.util.calendar.BaseCalendar$Date): long
                public getCalendarDateFromFixedDate(arg0: sun.util.calendar.CalendarDate, arg1: long): void
                public getDayOfWeek(arg0: sun.util.calendar.CalendarDate): int
                public static getDayOfWeekFromFixedDate(arg0: long): int
                public getYearFromFixedDate(arg0: long): int
                protected isLeapYear(arg0: sun.util.calendar.CalendarDate): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}