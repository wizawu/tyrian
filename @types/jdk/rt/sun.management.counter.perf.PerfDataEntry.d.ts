declare namespace sun {
    namespace management {
        namespace counter {
            namespace perf {
class PerfDataEntry {
    public size(): int
    public name(): string
    public type(): sun.management.counter.perf.PerfDataType
    public units(): sun.management.counter.Units
    public flags(): int
    public vectorLength(): int
    public variability(): sun.management.counter.Variability
    public byteData(): java.nio.ByteBuffer
    public longData(): java.nio.LongBuffer
    public static class: java.lang.Class<any>
}

            }
        }
    }
}