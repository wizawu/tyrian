declare namespace java {
  namespace util {

    class OptionalLong {

      public static empty(): java.util.OptionalLong
      public static of(arg0: long): java.util.OptionalLong
      public getAsLong(): long
      public isPresent(): boolean
      public isEmpty(): boolean
      public ifPresent(arg0: java.util.function$.LongConsumer): void
      public ifPresentOrElse(arg0: java.util.function$.LongConsumer, arg1: java.lang.Runnable): void
      public stream(): java.util.stream.LongStream
      public orElse(arg0: long): long
      public orElseGet(arg0: java.util.function$.LongSupplier): long
      public orElseThrow(): long
      public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X>): long
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
