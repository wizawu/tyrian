declare namespace sun {
    namespace management {
class OperatingSystemImpl extends sun.management.BaseOperatingSystemImpl implements com.sun.management.UnixOperatingSystemMXBean {
    public getCommittedVirtualMemorySize(): long
    public getTotalSwapSpaceSize(): long
    public getFreeSwapSpaceSize(): long
    public getProcessCpuTime(): long
    public getFreePhysicalMemorySize(): long
    public getTotalPhysicalMemorySize(): long
    public getOpenFileDescriptorCount(): long
    public getMaxFileDescriptorCount(): long
    public getSystemCpuLoad(): double
    public getProcessCpuLoad(): double
    public static class: java.lang.Class<any>
}

    }
}