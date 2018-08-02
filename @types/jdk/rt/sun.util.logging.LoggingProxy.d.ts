declare namespace sun {
    namespace util {
        namespace logging {
interface LoggingProxy {
    getLogger(arg0: java.lang.String | string): java.lang.Object
    getLevel(arg0: java.lang.Object): java.lang.Object
    setLevel(arg0: java.lang.Object, arg1: java.lang.Object): void
    isLoggable(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string): void
    log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: java.lang.Throwable): void
    log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string, ...arg3: java.lang.Object[]): void
    getLoggerNames(): java.util.List<java.lang.String>
    getLoggerLevel(arg0: java.lang.String | string): string
    setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    getParentLoggerName(arg0: java.lang.String | string): string
    parseLevel(arg0: java.lang.String | string): java.lang.Object
    getLevelName(arg0: java.lang.Object): string
    getLevelValue(arg0: java.lang.Object): int
    getProperty(arg0: java.lang.String | string): string
}

        }
    }
}