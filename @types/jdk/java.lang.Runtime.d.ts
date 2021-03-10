declare namespace java {
  namespace lang {

    class Runtime {
      public static getRuntime(): java.lang.Runtime
      public exit(arg0: number | java.lang.Integer): void
      public addShutdownHook(arg0: java.lang.Thread): void
      public removeShutdownHook(arg0: java.lang.Thread): boolean
      public halt(arg0: number | java.lang.Integer): void
      public exec(arg0: java.lang.String | string): java.lang.Process
      public exec(arg0: java.lang.String | string, arg1: java.lang.String[] | string[]): java.lang.Process
      public exec(arg0: java.lang.String | string, arg1: java.lang.String[] | string[], arg2: java.io.File): java.lang.Process
      public exec(arg0: java.lang.String[] | string[]): java.lang.Process
      public exec(arg0: java.lang.String[] | string[], arg1: java.lang.String[] | string[]): java.lang.Process
      public exec(arg0: java.lang.String[] | string[], arg1: java.lang.String[] | string[], arg2: java.io.File): java.lang.Process
      public availableProcessors(): number
      public freeMemory(): number
      public totalMemory(): number
      public maxMemory(): number
      public gc(): void
      public runFinalization(): void
      public traceInstructions(arg0: boolean | java.lang.Boolean): void
      public traceMethodCalls(arg0: boolean | java.lang.Boolean): void
      public load(arg0: java.lang.String | string): void
      load0(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string): void
      public loadLibrary(arg0: java.lang.String | string): void
      loadLibrary0(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string): void
      public static version(): java.lang.Runtime$Version
    }

  }
}
