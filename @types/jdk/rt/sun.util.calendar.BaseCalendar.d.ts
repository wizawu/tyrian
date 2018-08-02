declare namespace sun {
    namespace util {
        namespace calendar {
abstract class BaseCalendar extends sun.util.calendar.AbstractCalendar {
    public static JANUARY: int
    public static FEBRUARY: int
    public static MARCH: int
    public static APRIL: int
    public static MAY: int
    public static JUNE: int
    public static JULY: int
    public static AUGUST: int
    public static SEPTEMBER: int
    public static OCTOBER: int
    public static NOVEMBER: int
    public static DECEMBER: int
    public static SUNDAY: int
    public static MONDAY: int
    public static TUESDAY: int
    public static WEDNESDAY: int
    public static THURSDAY: int
    public static FRIDAY: int
    public static SATURDAY: int
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