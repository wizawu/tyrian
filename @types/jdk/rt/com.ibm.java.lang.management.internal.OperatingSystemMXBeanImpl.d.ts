declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class OperatingSystemMXBeanImpl extends javax.management.NotificationBroadcasterSupport implements java.lang.management.OperatingSystemMXBean {
                            public static getInstance(): com.ibm.java.lang.management.internal.OperatingSystemMXBeanImpl
                            protected constructor()
                            public getArch(): string
                            public getAvailableProcessors(): int
                            public getName(): string
                            public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                            public getObjectName(): javax.management.ObjectName
                            public getSystemLoadAverage(): double
                            public getVersion(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}