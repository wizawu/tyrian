declare namespace jdk {
  namespace management {
    namespace jfr {
      class EventTypeInfo {
        constructor(arg0: jdk.jfr.EventType)
        public getLabel(): java.lang.String
        public getCategoryNames(): java.util.List<java.lang.String>
        public getId(): number
        public getName(): java.lang.String
        public getDescription(): java.lang.String
        public getSettingDescriptors(): java.util.List<jdk.management.jfr.SettingDescriptorInfo>
        public toString(): java.lang.String
        public static from(arg0: javax.management.openmbean.CompositeData): jdk.management.jfr.EventTypeInfo
      }
    }
  }
}
