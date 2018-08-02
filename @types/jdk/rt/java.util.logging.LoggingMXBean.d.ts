declare namespace java {
    namespace util {
        namespace logging {
interface LoggingMXBean {
    getLoggerLevel(arg0: java.lang.String | string): string
    getLoggerNames(): java.util.List<java.lang.String>
    getParentLoggerName(arg0: java.lang.String | string): string
    setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
}

        }
    }
}