declare namespace javax {
  namespace tools {
    class StandardLocation
      extends java.lang.Enum<javax.tools.StandardLocation>
      implements javax.tools.JavaFileManager$Location
    {
      public static readonly CLASS_OUTPUT: javax.tools.StandardLocation
      public static readonly SOURCE_OUTPUT: javax.tools.StandardLocation
      public static readonly CLASS_PATH: javax.tools.StandardLocation
      public static readonly SOURCE_PATH: javax.tools.StandardLocation
      public static readonly ANNOTATION_PROCESSOR_PATH: javax.tools.StandardLocation
      public static readonly ANNOTATION_PROCESSOR_MODULE_PATH: javax.tools.StandardLocation
      public static readonly PLATFORM_CLASS_PATH: javax.tools.StandardLocation
      public static readonly NATIVE_HEADER_OUTPUT: javax.tools.StandardLocation
      public static readonly MODULE_SOURCE_PATH: javax.tools.StandardLocation
      public static readonly UPGRADE_MODULE_PATH: javax.tools.StandardLocation
      public static readonly SYSTEM_MODULES: javax.tools.StandardLocation
      public static readonly MODULE_PATH: javax.tools.StandardLocation
      public static readonly PATCH_MODULE_PATH: javax.tools.StandardLocation
      public static values(): javax.tools.StandardLocation[]
      public static valueOf(arg0: java.lang.String | string): javax.tools.StandardLocation
      public static locationFor(arg0: java.lang.String | string): javax.tools.JavaFileManager$Location
      public getName(): java.lang.String
      public isOutputLocation(): boolean
      public isModuleOrientedLocation(): boolean
    }
  }
}
