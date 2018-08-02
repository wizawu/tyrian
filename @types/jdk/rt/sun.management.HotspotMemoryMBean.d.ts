declare namespace sun {
    namespace management {
        interface HotspotMemoryMBean {
            getInternalMemoryCounters(): java.util.List<sun.management.counter.Counter>
        }
        interface HotspotMemoryMBean$$Lambda {
            (): java.util.List<sun.management.counter.Counter>
        }
    }
}