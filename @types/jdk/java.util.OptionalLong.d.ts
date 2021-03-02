declare namespace java {
  namespace util {

    class OptionalLong {
      public static empty(): java.util.OptionalLong
      public static of(arg0: number | java.lang.Long): java.util.OptionalLong
      public getAsLong(): number
      public isPresent(): boolean
      public isEmpty(): boolean
      public ifPresent(arg0: java.util.function$.LongConsumer): void
      public ifPresentOrElse(arg0: java.util.function$.LongConsumer, arg1: java.lang.Runnable | java.lang.Runnable$$lambda): void
      public stream(): java.util.stream.LongStream
      public orElse(arg0: number | java.lang.Long): number
      public orElseGet(arg0: java.util.function$.LongSupplier | java.util.function$.LongSupplier$$lambda): number
      public orElseThrow(): number
      public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$lambda<X>): number
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }

  }
}
