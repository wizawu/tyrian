declare namespace java {
  namespace util {

    class OptionalDouble {
      public static empty(): java.util.OptionalDouble
      public static of(arg0: double): java.util.OptionalDouble
      public getAsDouble(): double
      public isPresent(): boolean
      public isEmpty(): boolean
      public ifPresent(arg0: java.util.function$.DoubleConsumer): void
      public ifPresentOrElse(arg0: java.util.function$.DoubleConsumer, arg1: java.lang.Runnable): void
      public stream(): java.util.stream.DoubleStream
      public orElse(arg0: double): double
      public orElseGet(arg0: java.util.function$.DoubleSupplier): double
      public orElseThrow(): double
      public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X>): double
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
