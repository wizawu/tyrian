declare namespace jdk {
  namespace jshell {
    namespace spi {
      interface ExecutionControlProvider {
        name(): java.lang.String
        defaultParameters(): java.util.Map<java.lang.String, java.lang.String>
        generate(
          arg0: jdk.jshell.spi.ExecutionEnv,
          arg1: java.util.Map<java.lang.String, java.lang.String>
        ): jdk.jshell.spi.ExecutionControl
      }
    }
  }
}
