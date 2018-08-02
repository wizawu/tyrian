declare namespace sun {
    namespace management {
class HotspotClassLoading implements sun.management.HotspotClassLoadingMBean {
    public getLoadedClassSize(): long
    public getUnloadedClassSize(): long
    public getClassLoadingTime(): long
    public getMethodDataSize(): long
    public getInitializedClassCount(): long
    public getClassInitializationTime(): long
    public getClassVerificationTime(): long
    public getInternalClassLoadingCounters(): java.util.List<sun.management.counter.Counter>
    public static class: java.lang.Class<any>
}

    }
}