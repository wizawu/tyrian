declare namespace java {
    namespace lang {
        class System {
            public static readonly in: java.io.InputStream
            public static readonly out: java.io.PrintStream
            public static readonly err: java.io.PrintStream
            public static setIn(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
            public static setOut(arg0: java.io.PrintStream): void
            public static setErr(arg0: java.io.PrintStream): void
            public static arraycopy(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object, arg3: int, arg4: int): void
            public static currentTimeMillis(): long
            public static exit(arg0: int): void
            public static gc(): void
            public static getenv(arg0: java.lang.String | string): string
            public static getProperties(): java.util.Properties
            public static getProperty(arg0: java.lang.String | string): string
            public static getProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public static setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public static getSecurityManager(): java.lang.SecurityManager
            public static identityHashCode(arg0: java.lang.Object): int
            public static load(arg0: java.lang.String | string): void
            public static loadLibrary(arg0: java.lang.String | string): void
            public static runFinalization(): void
            public static runFinalizersOnExit(arg0: boolean): void
            public static setProperties(arg0: java.util.Properties): void
            public static setSecurityManager(arg0: java.lang.SecurityManager): void
            public static mapLibraryName(arg0: java.lang.String | string): string
            public static inheritedChannel(): java.nio.channels.Channel
            public static nanoTime(): long
            public static clearProperty(arg0: java.lang.String | string): string
            public static getenv(): java.util.Map<java.lang.String, java.lang.String>
            public static console(): java.io.Console
            public static lineSeparator(): string
            public static class: java.lang.Class<any>
        }
    }
}