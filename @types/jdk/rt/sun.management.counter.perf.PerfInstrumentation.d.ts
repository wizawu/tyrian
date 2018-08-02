declare namespace sun {
    namespace management {
        namespace counter {
            namespace perf {
                class PerfInstrumentation {
                    public constructor(arg0: java.nio.ByteBuffer)
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getModificationTimeStamp(): long
                    public getAllCounters(): java.util.List<sun.management.counter.Counter>
                    public findByPattern(arg0: java.lang.String | string): java.util.List<sun.management.counter.Counter>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}