declare namespace sun {
    namespace util {
        namespace logging {
class LoggingSupport {
    public static isAvailable(): boolean
    public static getLoggerNames(): java.util.List<java.lang.String>
    public static getLoggerLevel(arg0: java.lang.String | string): string
    public static setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static getParentLoggerName(arg0: java.lang.String | string): string
    public static getLogger(arg0: java.lang.String | string): java.lang.Object
    public static getLevel(arg0: java.lang.Object): java.lang.Object
    public static setLevel(arg0: java.lang.Object, arg1: java.lang.Object): void
    public static isLoggable(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public static log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string): void
    public static log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: java.lang.Throwable): void
    public static log(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.String | string, ...arg3: java.lang.Object[]): void
    public static parseLevel(arg0: java.lang.String | string): java.lang.Object
    public static getLevelName(arg0: java.lang.Object): string
    public static getLevelValue(arg0: java.lang.Object): int
    public static getSimpleFormat(): string
    public static class: java.lang.Class<any>
}

        }
    }
}