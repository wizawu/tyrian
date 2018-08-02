declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                interface MemoryMXBean extends java.lang.management.MemoryMXBean {
                    getMaxHeapSizeLimit(): long
                    getMaxHeapSize(): long
                    getMinHeapSize(): long
                    setMaxHeapSize(arg0: long): void
                    isSetMaxHeapSizeSupported(): boolean
                    getSharedClassCacheSize(): long
                    getSharedClassCacheSoftmxBytes(): long
                    getSharedClassCacheMinAotBytes(): long
                    getSharedClassCacheMaxAotBytes(): long
                    getSharedClassCacheMinJitDataBytes(): long
                    getSharedClassCacheMaxJitDataBytes(): long
                    setSharedClassCacheSoftmxBytes(arg0: long): boolean
                    setSharedClassCacheMinAotBytes(arg0: long): boolean
                    setSharedClassCacheMaxAotBytes(arg0: long): boolean
                    setSharedClassCacheMinJitDataBytes(arg0: long): boolean
                    setSharedClassCacheMaxJitDataBytes(arg0: long): boolean
                    getSharedClassCacheSoftmxUnstoredBytes(): long
                    getSharedClassCacheMaxAotUnstoredBytes(): long
                    getSharedClassCacheMaxJitDataUnstoredBytes(): long
                    getSharedClassCacheFreeSpace(): long
                    getGCMode(): string
                    getGCMasterThreadCpuUsed(): long
                    getGCSlaveThreadsCpuUsed(): long
                    getMaximumGCThreads(): int
                    getCurrentGCThreads(): int
                }
            }
        }
    }
}