declare namespace com {
    namespace sun {
        namespace management {
            interface ThreadMXBean extends java.lang.management.ThreadMXBean {
                getThreadCpuTime(arg0: long[]): long[]
                getThreadUserTime(arg0: long[]): long[]
                getThreadAllocatedBytes(arg0: long): long
                getThreadAllocatedBytes(arg0: long[]): long[]
                isThreadAllocatedMemorySupported(): boolean
                isThreadAllocatedMemoryEnabled(): boolean
                setThreadAllocatedMemoryEnabled(arg0: boolean): void
            }
        }
    }
}