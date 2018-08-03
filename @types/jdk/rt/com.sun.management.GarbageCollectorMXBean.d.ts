declare namespace com {
    namespace sun {
        namespace management {
            interface GarbageCollectorMXBean extends java.lang.management.GarbageCollectorMXBean {
                getLastGcInfo(): com.sun.management.GcInfo
            }
            interface GarbageCollectorMXBean$$Lambda extends java.lang.management.GarbageCollectorMXBean {
                (): com.sun.management.GcInfo
            }
        }
    }
}