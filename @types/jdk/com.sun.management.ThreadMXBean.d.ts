declare namespace com {
  namespace sun {
    namespace management {
      interface ThreadMXBean extends java.lang.management.ThreadMXBean {
        getThreadCpuTime(arg0: number[] | java.lang.Long[]): number[]
        getThreadUserTime(arg0: number[] | java.lang.Long[]): number[]
        getCurrentThreadAllocatedBytes(): number
        getThreadAllocatedBytes(arg0: number | java.lang.Long): number
        getThreadAllocatedBytes(arg0: number[] | java.lang.Long[]): number[]
        isThreadAllocatedMemorySupported(): boolean
        isThreadAllocatedMemoryEnabled(): boolean
        setThreadAllocatedMemoryEnabled(arg0: boolean | java.lang.Boolean): void
      }
    }
  }
}
