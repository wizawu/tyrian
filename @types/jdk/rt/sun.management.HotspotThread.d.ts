declare namespace sun {
    namespace management {
class HotspotThread implements sun.management.HotspotThreadMBean {
    public getInternalThreadCount(): int
    public getInternalThreadCpuTimes(): java.util.Map<java.lang.String, java.lang.Long>
    public getInternalThreadTimes0(arg0: java.lang.String[], arg1: long[]): int
    public getInternalThreadingCounters(): java.util.List<sun.management.counter.Counter>
    public static class: java.lang.Class<any>
}

    }
}