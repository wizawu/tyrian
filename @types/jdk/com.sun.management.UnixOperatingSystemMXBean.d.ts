declare namespace com {
  namespace sun {
    namespace management {

      interface UnixOperatingSystemMXBean extends com.sun.management.OperatingSystemMXBean {
        getOpenFileDescriptorCount(): number
        getMaxFileDescriptorCount(): number
      }

    }
  }
}
