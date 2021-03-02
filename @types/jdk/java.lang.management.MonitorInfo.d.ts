declare namespace java {
  namespace lang {
    namespace management {

      class MonitorInfo extends java.lang.management.LockInfo {
        public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.StackTraceElement)
        public getLockedStackDepth(): number
        public getLockedStackFrame(): java.lang.StackTraceElement
        public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MonitorInfo
      }

    }
  }
}
