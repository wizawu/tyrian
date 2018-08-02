declare namespace sun {
    namespace management {
interface HotspotRuntimeMBean {
    getSafepointCount(): long
    getTotalSafepointTime(): long
    getSafepointSyncTime(): long
    getInternalRuntimeCounters(): java.util.List<sun.management.counter.Counter>
}

    }
}