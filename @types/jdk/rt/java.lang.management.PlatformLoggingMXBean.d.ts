declare namespace java {
    namespace lang {
        namespace management {
interface PlatformLoggingMXBean extends java.lang.management.PlatformManagedObject {
    getLoggerLevel(arg0: java.lang.String | string): string
    getLoggerNames(): java.util.List<java.lang.String>
    getParentLoggerName(arg0: java.lang.String | string): string
    setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
}

        }
    }
}