declare namespace java {
  namespace lang {

    class Runtime {
      public static getRuntime(): java.lang.Runtime
      public exit(arg0: int): void
      public addShutdownHook(arg0: java.lang.Thread): void
      public removeShutdownHook(arg0: java.lang.Thread): boolean
      public halt(arg0: int): void
      public exec(arg0: java.lang.String): java.lang.Process
      public exec(arg0: java.lang.String, arg1: java.lang.String[]): java.lang.Process
      public exec(arg0: java.lang.String, arg1: java.lang.String[], arg2: java.io.File): java.lang.Process
      public exec(arg0: java.lang.String[]): java.lang.Process
      public exec(arg0: java.lang.String[], arg1: java.lang.String[]): java.lang.Process
      public exec(arg0: java.lang.String[], arg1: java.lang.String[], arg2: java.io.File): java.lang.Process
      public availableProcessors(): int
      public freeMemory(): long
      public totalMemory(): long
      public maxMemory(): long
      public gc(): void
      public runFinalization(): void
      public traceInstructions(arg0: boolean): void
      public traceMethodCalls(arg0: boolean): void
      public load(arg0: java.lang.String): void
      load0(arg0: java.lang.Class<unknown>, arg1: java.lang.String): void
      public loadLibrary(arg0: java.lang.String): void
      loadLibrary0(arg0: java.lang.Class<unknown>, arg1: java.lang.String): void
      public static version(): java.lang.Runtime$Version
    }

  }
}
