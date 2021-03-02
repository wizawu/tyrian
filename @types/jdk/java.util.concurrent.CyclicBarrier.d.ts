declare namespace java {
  namespace util {
    namespace concurrent {

      class CyclicBarrier {
        public constructor(arg0: int, arg1: java.lang.Runnable)
        public constructor(arg0: int)
        public getParties(): int
        public await(): int
        public await(arg0: long, arg1: java.util.concurrent.TimeUnit): int
        public isBroken(): boolean
        public reset(): void
        public getNumberWaiting(): int
      }

    }
  }
}
