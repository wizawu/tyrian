declare namespace sun {
    namespace management {
class LockInfoCompositeData extends sun.management.LazyCompositeData {
    public getLockInfo(): java.lang.management.LockInfo
    public static toCompositeData(arg0: java.lang.management.LockInfo): javax.management.openmbean.CompositeData
    protected getCompositeData(): javax.management.openmbean.CompositeData
    public static toLockInfo(arg0: javax.management.openmbean.CompositeData): java.lang.management.LockInfo
    public static class: java.lang.Class<any>
}

    }
}