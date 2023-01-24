declare namespace java {
  namespace util {
    namespace concurrent {
      class CyclicBarrier {
        public constructor(arg0: number | java.lang.Integer, arg1: java.lang.Runnable | java.lang.Runnable$$lambda)
        public constructor(arg0: number | java.lang.Integer)
        public getParties(): number
        public await(): number
        public await(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): number
        public isBroken(): boolean
        public reset(): void
        public getNumberWaiting(): number
      }
    }
  }
}
