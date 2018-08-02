declare namespace java {
    namespace lang {
        namespace management {
            interface GarbageCollectorMXBean extends java.lang.management.MemoryManagerMXBean {
                getCollectionCount(): long
                getCollectionTime(): long
            }
        }
    }
}