declare namespace sun {
    namespace management {
class MemoryNotifInfoCompositeData extends sun.management.LazyCompositeData {
    public getMemoryNotifInfo(): java.lang.management.MemoryNotificationInfo
    public static toCompositeData(arg0: java.lang.management.MemoryNotificationInfo): javax.management.openmbean.CompositeData
    protected getCompositeData(): javax.management.openmbean.CompositeData
    public static getPoolName(arg0: javax.management.openmbean.CompositeData): string
    public static getUsage(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryUsage
    public static getCount(arg0: javax.management.openmbean.CompositeData): long
    public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
    public static class: java.lang.Class<any>
}

    }
}