declare namespace java {
    namespace lang {
        namespace management {
            interface MemoryManagerMXBean extends java.lang.management.PlatformManagedObject {
                getMemoryPoolNames(): java.lang.String[]
                getName(): string
                isValid(): boolean
            }
        }
    }
}