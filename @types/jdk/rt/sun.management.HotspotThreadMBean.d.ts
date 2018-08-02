declare namespace sun {
    namespace management {
interface HotspotThreadMBean {
    getInternalThreadCount(): int
    getInternalThreadCpuTimes(): java.util.Map<java.lang.String, java.lang.Long>
    getInternalThreadingCounters(): java.util.List<sun.management.counter.Counter>
}

    }
}