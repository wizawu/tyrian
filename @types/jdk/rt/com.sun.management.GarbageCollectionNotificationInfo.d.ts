declare namespace com {
    namespace sun {
        namespace management {
class GarbageCollectionNotificationInfo implements javax.management.openmbean.CompositeDataView {
    public static GARBAGE_COLLECTION_NOTIFICATION: string
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.management.GcInfo | com.sun.management.GcInfo$$Lambda)
    public getGcName(): string
    public getGcAction(): string
    public getGcCause(): string
    public getGcInfo(): com.sun.management.GcInfo
    public static from(arg0: javax.management.openmbean.CompositeData): com.sun.management.GarbageCollectionNotificationInfo
    public toCompositeData(arg0: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData
    public static class: java.lang.Class<any>
}

class GarbageCollectionNotificationInfo$$Lambda implements javax.management.openmbean.CompositeDataView {
    public static GARBAGE_COLLECTION_NOTIFICATION: string
}

        }
    }
}