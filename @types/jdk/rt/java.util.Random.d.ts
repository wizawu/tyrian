declare namespace java {
    namespace util {
        class Random implements java.io.Serializable {
            public constructor()
            public constructor(arg0: long)
            public setSeed(arg0: long): void
            protected next(arg0: int): int
            public nextBytes(arg0: byte[]): void
            public nextInt(): int
            public nextInt(arg0: int): int
            public nextLong(): long
            public nextBoolean(): boolean
            public nextFloat(): float
            public nextDouble(): double
            public nextGaussian(): double
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
            public static class: java.lang.Class<any>
        }
    }
}