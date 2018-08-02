declare namespace sun {
    namespace util {
        namespace calendar {
            class ZoneInfoFile {
                public static getZoneIds(): java.lang.String[]
                public static getZoneIds(arg0: int): java.lang.String[]
                public static getZoneInfo(arg0: java.lang.String | string): sun.util.calendar.ZoneInfo
                public static getAliasMap(): java.util.Map<java.lang.String, java.lang.String>
                public static getVersion(): string
                public static getCustomTimeZone(arg0: java.lang.String | string, arg1: int): sun.util.calendar.ZoneInfo
                public static toCustomID(arg0: int): string
                public static useOldMapping(): boolean
                public static getZoneInfo(arg0: java.io.DataInput, arg1: java.lang.String | string): sun.util.calendar.ZoneInfo
                public static readOffset(arg0: java.io.DataInput): int
                public static class: java.lang.Class<any>
            }
        }
    }
}