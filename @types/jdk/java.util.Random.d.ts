declare namespace java {
  namespace util {

    class Random implements java.io.Serializable {
      static readonly serialVersionUID: long
      static readonly BadBound: java.lang.String
      static readonly BadRange: java.lang.String
      static readonly BadSize: java.lang.String
      public constructor()
      public constructor(arg0: number | java.lang.Long)
      public setSeed(arg0: number | java.lang.Long): void
      protected next(arg0: number | java.lang.Integer): number
      public nextBytes(arg0: byte[]): void
      internalNextLong(arg0: number | java.lang.Long, arg1: number | java.lang.Long): number
      internalNextInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      internalNextDouble(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
      public nextInt(): number
      public nextInt(arg0: number | java.lang.Integer): number
      public nextLong(): number
      public nextBoolean(): boolean
      public nextFloat(): number
      public nextDouble(): number
      public nextGaussian(): number
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
