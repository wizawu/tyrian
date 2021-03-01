declare namespace java {
  namespace util {

    abstract class TimerTask implements java.lang.Runnable {

      readonly lock: java.lang.Object
      state: int
      static readonly VIRGIN: int
      static readonly SCHEDULED: int
      static readonly EXECUTED: int
      static readonly CANCELLED: int
      nextExecutionTime: long
      period: long
      protected constructor()
      public abstract run(): void
      public cancel(): boolean
      public scheduledExecutionTime(): long
    }

  }
}
