declare namespace jdk {
  namespace jshell {
    namespace execution {

      class JdiDefaultExecutionControl extends jdk.jshell.execution.JdiExecutionControl {
        static create(arg0: jdk.jshell.spi.ExecutionEnv, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean, arg3: java.lang.String | string, arg4: number | java.lang.Integer): jdk.jshell.spi.ExecutionControl
        public invoke(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public stop(): void
        public close(): void
        protected vm(): com.sun.jdi.VirtualMachine
      }

    }
  }
}
