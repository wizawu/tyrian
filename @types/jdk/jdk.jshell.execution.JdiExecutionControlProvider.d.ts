declare namespace jdk {
  namespace jshell {
    namespace execution {
      class JdiExecutionControlProvider implements jdk.jshell.spi.ExecutionControlProvider {
        public static readonly PARAM_REMOTE_AGENT: java.lang.String
        public static readonly PARAM_TIMEOUT: java.lang.String
        public static readonly PARAM_HOST_NAME: java.lang.String
        public static readonly PARAM_LAUNCH: java.lang.String
        public constructor()
        public name(): java.lang.String
        public defaultParameters(): java.util.Map<java.lang.String, java.lang.String>
        public generate(
          arg0: jdk.jshell.spi.ExecutionEnv,
          arg1: java.util.Map<java.lang.String, java.lang.String>
        ): jdk.jshell.spi.ExecutionControl
      }
    }
  }
}
