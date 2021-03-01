declare namespace jdk {
  namespace jshell {
    namespace execution {

      class LocalExecutionControlProvider implements jdk.jshell.spi.ExecutionControlProvider {

        public constructor()
        public name(): java.lang.String
        public defaultParameters(): java.util.Map<java.lang.String,java.lang.String>
        public generate(arg0: jdk.jshell.spi.ExecutionEnv, arg1: java.util.Map<java.lang.String,java.lang.String>): jdk.jshell.spi.ExecutionControl
      }

    }
  }
}
