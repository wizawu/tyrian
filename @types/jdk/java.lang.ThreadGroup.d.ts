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
      public getName(): java.lang.String
      public getParent(): java.lang.ThreadGroup
      public getMaxPriority(): int
      public isDaemon(): boolean
      public isDestroyed(): boolean
      public setDaemon(arg0: boolean): void
      public setMaxPriority(arg0: int): void
      public parentOf(arg0: java.lang.ThreadGroup): boolean
      public checkAccess(): void
      public activeCount(): int
      public enumerate(arg0: java.lang.Thread[]): int
      public enumerate(arg0: java.lang.Thread[], arg1: boolean): int
      public activeGroupCount(): int
      public enumerate(arg0: java.lang.ThreadGroup[]): int
      public enumerate(arg0: java.lang.ThreadGroup[], arg1: boolean): int
      public stop(): void
      public interrupt(): void
      public suspend(): void
      public resume(): void
      public destroy(): void
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
