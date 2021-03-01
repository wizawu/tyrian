declare namespace java {
  namespace lang {

    class ThreadGroup implements java.lang.Thread$UncaughtExceptionHandler {

      name: java.lang.String
      maxPriority: int
      destroyed: boolean
      daemon: boolean
      nUnstartedThreads: int
      nthreads: int
      threads: java.lang.Thread[]
      ngroups: int
      groups: java.lang.ThreadGroup[]
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.ThreadGroup, arg1: java.lang.String)
      public readonly getName(): java.lang.String
      public readonly getParent(): java.lang.ThreadGroup
      public readonly getMaxPriority(): int
      public readonly isDaemon(): boolean
      public isDestroyed(): boolean
      public readonly setDaemon(arg0: boolean): void
      public readonly setMaxPriority(arg0: int): void
      public readonly parentOf(arg0: java.lang.ThreadGroup): boolean
      public readonly checkAccess(): void
      public activeCount(): int
      public enumerate(arg0: java.lang.Thread[]): int
      public enumerate(arg0: java.lang.Thread[], arg1: boolean): int
      public activeGroupCount(): int
      public enumerate(arg0: java.lang.ThreadGroup[]): int
      public enumerate(arg0: java.lang.ThreadGroup[], arg1: boolean): int
      public readonly stop(): void
      public readonly interrupt(): void
      public readonly suspend(): void
      public readonly resume(): void
      public readonly destroy(): void
      addUnstarted(): void
      add(arg0: java.lang.Thread): void
      threadStartFailed(arg0: java.lang.Thread): void
      threadTerminated(arg0: java.lang.Thread): void
      public list(): void
      list(arg0: java.io.PrintStream, arg1: int): void
      public uncaughtException(arg0: java.lang.Thread, arg1: java.lang.Throwable): void
      public allowThreadSuspension(arg0: boolean): boolean
      public toString(): java.lang.String
    }

  }
}
