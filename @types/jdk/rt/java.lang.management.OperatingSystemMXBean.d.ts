declare namespace java {
    namespace lang {
        namespace management {
interface OperatingSystemMXBean extends java.lang.management.PlatformManagedObject {
    getArch(): string
    getAvailableProcessors(): int
    getName(): string
    getVersion(): string
    getSystemLoadAverage(): double
}

        }
    }
}