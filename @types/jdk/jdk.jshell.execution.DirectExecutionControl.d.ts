declare namespace jdk {
  namespace jshell {
    namespace execution {

      class DirectExecutionControl implements jdk.jshell.spi.ExecutionControl {
        public constructor(arg0: jdk.jshell.execution.LoaderDelegate)
        public constructor()
        public load(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        public redefine(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        protected classesRedefined(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        public invoke(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public varValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        public addToClasspath(arg0: java.lang.String): void
        public stop(): void
        public extensionCommand(arg0: java.lang.String, arg1: java.lang.Object): java.lang.Object
        public close(): void
        protected findClass(arg0: java.lang.String): java.lang.Class<unknown>
        protected invoke(arg0: java.lang.reflect.Method): java.lang.String
        protected static valueString(arg0: java.lang.Object): java.lang.String
        protected throwConvertedInvocationException(arg0: java.lang.Throwable): java.lang.String
        protected throwConvertedOtherException(arg0: java.lang.Throwable): java.lang.String
        protected clientCodeEnter(): void
        protected clientCodeLeave(): void
      }

    }
  }
}
