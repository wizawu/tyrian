declare namespace java {
  namespace util {
    class OptionalInt {
      public static empty(): java.util.OptionalInt
      public static of(arg0: number | java.lang.Integer): java.util.OptionalInt
      public getAsInt(): number
      public isPresent(): boolean
      public isEmpty(): boolean
      public ifPresent(arg0: java.util.function$.IntConsumer): void
      public ifPresentOrElse(
        arg0: java.util.function$.IntConsumer,
        arg1: java.lang.Runnable | java.lang.Runnable$$lambda
      ): void
      public stream(): java.util.stream.IntStream
      public orElse(arg0: number | java.lang.Integer): number
      public orElseGet(arg0: java.util.function$.IntSupplier | java.util.function$.IntSupplier$$lambda): number
      public orElseThrow(): number
      public orElseThrow<X extends java.lang.Throwable>(
        arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$lambda<X>
      ): number
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }
  }
}
