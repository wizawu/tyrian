declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
                namespace internal {
class ExtendedMemoryMXBeanImpl extends com.ibm.java.lang.management.internal.MemoryMXBeanImpl implements com.ibm.lang.management.MemoryMXBean {
    public static getInstance(): com.ibm.lang.management.internal.ExtendedMemoryMXBeanImpl
    public getTotalPhysicalMemory(): long
    public getTotalPhysicalMemorySize(): long
    public getUsedPhysicalMemory(): long
    protected makeGCBean(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: int): java.lang.management.GarbageCollectorMXBean
    protected makeMemoryPoolBean(arg0: java.lang.String | string, arg1: java.lang.management.MemoryType, arg2: int): java.lang.management.MemoryPoolMXBean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}