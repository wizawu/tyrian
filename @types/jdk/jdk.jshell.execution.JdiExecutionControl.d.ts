declare namespace jdk {
  namespace jshell {
    namespace execution {

      abstract class JdiExecutionControl extends jdk.jshell.execution.StreamingExecutionControl implements jdk.jshell.spi.ExecutionControl {

        protected constructor(arg0: java.io.ObjectOutput, arg1: java.io.ObjectInput)
        protected abstract vm(): com.sun.jdi.VirtualMachine
        public redefine(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        protected referenceType(arg0: com.sun.jdi.VirtualMachine, arg1: java.lang.String): com.sun.jdi.ReferenceType
      }

    }
  }
}
