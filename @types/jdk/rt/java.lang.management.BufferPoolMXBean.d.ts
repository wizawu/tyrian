declare namespace java {
    namespace lang {
        namespace management {
interface BufferPoolMXBean extends java.lang.management.PlatformManagedObject {
    getName(): string
    getCount(): long
    getTotalCapacity(): long
    getMemoryUsed(): long
}

        }
    }
}