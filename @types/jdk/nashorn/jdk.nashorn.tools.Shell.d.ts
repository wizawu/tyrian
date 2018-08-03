declare namespace jdk {
    namespace nashorn {
        namespace tools {
            class Shell {
                public static SUCCESS: int
                public static COMMANDLINE_ERROR: int
                public static COMPILATION_ERROR: int
                public static RUNTIME_ERROR: int
                public static IO_ERROR: int
                public static INTERNAL_ERROR: int
                protected constructor()
                public static main(arg0: java.lang.String[]): void
                public static main(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.io.OutputStream, arg3: java.lang.String[]): int
                protected run(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.io.OutputStream, arg3: java.lang.String[]): int
                protected apply(arg0: jdk.nashorn.internal.runtime.ScriptFunction, arg1: java.lang.Object): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}