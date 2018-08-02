declare namespace sun {
    namespace management {
class GcInfoCompositeData extends sun.management.LazyCompositeData {
    public constructor(arg0: com.sun.management.GcInfo | com.sun.management.GcInfo$$Lambda, arg1: sun.management.GcInfoBuilder, arg2: java.lang.Object[])
    public getGcInfo(): com.sun.management.GcInfo
    public static toCompositeData(arg0: com.sun.management.GcInfo | com.sun.management.GcInfo$$Lambda): javax.management.openmbean.CompositeData
    protected getCompositeData(): javax.management.openmbean.CompositeData
    public static getId(arg0: javax.management.openmbean.CompositeData): long
    public static getStartTime(arg0: javax.management.openmbean.CompositeData): long
    public static getEndTime(arg0: javax.management.openmbean.CompositeData): long
    public static getMemoryUsageBeforeGc(arg0: javax.management.openmbean.CompositeData): java.util.Map<java.lang.String, java.lang.management.MemoryUsage>
    public static cast(arg0: java.lang.Object): java.util.Map<java.lang.String, java.lang.management.MemoryUsage>
    public static getMemoryUsageAfterGc(arg0: javax.management.openmbean.CompositeData): java.util.Map<java.lang.String, java.lang.management.MemoryUsage>
    public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
    public static class: java.lang.Class<any>
}

    }
}