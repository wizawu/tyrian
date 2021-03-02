declare namespace java {
  namespace lang {
    namespace management {

      interface PlatformLoggingMXBean extends java.lang.management.PlatformManagedObject {
        getLoggerNames(): java.util.List<java.lang.String>
        getLoggerLevel(arg0: java.lang.String): java.lang.String
        setLoggerLevel(arg0: java.lang.String, arg1: java.lang.String): void
        getParentLoggerName(arg0: java.lang.String): java.lang.String
      }

    }
  }
}
