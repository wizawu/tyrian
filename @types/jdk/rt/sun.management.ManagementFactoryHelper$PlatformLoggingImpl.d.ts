declare namespace sun {
    namespace management {
        class ManagementFactoryHelper$PlatformLoggingImpl implements sun.management.ManagementFactoryHelper$LoggingMXBean {
            public getObjectName(): javax.management.ObjectName
            public getLoggerNames(): java.util.List<java.lang.String>
            public getLoggerLevel(arg0: java.lang.String | string): string
            public setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public getParentLoggerName(arg0: java.lang.String | string): string
            public static class: java.lang.Class<any>
        }
    }
}