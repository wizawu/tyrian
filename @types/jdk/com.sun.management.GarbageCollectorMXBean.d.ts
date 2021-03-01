declare namespace com {
  namespace sun {
    namespace management {

      interface GarbageCollectorMXBean extends java.lang.management.GarbageCollectorMXBean {

        getLastGcInfo(): com.sun.management.GcInfo
      }

    }
  }
}
