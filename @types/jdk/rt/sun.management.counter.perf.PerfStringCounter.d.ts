declare namespace sun {
    namespace management {
        namespace counter {
            namespace perf {
                class PerfStringCounter extends sun.management.counter.perf.PerfByteArrayCounter implements sun.management.counter.StringCounter {
                    public isVector(): boolean
                    public getVectorLength(): int
                    public getValue(): java.lang.Object
                    public stringValue(): string
                    protected writeReplace(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}