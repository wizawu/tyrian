declare namespace java {
    namespace util {
        abstract class TimeZone implements java.io.Serializable , java.lang.Cloneable {
            public static SHORT: int
            public static LONG: int
            public constructor()
            public getOffset(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): int
            public getOffset(arg0: long): int
            public setRawOffset(arg0: int): void
            public getRawOffset(): int
            public getID(): string
            public setID(arg0: java.lang.String | string): void
            public getDisplayName(): string
            public getDisplayName(arg0: java.util.Locale): string
            public getDisplayName(arg0: boolean, arg1: int): string
            public getDisplayName(arg0: boolean, arg1: int, arg2: java.util.Locale): string
            public getDSTSavings(): int
            public useDaylightTime(): boolean
            public observesDaylightTime(): boolean
            public inDaylightTime(arg0: java.util.Date): boolean
            public static getTimeZone(arg0: java.lang.String | string): java.util.TimeZone
            public static getTimeZone(arg0: java.time.ZoneId): java.util.TimeZone
            public toZoneId(): java.time.ZoneId
            public static getAvailableIDs(arg0: int): java.lang.String[]
            public static getAvailableIDs(): java.lang.String[]
            public static getDefault(): java.util.TimeZone
            public static setDefault(arg0: java.util.TimeZone): void
            public hasSameRules(arg0: java.util.TimeZone): boolean
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}