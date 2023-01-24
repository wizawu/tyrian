declare namespace java {
  namespace util {
    namespace concurrent {
      class Phaser {
        static readonly SPINS_PER_ARRIVAL: int
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: java.util.concurrent.Phaser)
        public constructor(arg0: java.util.concurrent.Phaser, arg1: number | java.lang.Integer)
        public register(): number
        public bulkRegister(arg0: number | java.lang.Integer): number
        public arrive(): number
        public arriveAndDeregister(): number
        public arriveAndAwaitAdvance(): number
        public awaitAdvance(arg0: number | java.lang.Integer): number
        public awaitAdvanceInterruptibly(arg0: number | java.lang.Integer): number
        public awaitAdvanceInterruptibly(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Long,
          arg2: java.util.concurrent.TimeUnit
        ): number
        public forceTermination(): void
        public getPhase(): number
        public getRegisteredParties(): number
        public getArrivedParties(): number
        public getUnarrivedParties(): number
        public getParent(): java.util.concurrent.Phaser
        public getRoot(): java.util.concurrent.Phaser
        public isTerminated(): boolean
        protected onAdvance(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        public toString(): java.lang.String
      }
    }
  }
}
