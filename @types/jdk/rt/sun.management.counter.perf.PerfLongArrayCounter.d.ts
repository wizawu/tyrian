declare namespace sun {
    namespace management {
        namespace counter {
            namespace perf {
                class PerfLongArrayCounter extends sun.management.counter.AbstractCounter implements sun.management.counter.LongArrayCounter {
                    public getValue(): java.lang.Object
                    public longArrayValue(): long[]
                    public longAt(arg0: int): long
                    protected writeReplace(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}