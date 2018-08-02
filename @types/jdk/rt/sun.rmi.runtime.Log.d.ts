declare namespace sun {
    namespace rmi {
        namespace runtime {
            abstract class Log {
                public static BRIEF: java.util.logging.Level
                public static VERBOSE: java.util.logging.Level
                public constructor()
                public isLoggable(arg0: java.util.logging.Level): boolean
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getPrintStream(): java.io.PrintStream
                public static getLog(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): sun.rmi.runtime.Log
                public static getLog(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): sun.rmi.runtime.Log
                public static class: java.lang.Class<any>
            }
        }
    }
}