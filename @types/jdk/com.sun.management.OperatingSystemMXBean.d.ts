declare namespace com {
  namespace sun {
    namespace management {

      interface OperatingSystemMXBean extends java.lang.management.OperatingSystemMXBean {
        getCommittedVirtualMemorySize(): number
        getTotalSwapSpaceSize(): number
        getFreeSwapSpaceSize(): number
        getProcessCpuTime(): number
        getFreePhysicalMemorySize(): number
        getTotalPhysicalMemorySize(): number
        getSystemCpuLoad(): number
        getProcessCpuLoad(): number
      }

    }
  }
}
