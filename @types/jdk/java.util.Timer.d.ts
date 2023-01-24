declare namespace java {
  namespace util {
    class Timer {
      public constructor()
      public constructor(arg0: boolean | java.lang.Boolean)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
      public schedule(arg0: java.util.TimerTask, arg1: number | java.lang.Long): void
      public schedule(arg0: java.util.TimerTask, arg1: java.util.Date): void
      public schedule(arg0: java.util.TimerTask, arg1: number | java.lang.Long, arg2: number | java.lang.Long): void
      public schedule(arg0: java.util.TimerTask, arg1: java.util.Date, arg2: number | java.lang.Long): void
      public scheduleAtFixedRate(
        arg0: java.util.TimerTask,
        arg1: number | java.lang.Long,
        arg2: number | java.lang.Long
      ): void
      public scheduleAtFixedRate(arg0: java.util.TimerTask, arg1: java.util.Date, arg2: number | java.lang.Long): void
      public cancel(): void
      public purge(): number
    }
  }
}
