declare namespace java {
  namespace util {

    abstract class TimeZone implements java.io.Serializable, java.lang.Cloneable {

      public static readonly SHORT: int
      public static readonly LONG: int
      static readonly serialVersionUID: long
      static readonly NO_TIMEZONE: java.util.TimeZone
      static readonly GMT_ID: java.lang.String
      static readonly $assertionsDisabled: boolean
      public constructor()
      public abstract getOffset(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): int
      public getOffset(arg0: long): int
      getOffsets(arg0: long, arg1: int[]): int
      public abstract setRawOffset(arg0: int): void
      public abstract getRawOffset(): int
      public getID(): java.lang.String
      public setID(arg0: java.lang.String): void
      public readonly getDisplayName(): java.lang.String
      public readonly getDisplayName(arg0: java.util.Locale): java.lang.String
      public readonly getDisplayName(arg0: boolean, arg1: int): java.lang.String
      public getDisplayName(arg0: boolean, arg1: int, arg2: java.util.Locale): java.lang.String
      public getDSTSavings(): int
      public abstract useDaylightTime(): boolean
      public observesDaylightTime(): boolean
      public abstract inDaylightTime(arg0: java.util.Date): boolean
      public static getTimeZone(arg0: java.lang.String): java.util.TimeZone
      public static getTimeZone(arg0: java.time.ZoneId): java.util.TimeZone
      public toZoneId(): java.time.ZoneId
      public static getAvailableIDs(arg0: int): java.lang.String[]
      public static getAvailableIDs(): java.lang.String[]
      public static getDefault(): java.util.TimeZone
      static getDefaultRef(): java.util.TimeZone
      public static setDefault(arg0: java.util.TimeZone): void
      public hasSameRules(arg0: java.util.TimeZone): boolean
      public clone(): java.lang.Object
    }

  }
}
