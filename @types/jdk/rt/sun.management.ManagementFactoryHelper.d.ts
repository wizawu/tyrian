declare namespace sun {
    namespace management {
class ManagementFactoryHelper {
    public static getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean
    public static getMemoryMXBean(): java.lang.management.MemoryMXBean
    public static getThreadMXBean(): java.lang.management.ThreadMXBean
    public static getRuntimeMXBean(): java.lang.management.RuntimeMXBean
    public static getCompilationMXBean(): java.lang.management.CompilationMXBean
    public static getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean
    public static getMemoryPoolMXBeans(): java.util.List<java.lang.management.MemoryPoolMXBean>
    public static getMemoryManagerMXBeans(): java.util.List<java.lang.management.MemoryManagerMXBean>
    public static getGarbageCollectorMXBeans(): java.util.List<java.lang.management.GarbageCollectorMXBean>
    public static getPlatformLoggingMXBean(): java.lang.management.PlatformLoggingMXBean
    public static getBufferPoolMXBeans(): java.util.List<java.lang.management.BufferPoolMXBean>
    public static getDiagnosticMXBean(): com.sun.management.HotSpotDiagnosticMXBean
    public static getHotspotRuntimeMBean(): sun.management.HotspotRuntimeMBean
    public static getHotspotClassLoadingMBean(): sun.management.HotspotClassLoadingMBean
    public static getHotspotThreadMBean(): sun.management.HotspotThreadMBean
    public static getHotspotMemoryMBean(): sun.management.HotspotMemoryMBean
    public static getDiagnosticCommandMBean(): com.sun.management.DiagnosticCommandMBean
    public static getHotspotCompilationMBean(): sun.management.HotspotCompilationMBean
    public static getPlatformDynamicMBeans(): java.util.HashMap<javax.management.ObjectName, javax.management.DynamicMBean>
    public static isThreadSuspended(arg0: int): boolean
    public static isThreadRunningNative(arg0: int): boolean
    public static toThreadState(arg0: int): java.lang.Thread$State
    public static class: java.lang.Class<any>
}

    }
}