declare namespace java {
    namespace lang {
        namespace management {
            interface ClassLoadingMXBean extends java.lang.management.PlatformManagedObject {
                getTotalLoadedClassCount(): long
                getLoadedClassCount(): int
                getUnloadedClassCount(): long
                isVerbose(): boolean
                setVerbose(arg0: boolean): void
            }
        }
    }
}