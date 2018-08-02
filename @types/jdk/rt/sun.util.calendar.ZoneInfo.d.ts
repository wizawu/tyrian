declare namespace sun {
    namespace util {
        namespace calendar {
class ZoneInfo extends java.util.TimeZone {
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: int)
    public getOffset(arg0: long): int
    public getOffsets(arg0: long, arg1: int[]): int
    public getOffsetsByStandard(arg0: long, arg1: int[]): int
    public getOffsetsByWall(arg0: long, arg1: int[]): int
    public getOffset(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): int
    public setRawOffset(arg0: int): void
    public getRawOffset(): int
    public isDirty(): boolean
    public useDaylightTime(): boolean
    public observesDaylightTime(): boolean
    public inDaylightTime(arg0: java.util.Date): boolean
    public getDSTSavings(): int
    public toString(): string
    public static getAvailableIDs(): java.lang.String[]
    public static getAvailableIDs(arg0: int): java.lang.String[]
    public static getTimeZone(arg0: java.lang.String | string): java.util.TimeZone
    public getLastRuleInstance(): java.util.SimpleTimeZone
    public clone(): java.lang.Object
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public hasSameRules(arg0: java.util.TimeZone): boolean
    public static getAliasTable(): java.util.Map<java.lang.String, java.lang.String>
    public static class: java.lang.Class<any>
}

        }
    }
}