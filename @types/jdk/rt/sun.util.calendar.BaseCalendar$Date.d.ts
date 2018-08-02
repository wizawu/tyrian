declare namespace sun {
    namespace util {
        namespace calendar {
            abstract class BaseCalendar$Date extends sun.util.calendar.CalendarDate {
                protected constructor()
                protected constructor(arg0: java.util.TimeZone)
                public setNormalizedDate(arg0: int, arg1: int, arg2: int): sun.util.calendar.BaseCalendar$Date
                public getNormalizedYear(): int
                public setNormalizedYear(arg0: int): void
                protected hit(arg0: int): boolean
                protected hit(arg0: long): boolean
                protected getCachedYear(): int
                protected getCachedJan1(): long
                protected setCache(arg0: int, arg1: long, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}