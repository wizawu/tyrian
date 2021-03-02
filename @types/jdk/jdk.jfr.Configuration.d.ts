declare namespace jdk {
  namespace jfr {

    class Configuration {
      constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.util.Map<java.lang.String,java.lang.String>, arg5: java.lang.String)
      public getSettings(): java.util.Map<java.lang.String,java.lang.String>
      public getName(): java.lang.String
      public getLabel(): java.lang.String
      public getDescription(): java.lang.String
      public getProvider(): java.lang.String
      public getContents(): java.lang.String
      public static create(arg0: java.nio.file.Path): jdk.jfr.Configuration
      public static create(arg0: java.io.Reader): jdk.jfr.Configuration
      public static getConfiguration(arg0: java.lang.String): jdk.jfr.Configuration
      public static getConfigurations(): java.util.List<jdk.jfr.Configuration>
    }

  }
}
