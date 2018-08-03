declare namespace sun {
    namespace management {
        class GarbageCollectionNotifInfoCompositeData extends sun.management.LazyCompositeData {
            public constructor(arg0: com.sun.management.GarbageCollectionNotificationInfo)
            public getGarbageCollectionNotifInfo(): com.sun.management.GarbageCollectionNotificationInfo
            public static toCompositeData(arg0: com.sun.management.GarbageCollectionNotificationInfo): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static getGcName(arg0: javax.management.openmbean.CompositeData): string
            public static getGcAction(arg0: javax.management.openmbean.CompositeData): string
            public static getGcCause(arg0: javax.management.openmbean.CompositeData): string
            public static getGcInfo(arg0: javax.management.openmbean.CompositeData): com.sun.management.GcInfo
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
    }
}