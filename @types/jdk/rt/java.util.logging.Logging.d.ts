declare namespace java {
    namespace util {
        namespace logging {
class Logging implements java.util.logging.LoggingMXBean {
    public getLoggerNames(): java.util.List<java.lang.String>
    public getLoggerLevel(arg0: java.lang.String | string): string
    public setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getParentLoggerName(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

        }
    }
}