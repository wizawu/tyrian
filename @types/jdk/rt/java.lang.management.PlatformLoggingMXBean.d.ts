declare namespace java {
    namespace lang {
        namespace management {
            interface PlatformLoggingMXBean extends java.lang.management.PlatformManagedObject {
                getLoggerNames(): java.util.List<java.lang.String>
                getLoggerLevel(arg0: java.lang.String | string): string
                setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                getParentLoggerName(arg0: java.lang.String | string): string
            }
        }
    }
}