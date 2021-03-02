declare namespace java {
  namespace util {
    namespace concurrent {

      class CountDownLatch {
        public constructor(arg0: number | java.lang.Integer)
        public await(): void
        public await(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
        public countDown(): void
        public getCount(): number
        public toString(): java.lang.String
      }

    }
  }
}
