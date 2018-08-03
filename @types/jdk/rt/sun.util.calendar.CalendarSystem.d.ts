declare namespace sun {
    namespace util {
        namespace calendar {
            abstract class CalendarSystem {
                public constructor()
                public static getGregorianCalendar(): sun.util.calendar.Gregorian
                public static forName(arg0: java.lang.String | string): sun.util.calendar.CalendarSystem
                public static getCalendarProperties(): java.util.Properties
                public abstract getName(): string
                public abstract getCalendarDate(): sun.util.calendar.CalendarDate
                public abstract getCalendarDate(arg0: long): sun.util.calendar.CalendarDate
                public abstract getCalendarDate(arg0: long, arg1: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
                public abstract getCalendarDate(arg0: long, arg1: java.util.TimeZone): sun.util.calendar.CalendarDate
                public abstract newCalendarDate(): sun.util.calendar.CalendarDate
                public abstract newCalendarDate(arg0: java.util.TimeZone): sun.util.calendar.CalendarDate
                public abstract getTime(arg0: sun.util.calendar.CalendarDate): long
                public abstract getYearLength(arg0: sun.util.calendar.CalendarDate): int
                public abstract getYearLengthInMonths(arg0: sun.util.calendar.CalendarDate): int
                public abstract getMonthLength(arg0: sun.util.calendar.CalendarDate): int
                public abstract getWeekLength(): int
                public abstract getEra(arg0: java.lang.String | string): sun.util.calendar.Era
                public abstract getEras(): sun.util.calendar.Era[]
                public abstract setEra(arg0: sun.util.calendar.CalendarDate, arg1: java.lang.String | string): void
                public abstract getNthDayOfWeek(arg0: int, arg1: int, arg2: sun.util.calendar.CalendarDate): sun.util.calendar.CalendarDate
                public abstract setTimeOfDay(arg0: sun.util.calendar.CalendarDate, arg1: int): sun.util.calendar.CalendarDate
                public abstract validate(arg0: sun.util.calendar.CalendarDate): boolean
                public abstract normalize(arg0: sun.util.calendar.CalendarDate): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}