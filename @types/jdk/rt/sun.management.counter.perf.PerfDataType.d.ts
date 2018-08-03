declare namespace sun {
    namespace management {
        namespace counter {
            namespace perf {
                class PerfDataType {
                    public static readonly BOOLEAN: sun.management.counter.perf.PerfDataType
                    public static readonly CHAR: sun.management.counter.perf.PerfDataType
                    public static readonly FLOAT: sun.management.counter.perf.PerfDataType
                    public static readonly DOUBLE: sun.management.counter.perf.PerfDataType
                    public static readonly BYTE: sun.management.counter.perf.PerfDataType
                    public static readonly SHORT: sun.management.counter.perf.PerfDataType
                    public static readonly INT: sun.management.counter.perf.PerfDataType
                    public static readonly LONG: sun.management.counter.perf.PerfDataType
                    public static readonly ILLEGAL: sun.management.counter.perf.PerfDataType
                    public toString(): string
                    public byteValue(): byte
                    public size(): int
                    public static toPerfDataType(arg0: byte): sun.management.counter.perf.PerfDataType
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}