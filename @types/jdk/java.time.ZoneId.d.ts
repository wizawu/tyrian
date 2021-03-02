declare namespace java {
  namespace time {

    abstract class ZoneId implements java.io.Serializable {
      public static readonly SHORT_IDS: java.util.Map<java.lang.String,java.lang.String>
      public static systemDefault(): java.time.ZoneId
      public static getAvailableZoneIds(): java.util.Set<java.lang.String>
      public static of(arg0: java.lang.String, arg1: java.util.Map<java.lang.String,java.lang.String>): java.time.ZoneId
      public static of(arg0: java.lang.String): java.time.ZoneId
      public static ofOffset(arg0: java.lang.String, arg1: java.time.ZoneOffset): java.time.ZoneId
      static of(arg0: java.lang.String, arg1: boolean): java.time.ZoneId
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.ZoneId
      constructor()
      public abstract getId(): java.lang.String
      public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
      public abstract getRules(): java.time.zone.ZoneRules
      public normalized(): java.time.ZoneId
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      abstract write(arg0: java.io.DataOutput): void
    }

  }
}
