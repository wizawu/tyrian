declare namespace java {
  namespace lang {
    namespace management {

      class MonitorInfo extends java.lang.management.LockInfo {
        public constructor(arg0: java.lang.String, arg1: int, arg2: int, arg3: java.lang.StackTraceElement)
        public getLockedStackDepth(): int
        public getLockedStackFrame(): java.lang.StackTraceElement
        public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MonitorInfo
      }

    }
  }
}
