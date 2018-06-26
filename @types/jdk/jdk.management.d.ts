declare namespace com {
    namespace sun {
        namespace management {
            interface DiagnosticCommandMBean extends javax.management.DynamicMBean {
            }
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
            interface GarbageCollectorMXBean extends java.lang.management.GarbageCollectorMXBean {
                getLastGcInfo(): com.sun.management.GcInfo
            }
            class GcInfo implements javax.management.openmbean.CompositeData , javax.management.openmbean.CompositeDataView {
                public getId(): long
                public getStartTime(): long
                public getEndTime(): long
                public getDuration(): long
                public getMemoryUsageBeforeGc(): java.util.Map<java.lang.String, java.lang.management.MemoryUsage>
                public getMemoryUsageAfterGc(): java.util.Map<java.lang.String, java.lang.management.MemoryUsage>
                public static from(arg0: javax.management.openmbean.CompositeData): com.sun.management.GcInfo
                public containsKey(arg0: java.lang.String | string): boolean
                public containsValue(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.Object): boolean
                public get(arg0: java.lang.String | string): java.lang.Object
                public getAll(arg0: java.lang.String[]): java.lang.Object[]
                public getCompositeType(): javax.management.openmbean.CompositeType
                public hashCode(): int
                public toString(): string
                public values(): java.util.Collection<any>
                public toCompositeData(arg0: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData
                public static class: java.lang.Class<any>
            }
            class GcInfo$$Lambda implements javax.management.openmbean.CompositeData , javax.management.openmbean.CompositeDataView {
                public (): long
            }
            interface HotSpotDiagnosticMXBean extends java.lang.management.PlatformManagedObject {
                dumpHeap(arg0: java.lang.String | string, arg1: boolean): void
                getDiagnosticOptions(): java.util.List<com.sun.management.VMOption>
                getVMOption(arg0: java.lang.String | string): com.sun.management.VMOption
                setVMOption(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            }
            interface OperatingSystemMXBean extends java.lang.management.OperatingSystemMXBean {
                getCommittedVirtualMemorySize(): long
                getTotalSwapSpaceSize(): long
                getFreeSwapSpaceSize(): long
                getProcessCpuTime(): long
                getFreePhysicalMemorySize(): long
                getTotalPhysicalMemorySize(): long
                getSystemCpuLoad(): double
                getProcessCpuLoad(): double
            }
            interface ThreadMXBean extends java.lang.management.ThreadMXBean {
                getThreadCpuTime(arg0: long[]): long[]
                getThreadUserTime(arg0: long[]): long[]
                getThreadAllocatedBytes(arg0: long): long
                getThreadAllocatedBytes(arg0: long[]): long[]
                isThreadAllocatedMemorySupported(): boolean
                isThreadAllocatedMemoryEnabled(): boolean
                setThreadAllocatedMemoryEnabled(arg0: boolean): void
            }
            interface UnixOperatingSystemMXBean extends com.sun.management.OperatingSystemMXBean {
                getOpenFileDescriptorCount(): long
                getMaxFileDescriptorCount(): long
            }
            class VMOption {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: com.sun.management.VMOption$Origin)
                public getName(): string
                public getValue(): string
                public getOrigin(): com.sun.management.VMOption$Origin
                public isWriteable(): boolean
                public toString(): string
                public static from(arg0: javax.management.openmbean.CompositeData): com.sun.management.VMOption
                public static class: java.lang.Class<any>
            }
        }
    }
}
