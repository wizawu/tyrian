declare namespace sun {
    namespace management {
class MonitorInfoCompositeData extends sun.management.LazyCompositeData {
    public getMonitorInfo(): java.lang.management.MonitorInfo
    public static toCompositeData(arg0: java.lang.management.MonitorInfo): javax.management.openmbean.CompositeData
    protected getCompositeData(): javax.management.openmbean.CompositeData
    public static getClassName(arg0: javax.management.openmbean.CompositeData): string
    public static getIdentityHashCode(arg0: javax.management.openmbean.CompositeData): int
    public static getLockedStackFrame(arg0: javax.management.openmbean.CompositeData): java.lang.StackTraceElement
    public static getLockedStackDepth(arg0: javax.management.openmbean.CompositeData): int
    public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
    public static class: java.lang.Class<any>
}

    }
}