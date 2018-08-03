declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                interface MemoryPoolMXBean extends java.lang.management.MemoryPoolMXBean {
                    getPreCollectionUsage(): java.lang.management.MemoryUsage
                }
                interface MemoryPoolMXBean$$Lambda extends java.lang.management.MemoryPoolMXBean {
                    (): java.lang.management.MemoryUsage
                }
            }
        }
    }
}