declare namespace jdk {
  namespace jshell {
    namespace execution {

      class JdiDefaultExecutionControl extends jdk.jshell.execution.JdiExecutionControl {

        static create(arg0: jdk.jshell.spi.ExecutionEnv, arg1: java.lang.String, arg2: boolean, arg3: java.lang.String, arg4: int): jdk.jshell.spi.ExecutionControl
        public invoke(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public stop(): void
        public close(): void
        protected vm(): com.sun.jdi.VirtualMachine
      }

    }
  }
}
