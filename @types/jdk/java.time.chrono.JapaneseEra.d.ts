declare namespace java {
  namespace time {
    namespace chrono {

      class JapaneseEra implements java.time.chrono.Era, java.io.Serializable {
        static readonly ERA_OFFSET: int
        static readonly ERA_CONFIG: sun.util.calendar.Era[]
        public static readonly MEIJI: java.time.chrono.JapaneseEra
        public static readonly TAISHO: java.time.chrono.JapaneseEra
        public static readonly SHOWA: java.time.chrono.JapaneseEra
        public static readonly HEISEI: java.time.chrono.JapaneseEra
        getPrivateEra(): sun.util.calendar.Era
        public static of(arg0: int): java.time.chrono.JapaneseEra
        public static valueOf(arg0: java.lang.String): java.time.chrono.JapaneseEra
        public static values(): java.time.chrono.JapaneseEra[]
        public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
        static from(arg0: java.time.LocalDate): java.time.chrono.JapaneseEra
        static toJapaneseEra(arg0: sun.util.calendar.Era): java.time.chrono.JapaneseEra
        static privateEraFrom(arg0: java.time.LocalDate): sun.util.calendar.Era
        public getValue(): int
        public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        getAbbreviation(): java.lang.String
        getName(): java.lang.String
        public toString(): java.lang.String
        writeExternal(arg0: java.io.DataOutput): void
        static readExternal(arg0: java.io.DataInput): java.time.chrono.JapaneseEra
      }

    }
  }
}
