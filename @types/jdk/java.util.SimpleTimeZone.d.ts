declare namespace java {
  namespace util {

    class SimpleTimeZone extends java.util.TimeZone {
      public static readonly WALL_TIME: int
      public static readonly STANDARD_TIME: int
      public static readonly UTC_TIME: int
      static readonly serialVersionUID: long
      static readonly currentSerialVersion: int
      public constructor(arg0: number | java.lang.Integer, arg1: java.lang.String | string)
      public constructor(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: number | java.lang.Integer, arg10: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: number | java.lang.Integer, arg10: number | java.lang.Integer, arg11: number | java.lang.Integer, arg12: number | java.lang.Integer)
      public setStartYear(arg0: number | java.lang.Integer): void
      public setStartRule(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public setStartRule(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public setStartRule(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      public setEndRule(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public setEndRule(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public setEndRule(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: boolean | java.lang.Boolean): void
      public getOffset(arg0: number | java.lang.Long): number
      getOffsets(arg0: number | java.lang.Long, arg1: int[]): number
      public getOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): number
      public getRawOffset(): number
      public setRawOffset(arg0: number | java.lang.Integer): void
      public setDSTSavings(arg0: number | java.lang.Integer): void
      public getDSTSavings(): number
      public useDaylightTime(): boolean
      public observesDaylightTime(): boolean
      public inDaylightTime(arg0: java.util.Date): boolean
      public clone(): java.lang.Object
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public hasSameRules(arg0: java.util.TimeZone): boolean
      public toString(): java.lang.String
    }

  }
}
