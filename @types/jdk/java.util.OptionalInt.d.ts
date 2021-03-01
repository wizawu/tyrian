declare namespace java {
  namespace util {

    class OptionalInt {

      public static empty(): java.util.OptionalInt
      public static of(arg0: int): java.util.OptionalInt
      public getAsInt(): int
      public isPresent(): boolean
      public isEmpty(): boolean
      public ifPresent(arg0: java.util.function$.IntConsumer): void
      public ifPresentOrElse(arg0: java.util.function$.IntConsumer, arg1: java.lang.Runnable): void
      public stream(): java.util.stream.IntStream
      public orElse(arg0: int): int
      public orElseGet(arg0: java.util.function$.IntSupplier): int
      public orElseThrow(): int
      public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X>): int
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
