declare namespace com {
  namespace sun {
    namespace management {

      class GarbageCollectionNotificationInfo implements javax.management.openmbean.CompositeDataView {
        public static readonly GARBAGE_COLLECTION_NOTIFICATION: java.lang.String
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: com.sun.management.GcInfo)
        constructor(arg0: javax.management.openmbean.CompositeData)
        public getGcName(): java.lang.String
        public getGcAction(): java.lang.String
        public getGcCause(): java.lang.String
        public getGcInfo(): com.sun.management.GcInfo
        public static from(arg0: javax.management.openmbean.CompositeData): com.sun.management.GarbageCollectionNotificationInfo
        public toCompositeData(arg0: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData
      }

    }
  }
}
