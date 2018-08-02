declare namespace sun {
    namespace management {
        class BaseOperatingSystemImpl implements java.lang.management.OperatingSystemMXBean {
            protected constructor(arg0: sun.management.VMManagement)
            public getName(): string
            public getArch(): string
            public getVersion(): string
            public getAvailableProcessors(): int
            public getSystemLoadAverage(): double
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}