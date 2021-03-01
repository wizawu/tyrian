declare namespace java {
  namespace util {

    class SplittableRandom {

      static readonly BAD_BOUND: java.lang.String
      static readonly BAD_RANGE: java.lang.String
      static readonly BAD_SIZE: java.lang.String
      readonly internalNextLong(arg0: long, arg1: long): long
      readonly internalNextInt(arg0: int, arg1: int): int
      readonly internalNextDouble(arg0: double, arg1: double): double
      public constructor(arg0: long)
      public constructor()
      public split(): java.util.SplittableRandom
      public nextBytes(arg0: byte[]): void
      public nextInt(): int
      public nextInt(arg0: int): int
      public nextInt(arg0: int, arg1: int): int
      public nextLong(): long
      public nextLong(arg0: long): long
      public nextLong(arg0: long, arg1: long): long
      public nextDouble(): double
      public nextDouble(arg0: double): double
      public nextDouble(arg0: double, arg1: double): double
      public nextBoolean(): boolean
      public ints(arg0: long): java.util.stream.IntStream
      public ints(): java.util.stream.IntStream
      public ints(arg0: long, arg1: int, arg2: int): java.util.stream.IntStream
      public ints(arg0: int, arg1: int): java.util.stream.IntStream
      public longs(arg0: long): java.util.stream.LongStream
      public longs(): java.util.stream.LongStream
      public longs(arg0: long, arg1: long, arg2: long): java.util.stream.LongStream
      public longs(arg0: long, arg1: long): java.util.stream.LongStream
      public doubles(arg0: long): java.util.stream.DoubleStream
      public doubles(): java.util.stream.DoubleStream
      public doubles(arg0: long, arg1: double, arg2: double): java.util.stream.DoubleStream
      public doubles(arg0: double, arg1: double): java.util.stream.DoubleStream
    }

  }
}
