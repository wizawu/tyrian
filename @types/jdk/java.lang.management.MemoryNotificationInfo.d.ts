declare namespace java {
  namespace lang {
    namespace management {

      class MemoryNotificationInfo {
        public static readonly MEMORY_THRESHOLD_EXCEEDED: java.lang.String
        public static readonly MEMORY_COLLECTION_THRESHOLD_EXCEEDED: java.lang.String
        public constructor(arg0: java.lang.String, arg1: java.lang.management.MemoryUsage, arg2: long)
        constructor(arg0: javax.management.openmbean.CompositeData)
        public getPoolName(): java.lang.String
        public getUsage(): java.lang.management.MemoryUsage
        public getCount(): long
        public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryNotificationInfo
      }

    }
  }
}
