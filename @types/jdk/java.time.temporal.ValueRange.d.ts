declare namespace java {
  namespace time {
    namespace temporal {
      class ValueRange implements java.io.Serializable {
        public static of(arg0: number | java.lang.Long, arg1: number | java.lang.Long): java.time.temporal.ValueRange
        public static of(
          arg0: number | java.lang.Long,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Long
        ): java.time.temporal.ValueRange
        public static of(
          arg0: number | java.lang.Long,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Long
        ): java.time.temporal.ValueRange
        public isFixed(): boolean
        public getMinimum(): number
        public getLargestMinimum(): number
        public getSmallestMaximum(): number
        public getMaximum(): number
        public isIntValue(): boolean
        public isValidValue(arg0: number | java.lang.Long): boolean
        public isValidIntValue(arg0: number | java.lang.Long): boolean
        public checkValidValue(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalField): number
        public checkValidIntValue(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalField): number
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
