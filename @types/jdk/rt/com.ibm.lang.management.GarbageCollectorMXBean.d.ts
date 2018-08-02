declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
interface GarbageCollectorMXBean extends com.sun.management.GarbageCollectorMXBean {
    getLastCollectionStartTime(): long
    getLastCollectionEndTime(): long
    getMemoryUsed(): long
    getTotalMemoryFreed(): long
    getTotalCompacts(): long
}

            }
        }
    }
}