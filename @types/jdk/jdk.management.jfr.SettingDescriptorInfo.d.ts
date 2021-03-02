declare namespace jdk {
  namespace management {
    namespace jfr {

      class SettingDescriptorInfo {
        constructor(arg0: jdk.jfr.SettingDescriptor)
        public getLabel(): java.lang.String
        public getName(): java.lang.String
        public getDescription(): java.lang.String
        public getTypeName(): java.lang.String
        public getContentType(): java.lang.String
        public getDefaultValue(): java.lang.String
        public static from(arg0: javax.management.openmbean.CompositeData): jdk.management.jfr.SettingDescriptorInfo
        public toString(): java.lang.String
      }

    }
  }
}
