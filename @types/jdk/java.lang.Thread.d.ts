declare namespace java {
  namespace lang {

    class Thread implements java.lang.Runnable {
      threadLocals: java.lang.ThreadLocal$ThreadLocalMap
      inheritableThreadLocals: java.lang.ThreadLocal$ThreadLocalMap
      parkBlocker: java.lang.Object
      public static readonly MIN_PRIORITY: int
      public static readonly NORM_PRIORITY: int
      public static readonly MAX_PRIORITY: int
      threadLocalRandomSeed: long
      threadLocalRandomProbe: int
      threadLocalRandomSecondarySeed: int
      static blockedOn(arg0: sun.nio.ch.Interruptible): void
      public static currentThread(): java.lang.Thread
      public static yield(): void
      public static sleep(arg0: number | java.lang.Long): void
      public static sleep(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): void
      public static onSpinWait(): void
      protected clone(): java.lang.Object
      public constructor()
      public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$lambda)
      constructor(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.security.AccessControlContext)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$lambda)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String | string)
      public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$lambda, arg1: java.lang.String | string)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$lambda, arg2: java.lang.String | string)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$lambda, arg2: java.lang.String | string, arg3: number | java.lang.Long)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable | java.lang.Runnable$$lambda, arg2: java.lang.String | string, arg3: number | java.lang.Long, arg4: boolean | java.lang.Boolean)
      public start(): void
      public run(): void
      public stop(): void
      public interrupt(): void
      public static interrupted(): boolean
      public isInterrupted(): boolean
      public isAlive(): boolean
      public suspend(): void
      public resume(): void
      public setPriority(arg0: number | java.lang.Integer): void
      public getPriority(): number
      public setName(arg0: java.lang.String | string): void
      public getName(): java.lang.String
      public getThreadGroup(): java.lang.ThreadGroup
      public static activeCount(): number
      public static enumerate(arg0: java.lang.Thread[]): number
      public countStackFrames(): number
      public join(arg0: number | java.lang.Long): void
      public join(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): void
      public join(): void
      public static dumpStack(): void
      public setDaemon(arg0: boolean | java.lang.Boolean): void
      public isDaemon(): boolean
      public checkAccess(): void
      public toString(): java.lang.String
      public getContextClassLoader(): java.lang.ClassLoader
      public setContextClassLoader(arg0: java.lang.ClassLoader): void
      public static holdsLock(arg0: java.lang.Object | any): boolean
      public getStackTrace(): java.lang.StackTraceElement[]
      public static getAllStackTraces(): java.util.Map<java.lang.Thread,java.lang.StackTraceElement[]>
      public getId(): number
      public getState(): java.lang.Thread$State
      public static setDefaultUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$lambda): void
      public static getDefaultUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
      public getUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
      public setUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler | java.lang.Thread$UncaughtExceptionHandler$$lambda): void
      static processQueue(arg0: java.lang.ref.ReferenceQueue<java.lang.Class<unknown>>, arg1: java.util.concurrent.ConcurrentMap<java.lang.ref.WeakReference<java.lang.Class<unknown>>,unknown>): void
    }

  }
}
