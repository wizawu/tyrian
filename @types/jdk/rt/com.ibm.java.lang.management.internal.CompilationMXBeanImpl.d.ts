declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class CompilationMXBeanImpl implements java.lang.management.CompilationMXBean {
                            public static getInstance(): com.ibm.java.lang.management.internal.CompilationMXBeanImpl
                            public getName(): string
                            public getTotalCompilationTime(): long
                            public isCompilationTimeMonitoringSupported(): boolean
                            public getObjectName(): javax.management.ObjectName
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}