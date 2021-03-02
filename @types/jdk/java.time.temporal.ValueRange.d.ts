declare namespace java {
  namespace time {
    namespace temporal {

      class ValueRange implements java.io.Serializable {
        public static of(arg0: long, arg1: long): java.time.temporal.ValueRange
        public static of(arg0: long, arg1: long, arg2: long): java.time.temporal.ValueRange
        public static of(arg0: long, arg1: long, arg2: long, arg3: long): java.time.temporal.ValueRange
        public isFixed(): boolean
        public getMinimum(): long
        public getLargestMinimum(): long
        public getSmallestMaximum(): long
        public getMaximum(): long
        public isIntValue(): boolean
        public isValidValue(arg0: long): boolean
        public isValidIntValue(arg0: long): boolean
        public checkValidValue(arg0: long, arg1: java.time.temporal.TemporalField): long
        public checkValidIntValue(arg0: long, arg1: java.time.temporal.TemporalField): int
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
