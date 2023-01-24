declare namespace java {
  namespace util {
    class Date implements java.io.Serializable, java.lang.Cloneable, java.lang.Comparable<java.util.Date> {
      public constructor()
      public constructor(arg0: number | java.lang.Long)
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      )
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      )
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      )
      public constructor(arg0: java.lang.String | string)
      public clone(): java.lang.Object
      public static UTC(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): number
      public static parse(arg0: java.lang.String | string): number
      public getYear(): number
      public setYear(arg0: number | java.lang.Integer): void
      public getMonth(): number
      public setMonth(arg0: number | java.lang.Integer): void
      public getDate(): number
      public setDate(arg0: number | java.lang.Integer): void
      public getDay(): number
      public getHours(): number
      public setHours(arg0: number | java.lang.Integer): void
      public getMinutes(): number
      public setMinutes(arg0: number | java.lang.Integer): void
      public getSeconds(): number
      public setSeconds(arg0: number | java.lang.Integer): void
      public getTime(): number
      public setTime(arg0: number | java.lang.Long): void
      public before(arg0: java.util.Date): boolean
      public after(arg0: java.util.Date): boolean
      public equals(arg0: java.lang.Object | any): boolean
      static getMillisOf(arg0: java.util.Date): number
      public compareTo(arg0: java.util.Date): number
      public hashCode(): number
      public toString(): java.lang.String
      public toLocaleString(): java.lang.String
      public toGMTString(): java.lang.String
      public getTimezoneOffset(): number
      public static from(arg0: java.time.Instant): java.util.Date
      public toInstant(): java.time.Instant
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
