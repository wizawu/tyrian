declare namespace com {
    namespace ibm {
        namespace java {
            namespace lang {
                namespace management {
                    namespace internal {
                        class BufferPoolMXBeanImpl implements java.lang.management.BufferPoolMXBean {
                            public static getBufferPoolMXBeans(): java.util.List<java.lang.management.BufferPoolMXBean>
                            public getCount(): long
                            public getMemoryUsed(): long
                            public getName(): string
                            public getObjectName(): javax.management.ObjectName
                            public getTotalCapacity(): long
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}