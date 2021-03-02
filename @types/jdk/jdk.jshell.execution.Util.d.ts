declare namespace jdk {
  namespace jshell {
    namespace execution {

      class Util {
        public static forwardExecutionControl(arg0: jdk.jshell.spi.ExecutionControl, arg1: java.io.ObjectInput, arg2: java.io.ObjectOutput): void
        public static forwardExecutionControlAndIO(arg0: jdk.jshell.spi.ExecutionControl, arg1: java.io.InputStream, arg2: java.io.OutputStream, arg3: java.util.Map<java.lang.String,java.util.function$.Consumer<java.io.OutputStream>>, arg4: java.util.Map<java.lang.String,java.util.function$.Consumer<java.io.InputStream>>): void
        static multiplexingOutputStream(arg0: java.lang.String | string, arg1: java.io.OutputStream): java.io.OutputStream
        public static remoteInputOutput(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: java.util.Map<java.lang.String,java.io.OutputStream>, arg3: java.util.Map<java.lang.String,java.io.InputStream>, arg4: java.util.function$.BiFunction<java.io.ObjectInput,java.io.ObjectOutput,jdk.jshell.spi.ExecutionControl>): jdk.jshell.spi.ExecutionControl
        public static detectJdiExitEvent(arg0: com.sun.jdi.VirtualMachine, arg1: java.util.function$.Consumer<java.lang.String>): void
      }

    }
  }
}
