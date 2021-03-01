declare namespace jdk {
  namespace jshell {
    namespace spi {

      interface ExecutionControl extends java.lang.AutoCloseable {

        load(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        redefine(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        invoke(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        varValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        addToClasspath(arg0: java.lang.String): void
        stop(): void
        extensionCommand(arg0: java.lang.String, arg1: java.lang.Object): java.lang.Object
        close(): void
        generate(arg0: jdk.jshell.spi.ExecutionEnv, arg1: java.lang.String, arg2: java.util.Map<java.lang.String,java.lang.String>): jdk.jshell.spi.ExecutionControl
        generate(arg0: jdk.jshell.spi.ExecutionEnv, arg1: java.lang.String): jdk.jshell.spi.ExecutionControl
      }

    }
  }
}
