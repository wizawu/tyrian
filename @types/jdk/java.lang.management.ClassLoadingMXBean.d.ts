declare namespace java {
  namespace lang {
    namespace management {

      interface ClassLoadingMXBean extends java.lang.management.PlatformManagedObject {
        getTotalLoadedClassCount(): number
        getLoadedClassCount(): number
        getUnloadedClassCount(): number
        isVerbose(): boolean
        setVerbose(arg0: boolean | java.lang.Boolean): void
      }

    }
  }
}
