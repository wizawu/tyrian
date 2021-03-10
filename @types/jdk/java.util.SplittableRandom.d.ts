declare namespace java {
  namespace util {

    class SplittableRandom {
      static readonly BAD_BOUND: java.lang.String
      static readonly BAD_RANGE: java.lang.String
      static readonly BAD_SIZE: java.lang.String
      internalNextLong(arg0: number | java.lang.Long, arg1: number | java.lang.Long): number
      internalNextInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      internalNextDouble(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public constructor(arg0: number | java.lang.Long)
      public constructor()
      public split(): java.util.SplittableRandom
      public nextBytes(arg0: number[] | java.lang.Byte[]): void
      public nextInt(): number
      public nextInt(arg0: number | java.lang.Integer): number
      public nextInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public nextLong(): number
      public nextLong(arg0: number | java.lang.Long): number
      public nextLong(arg0: number | java.lang.Long, arg1: number | java.lang.Long): number
      public nextDouble(): number
      public nextDouble(arg0: number | java.lang.Double): number
      public nextDouble(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public nextBoolean(): boolean
      public ints(arg0: number | java.lang.Long): java.util.stream.IntStream
      public ints(): java.util.stream.IntStream
      public ints(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.stream.IntStream
      public ints(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.stream.IntStream
      public longs(arg0: number | java.lang.Long): java.util.stream.LongStream
      public longs(): java.util.stream.LongStream
      public longs(arg0: number | java.lang.Long, arg1: number | java.lang.Long, arg2: number | java.lang.Long): java.util.stream.LongStream
      public longs(arg0: number | java.lang.Long, arg1: number | java.lang.Long): java.util.stream.LongStream
      public doubles(arg0: number | java.lang.Long): java.util.stream.DoubleStream
      public doubles(): java.util.stream.DoubleStream
      public doubles(arg0: number | java.lang.Long, arg1: number | java.lang.Double, arg2: number | java.lang.Double): java.util.stream.DoubleStream
      public doubles(arg0: number | java.lang.Double, arg1: number | java.lang.Double): java.util.stream.DoubleStream
    }

  }
}
