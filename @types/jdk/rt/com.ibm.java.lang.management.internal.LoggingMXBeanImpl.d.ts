declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class LoggingMXBeanImpl extends javax.management.StandardMBean implements java.util.logging.LoggingMXBean , java.lang.management.PlatformLoggingMXBean {
                            public getObjectName(): javax.management.ObjectName
                            public static getInstance(): com.ibm.java.lang.management.internal.LoggingMXBeanImpl
                            public getLoggerLevel(arg0: java.lang.String | string): string
                            public getLoggerNames(): java.util.List<java.lang.String>
                            public getParentLoggerName(arg0: java.lang.String | string): string
                            public setLoggerLevel(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}