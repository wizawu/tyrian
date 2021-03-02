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
      public static sleep(arg0: long): void
      public static sleep(arg0: long, arg1: int): void
      public static onSpinWait(): void
      protected clone(): java.lang.Object
      public constructor()
      public constructor(arg0: java.lang.Runnable)
      constructor(arg0: java.lang.Runnable, arg1: java.security.AccessControlContext)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable)
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String)
      public constructor(arg0: java.lang.Runnable, arg1: java.lang.String)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable, arg2: java.lang.String)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable, arg2: java.lang.String, arg3: long)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.Runnable, arg2: java.lang.String, arg3: long, arg4: boolean)
      public start(): void
      public run(): void
      public stop(): void
      public interrupt(): void
      public static interrupted(): boolean
      public isInterrupted(): boolean
      public isAlive(): boolean
      public suspend(): void
      public resume(): void
      public setPriority(arg0: int): void
      public getPriority(): int
      public setName(arg0: java.lang.String): void
      public getName(): java.lang.String
      public getThreadGroup(): java.lang.ThreadGroup
      public static activeCount(): int
      public static enumerate(arg0: java.lang.Thread[]): int
      public countStackFrames(): int
      public join(arg0: long): void
      public join(arg0: long, arg1: int): void
      public join(): void
      public static dumpStack(): void
      public setDaemon(arg0: boolean): void
      public isDaemon(): boolean
      public checkAccess(): void
      public toString(): java.lang.String
      public getContextClassLoader(): java.lang.ClassLoader
      public setContextClassLoader(arg0: java.lang.ClassLoader): void
      public static holdsLock(arg0: java.lang.Object): boolean
      public getStackTrace(): java.lang.StackTraceElement[]
      public static getAllStackTraces(): java.util.Map<java.lang.Thread,java.lang.StackTraceElement[]>
      public getId(): long
      public getState(): java.lang.Thread$State
      public static setDefaultUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler): void
      public static getDefaultUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
      public getUncaughtExceptionHandler(): java.lang.Thread$UncaughtExceptionHandler
      public setUncaughtExceptionHandler(arg0: java.lang.Thread$UncaughtExceptionHandler): void
      static processQueue(arg0: java.lang.ref.ReferenceQueue<java.lang.Class<unknown>>, arg1: java.util.concurrent.ConcurrentMap<java.lang.ref.WeakReference<java.lang.Class<unknown>>,unknown>): void
    }

  }
}
