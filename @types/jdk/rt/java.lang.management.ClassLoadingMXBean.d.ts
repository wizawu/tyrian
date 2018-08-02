declare namespace java {
    namespace lang {
        namespace management {
            interface ClassLoadingMXBean extends java.lang.management.PlatformManagedObject {
                getLoadedClassCount(): int
                getTotalLoadedClassCount(): long
                getUnloadedClassCount(): long
                isVerbose(): boolean
                setVerbose(arg0: boolean): void
            }
        }
    }
}