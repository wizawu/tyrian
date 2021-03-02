declare namespace java {
  namespace util {
    namespace concurrent {

      class ThreadLocalRandom extends java.util.Random {
        initialized: boolean
        static readonly BAD_BOUND: java.lang.String
        static readonly BAD_RANGE: java.lang.String
        static readonly BAD_SIZE: java.lang.String
        static readonly instance: java.util.concurrent.ThreadLocalRandom
        static localInit(): void
        public static current(): java.util.concurrent.ThreadLocalRandom
        public setSeed(arg0: long): void
        nextSeed(): long
        protected next(arg0: int): int
        internalNextLong(arg0: long, arg1: long): long
        internalNextInt(arg0: int, arg1: int): int
        internalNextDouble(arg0: double, arg1: double): double
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
        public nextFloat(): float
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
        static getProbe(): int
        static advanceProbe(arg0: int): int
        static nextSecondarySeed(): int
        static eraseThreadLocals(arg0: java.lang.Thread): void
        static setInheritedAccessControlContext(arg0: java.lang.Thread, arg1: java.security.AccessControlContext): void
      }

    }
  }
}
