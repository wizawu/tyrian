declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
interface UnixOperatingSystemMXBean extends com.sun.management.UnixOperatingSystemMXBean , com.ibm.lang.management.OperatingSystemMXBean {
    getMaxFileDescriptorCount(): long
    getOpenFileDescriptorCount(): long
}

            }
        }
    }
}