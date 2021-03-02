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
        public setSeed(arg0: number | java.lang.Long): void
        nextSeed(): number
        protected next(arg0: number | java.lang.Integer): number
        internalNextLong(arg0: number | java.lang.Long, arg1: number | java.lang.Long): number
        internalNextInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        internalNextDouble(arg0: number | java.lang.Double, arg1: number | java.lang.Double): number
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
        public nextFloat(): number
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
        static getProbe(): number
        static advanceProbe(arg0: number | java.lang.Integer): number
        static nextSecondarySeed(): number
        static eraseThreadLocals(arg0: java.lang.Thread): void
        static setInheritedAccessControlContext(arg0: java.lang.Thread, arg1: java.security.AccessControlContext): void
      }

    }
  }
}
