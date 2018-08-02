declare namespace java {
    namespace util {
        class SplittableRandom {
            public constructor(arg0: long)
            public constructor()
            public split(): java.util.SplittableRandom
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
            public static class: java.lang.Class<any>
        }
    }
}