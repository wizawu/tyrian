declare namespace sun {
    namespace rmi {
        namespace runtime {
            class Log$LogStreamLog extends sun.rmi.runtime.Log {
                public isLoggable(arg0: java.util.logging.Level): boolean
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                public getPrintStream(): java.io.PrintStream
                public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}