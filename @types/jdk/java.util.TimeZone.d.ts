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
      public abstract getOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public getOffset(arg0: number | java.lang.Long): number
      getOffsets(arg0: number | java.lang.Long, arg1: number[] | java.lang.Integer[]): number
      public abstract setRawOffset(arg0: number | java.lang.Integer): void
      public abstract getRawOffset(): number
      public getID(): java.lang.String
      public setID(arg0: java.lang.String | string): void
      public getDisplayName(): java.lang.String
      public getDisplayName(arg0: java.util.Locale): java.lang.String
      public getDisplayName(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer): java.lang.String
      public getDisplayName(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer, arg2: java.util.Locale): java.lang.String
      public getDSTSavings(): number
      public abstract useDaylightTime(): boolean
      public observesDaylightTime(): boolean
      public abstract inDaylightTime(arg0: java.util.Date): boolean
      public static getTimeZone(arg0: java.lang.String | string): java.util.TimeZone
      public static getTimeZone(arg0: java.time.ZoneId): java.util.TimeZone
      public toZoneId(): java.time.ZoneId
      public static getAvailableIDs(arg0: number | java.lang.Integer): java.lang.String[]
      public static getAvailableIDs(): java.lang.String[]
      public static getDefault(): java.util.TimeZone
      static getDefaultRef(): java.util.TimeZone
      public static setDefault(arg0: java.util.TimeZone): void
      public hasSameRules(arg0: java.util.TimeZone): boolean
      public clone(): java.lang.Object
    }

  }
}
