declare namespace sun {
    namespace management {
        class HotspotRuntime implements sun.management.HotspotRuntimeMBean {
            public getSafepointCount(): long
            public getTotalSafepointTime(): long
            public getSafepointSyncTime(): long
            public getInternalRuntimeCounters(): java.util.List<sun.management.counter.Counter>
            public static class: java.lang.Class<any>
        }
    }
}