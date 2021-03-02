declare namespace java {
  namespace lang {

    class System {
      public static readonly in: java.io.InputStream
      public static readonly out: java.io.PrintStream
      public static readonly err: java.io.PrintStream
      static bootLayer: java.lang.ModuleLayer
      public static setIn(arg0: java.io.InputStream): void
      public static setOut(arg0: java.io.PrintStream): void
      public static setErr(arg0: java.io.PrintStream): void
      public static console(): java.io.Console
      public static inheritedChannel(): java.nio.channels.Channel
      public static setSecurityManager(arg0: java.lang.SecurityManager): void
      public static getSecurityManager(): java.lang.SecurityManager
      public static currentTimeMillis(): number
      public static nanoTime(): number
      public static arraycopy(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: java.lang.Object | any, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
      public static identityHashCode(arg0: java.lang.Object | any): number
      public static getProperties(): java.util.Properties
      public static lineSeparator(): java.lang.String
      public static setProperties(arg0: java.util.Properties): void
      public static getProperty(arg0: java.lang.String | string): java.lang.String
      public static getProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      public static setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      public static clearProperty(arg0: java.lang.String | string): java.lang.String
      public static getenv(arg0: java.lang.String | string): java.lang.String
      public static getenv(): java.util.Map<java.lang.String,java.lang.String>
      public static getLogger(arg0: java.lang.String | string): java.lang.System$Logger
      public static getLogger(arg0: java.lang.String | string, arg1: java.util.ResourceBundle): java.lang.System$Logger
      public static exit(arg0: number | java.lang.Integer): void
      public static gc(): void
      public static runFinalization(): void
      public static load(arg0: java.lang.String | string): void
      public static loadLibrary(arg0: java.lang.String | string): void
      public static mapLibraryName(arg0: java.lang.String | string): java.lang.String
    }

  }
}
