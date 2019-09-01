declare namespace java {
    namespace lang {
        namespace management {
            interface MemoryManagerMXBean extends java.lang.management.PlatformManagedObject {
                getName(): string
                isValid(): boolean
                getMemoryPoolNames(): java.lang.String[]
            }
        }
    }
}