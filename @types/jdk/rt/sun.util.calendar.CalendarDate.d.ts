declare namespace sun {
    namespace util {
        namespace calendar {
            abstract class CalendarDate implements java.lang.Cloneable {
                public static FIELD_UNDEFINED: int
                public static TIME_UNDEFINED: long
                protected constructor()
                protected constructor(arg0: java.util.TimeZone)
                public getEra(): sun.util.calendar.Era
                public setEra(arg0: sun.util.calendar.Era): sun.util.calendar.CalendarDate
                public getYear(): int
                public setYear(arg0: int): sun.util.calendar.CalendarDate
                public addYear(arg0: int): sun.util.calendar.CalendarDate
                public isLeapYear(): boolean
                public getMonth(): int
                public setMonth(arg0: int): sun.util.calendar.CalendarDate
                public addMonth(arg0: int): sun.util.calendar.CalendarDate
                public getDayOfMonth(): int
                public setDayOfMonth(arg0: int): sun.util.calendar.CalendarDate
                public addDayOfMonth(arg0: int): sun.util.calendar.CalendarDate
                public getDayOfWeek(): int
                public getHours(): int
                public setHours(arg0: int): sun.util.calendar.CalendarDate
                public addHours(arg0: int): sun.util.calendar.CalendarDate
                public getMinutes(): int
                public setMinutes(arg0: int): sun.util.calendar.CalendarDate
                public addMinutes(arg0: int): sun.util.calendar.CalendarDate
                public getSeconds(): int
                public setSeconds(arg0: int): sun.util.calendar.CalendarDate
                public addSeconds(arg0: int): sun.util.calendar.CalendarDate
                public getMillis(): int
                public setMillis(arg0: int): sun.util.calendar.CalendarDate
                public addMillis(arg0: int): sun.util.calendar.CalendarDate
                public getTimeOfDay(): long
                public setDate(arg0: int, arg1: int, arg2: int): sun.util.calendar.CalendarDate
                public addDate(arg0: int, arg1: int, arg2: int): sun.util.calendar.CalendarDate
                public setTimeOfDay(arg0: int, arg1: int, arg2: int, arg3: int): sun.util.calendar.CalendarDate
                public addTimeOfDay(arg0: int, arg1: int, arg2: int, arg3: int): sun.util.calendar.CalendarDate
                protected setTimeOfDay(arg0: long): void
                public isNormalized(): boolean
                public isStandardTime(): boolean
                public setStandardTime(arg0: boolean): void
                public isDaylightTime(): boolean
                protected setLocale(arg0: java.util.Locale): void
                public getZone(): java.util.TimeZone
                public setZone(arg0: java.util.TimeZone): sun.util.calendar.CalendarDate
                public isSameDate(arg0: sun.util.calendar.CalendarDate): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public clone(): java.lang.Object
                public toString(): string
                protected setDayOfWeek(arg0: int): void
                protected setNormalized(arg0: boolean): void
                public getZoneOffset(): int
                protected setZoneOffset(arg0: int): void
                public getDaylightSaving(): int
                protected setDaylightSaving(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}