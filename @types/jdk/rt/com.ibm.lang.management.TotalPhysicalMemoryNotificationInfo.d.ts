declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                class TotalPhysicalMemoryNotificationInfo {
                    public static readonly TOTAL_PHYSICAL_MEMORY_CHANGE: string
                    public constructor(arg0: long)
                    public getNewTotalPhysicalMemory(): long
                    public static from(arg0: javax.management.openmbean.CompositeData): com.ibm.lang.management.TotalPhysicalMemoryNotificationInfo
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}