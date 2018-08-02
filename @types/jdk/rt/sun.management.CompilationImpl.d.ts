declare namespace sun {
    namespace management {
        class CompilationImpl implements java.lang.management.CompilationMXBean {
            public getName(): string
            public isCompilationTimeMonitoringSupported(): boolean
            public getTotalCompilationTime(): long
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}