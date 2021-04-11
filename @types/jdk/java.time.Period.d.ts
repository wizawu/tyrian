declare namespace java {
  namespace time {

    class Period implements java.time.chrono.ChronoPeriod, java.io.Serializable {
      public static readonly ZERO: java.time.Period
      public static ofYears(arg0: number | java.lang.Integer): java.time.Period
      public static ofMonths(arg0: number | java.lang.Integer): java.time.Period
      public static ofWeeks(arg0: number | java.lang.Integer): java.time.Period
      public static ofDays(arg0: number | java.lang.Integer): java.time.Period
      public static of(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.time.Period
      public static from(arg0: java.time.temporal.TemporalAmount): java.time.Period
      public static parse(arg0: string | java.lang.CharSequence): java.time.Period
      public static between(arg0: java.time.LocalDate, arg1: java.time.LocalDate): java.time.Period
      public get(arg0: java.time.temporal.TemporalUnit): number
      public getUnits(): java.util.List<java.time.temporal.TemporalUnit>
      public getChronology(): java.time.chrono.IsoChronology
      public isZero(): boolean
      public isNegative(): boolean
      public getYears(): number
      public getMonths(): number
      public getDays(): number
      public withYears(arg0: number | java.lang.Integer): java.time.Period
      public withMonths(arg0: number | java.lang.Integer): java.time.Period
      public withDays(arg0: number | java.lang.Integer): java.time.Period
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.Period
      public plusYears(arg0: number | java.lang.Long): java.time.Period
      public plusMonths(arg0: number | java.lang.Long): java.time.Period
      public plusDays(arg0: number | java.lang.Long): java.time.Period
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.Period
      public minusYears(arg0: number | java.lang.Long): java.time.Period
      public minusMonths(arg0: number | java.lang.Long): java.time.Period
      public minusDays(arg0: number | java.lang.Long): java.time.Period
      public multipliedBy(arg0: number | java.lang.Integer): java.time.Period
      public negated(): java.time.Period
      public normalized(): java.time.Period
      public toTotalMonths(): number
      public addTo(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public subtractFrom(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.Period
      public normalized(): java.time.chrono.ChronoPeriod
      public negated(): java.time.chrono.ChronoPeriod
      public multipliedBy(arg0: number | java.lang.Integer): java.time.chrono.ChronoPeriod
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod
      public getChronology(): java.time.chrono.Chronology
    }

  }
}
