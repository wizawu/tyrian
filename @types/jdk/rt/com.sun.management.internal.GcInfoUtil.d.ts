declare namespace com {
    namespace sun {
        namespace management {
            namespace internal {
                class GcInfoUtil {
                    public static getCompositeType(): javax.management.openmbean.CompositeType
                    public static registerConverters(): void
                    public static toCompositeData(arg0: com.sun.management.GcInfo | com.sun.management.GcInfo$$Lambda): javax.management.openmbean.CompositeData
                    public static newGcInfoInstance(arg0: long, arg1: long, arg2: long, arg3: java.util.Map<java.lang.String, java.lang.management.MemoryUsage>, arg4: java.util.Map<java.lang.String, java.lang.management.MemoryUsage>): com.sun.management.GcInfo
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}