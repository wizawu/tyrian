declare namespace jdk {
  namespace jshell {
    namespace execution {
      class RemoteExecutionControl
        extends jdk.jshell.execution.DirectExecutionControl
        implements jdk.jshell.spi.ExecutionControl
      {
        public static main(arg0: java.lang.String[] | string[]): void
        public constructor(arg0: jdk.jshell.execution.LoaderDelegate)
        public constructor()
        public redefine(arg0: jdk.jshell.spi.ExecutionControl$ClassBytecodes[]): void
        public stop(): void
        protected invoke(arg0: java.lang.reflect.Method): java.lang.String
        public varValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        protected throwConvertedInvocationException(arg0: java.lang.Throwable): java.lang.String
        protected throwConvertedOtherException(arg0: java.lang.Throwable): java.lang.String
        protected clientCodeEnter(): void
        protected clientCodeLeave(): void
      }
    }
  }
}
