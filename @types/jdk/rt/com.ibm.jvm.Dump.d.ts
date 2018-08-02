declare namespace com {
    namespace ibm {
        namespace jvm {
class Dump {
    public static JavaDump(): void
    public static HeapDump(): void
    public static SystemDump(): void
    public static SnapDump(): void
    public static javaDumpToFile(arg0: java.lang.String | string): string
    public static javaDumpToFile(): string
    public static heapDumpToFile(arg0: java.lang.String | string): string
    public static heapDumpToFile(): string
    public static systemDumpToFile(arg0: java.lang.String | string): string
    public static systemDumpToFile(): string
    public static snapDumpToFile(arg0: java.lang.String | string): string
    public static snapDumpToFile(): string
    public static triggerDump(arg0: java.lang.String | string): string
    public static setDumpOptions(arg0: java.lang.String | string): void
    public static queryDumpOptions(): java.lang.String[]
    public static resetDumpOptions(): void
    public static class: java.lang.Class<any>
}

        }
    }
}