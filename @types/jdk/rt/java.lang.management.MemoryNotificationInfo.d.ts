declare namespace java {
    namespace lang {
        namespace management {
            class MemoryNotificationInfo {
                public static readonly MEMORY_THRESHOLD_EXCEEDED: string
                public static readonly MEMORY_COLLECTION_THRESHOLD_EXCEEDED: string
                public constructor(arg0: java.lang.String | string, arg1: java.lang.management.MemoryUsage, arg2: long)
                public getCount(): long
                public getPoolName(): string
                public getUsage(): java.lang.management.MemoryUsage
                public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryNotificationInfo
                public static class: java.lang.Class<any>
            }
        }
    }
}