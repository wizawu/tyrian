declare namespace jdk {
  namespace jshell {
    namespace execution {
      class StreamingExecutionControl implements jdk.jshell.spi.ExecutionControl {
        public constructor(arg0: java.io.ObjectOutput, arg1: java.io.ObjectInput)
        public load(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        public redefine(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        public invoke(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public varValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        public addToClasspath(arg0: java.lang.String | string): void
        public stop(): void
        public extensionCommand(arg0: java.lang.String | string, arg1: java.lang.Object | any): java.lang.Object
        public close(): void
      }
    }
  }
}
