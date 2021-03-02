declare namespace java {
  namespace util {

    class OptionalDouble {
      public static empty(): java.util.OptionalDouble
      public static of(arg0: number | java.lang.Double): java.util.OptionalDouble
      public getAsDouble(): number
      public isPresent(): boolean
      public isEmpty(): boolean
      public ifPresent(arg0: java.util.function$.DoubleConsumer): void
      public ifPresentOrElse(arg0: java.util.function$.DoubleConsumer, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): void
      public stream(): java.util.stream.DoubleStream
      public orElse(arg0: number | java.lang.Double): number
      public orElseGet(arg0: java.util.function$.DoubleSupplier | java.util.function$.DoubleSupplier$$lambda): number
      public orElseThrow(): number
      public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$lambda<X>): number
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }

  }
}
