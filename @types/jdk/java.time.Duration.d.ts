declare namespace java {
  namespace time {

    class Duration implements java.time.temporal.TemporalAmount, java.lang.Comparable<java.time.Duration>, java.io.Serializable {
      public static readonly ZERO: java.time.Duration
      public static ofDays(arg0: number | java.lang.Long): java.time.Duration
      public static ofHours(arg0: number | java.lang.Long): java.time.Duration
      public static ofMinutes(arg0: number | java.lang.Long): java.time.Duration
      public static ofSeconds(arg0: number | java.lang.Long): java.time.Duration
      public static ofSeconds(arg0: number | java.lang.Long, arg1: number | java.lang.Long): java.time.Duration
      public static ofMillis(arg0: number | java.lang.Long): java.time.Duration
      public static ofNanos(arg0: number | java.lang.Long): java.time.Duration
      public static of(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.Duration
      public static from(arg0: java.time.temporal.TemporalAmount): java.time.Duration
      public static parse(arg0: string | java.lang.CharSequence): java.time.Duration
      public static between(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.Temporal): java.time.Duration
      public get(arg0: java.time.temporal.TemporalUnit): number
      public getUnits(): java.util.List<java.time.temporal.TemporalUnit>
      public isZero(): boolean
      public isNegative(): boolean
      public getSeconds(): number
      public getNano(): number
      public withSeconds(arg0: number | java.lang.Long): java.time.Duration
      public withNanos(arg0: number | java.lang.Integer): java.time.Duration
      public plus(arg0: java.time.Duration): java.time.Duration
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.Duration
      public plusDays(arg0: number | java.lang.Long): java.time.Duration
      public plusHours(arg0: number | java.lang.Long): java.time.Duration
      public plusMinutes(arg0: number | java.lang.Long): java.time.Duration
      public plusSeconds(arg0: number | java.lang.Long): java.time.Duration
      public plusMillis(arg0: number | java.lang.Long): java.time.Duration
      public plusNanos(arg0: number | java.lang.Long): java.time.Duration
      public minus(arg0: java.time.Duration): java.time.Duration
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.Duration
      public minusDays(arg0: number | java.lang.Long): java.time.Duration
      public minusHours(arg0: number | java.lang.Long): java.time.Duration
      public minusMinutes(arg0: number | java.lang.Long): java.time.Duration
      public minusSeconds(arg0: number | java.lang.Long): java.time.Duration
      public minusMillis(arg0: number | java.lang.Long): java.time.Duration
      public minusNanos(arg0: number | java.lang.Long): java.time.Duration
      public multipliedBy(arg0: number | java.lang.Long): java.time.Duration
      public dividedBy(arg0: number | java.lang.Long): java.time.Duration
      public dividedBy(arg0: java.time.Duration): number
      public negated(): java.time.Duration
      public abs(): java.time.Duration
      public addTo(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public subtractFrom(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public toDays(): number
      public toHours(): number
      public toMinutes(): number
      public toSeconds(): number
      public toMillis(): number
      public toNanos(): number
      public toDaysPart(): number
      public toHoursPart(): number
      public toMinutesPart(): number
      public toSecondsPart(): number
      public toMillisPart(): number
      public toNanosPart(): number
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.Duration
      public compareTo(arg0: java.time.Duration): number
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.Duration
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
