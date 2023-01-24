declare namespace jdk {
  namespace jshell {
    namespace execution {
      class LocalExecutionControl extends jdk.jshell.execution.DirectExecutionControl {
        public constructor(arg0: jdk.jshell.execution.LoaderDelegate)
        public constructor()
        protected invoke(arg0: java.lang.reflect.Method): java.lang.String
        public stop(): void
        protected clientCodeEnter(): void
        protected clientCodeLeave(): void
      }
    }
  }
}
