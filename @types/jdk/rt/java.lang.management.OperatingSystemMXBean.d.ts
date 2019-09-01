declare namespace java {
    namespace lang {
        namespace management {
            interface OperatingSystemMXBean extends java.lang.management.PlatformManagedObject {
                getName(): string
                getArch(): string
                getVersion(): string
                getAvailableProcessors(): int
                getSystemLoadAverage(): double
            }
        }
    }
}