declare namespace java {
    namespace util {
        namespace logging {
            class LoggingProxyImpl implements sun.util.logging.LoggingProxy {
                public getLogger(arg0: java.lang.String | string): java.lang.Object
                public getLevel(arg0: java.lang.Object): java.lang.Object
                public setLevel(arg0: java.lang.Object, arg1: java.lang.Object): void
                public isLoggable(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string): void
                public log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: java.lang.Throwable): void
                public log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string, ...arg3: java.lang.Object[]): void
                public getLoggerNames(): java.util.List<java.lang.String>
                public getLoggerLevel(arg0: java.lang.String | string): string
                public setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public getParentLoggerName(arg0: java.lang.String | string): string
                public parseLevel(arg0: java.lang.String | string): java.lang.Object
                public getLevelName(arg0: java.lang.Object): string
                public getLevelValue(arg0: java.lang.Object): int
                public getProperty(arg0: java.lang.String | string): string
                public static class: java.lang.Class<any>
            }
        }
    }
}