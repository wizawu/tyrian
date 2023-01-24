declare namespace jdk {
  namespace management {
    namespace jfr {
      class ConfigurationInfo {
        constructor(arg0: jdk.jfr.Configuration)
        public getProvider(): java.lang.String
        public getContents(): java.lang.String
        public getSettings(): java.util.Map<java.lang.String, java.lang.String>
        public getLabel(): java.lang.String
        public getName(): java.lang.String
        public getDescription(): java.lang.String
        public static from(arg0: javax.management.openmbean.CompositeData): jdk.management.jfr.ConfigurationInfo
        public toString(): java.lang.String
      }
    }
  }
}
