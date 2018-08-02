declare namespace sun {
    namespace management {
        interface HotspotClassLoadingMBean {
            getLoadedClassSize(): long
            getUnloadedClassSize(): long
            getClassLoadingTime(): long
            getMethodDataSize(): long
            getInitializedClassCount(): long
            getClassInitializationTime(): long
            getClassVerificationTime(): long
            getInternalClassLoadingCounters(): java.util.List<sun.management.counter.Counter>
        }
    }
}